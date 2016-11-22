const express = require('express');
const models = require('../models/index');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const isDeveloping = process.env.NODE_ENV !== 'production';
let clientID;
let clientSecret;
let callbackURL;

const router = new express.Router();

const jsonParser = bodyParser.json();

/* Passport.js config and authentication routes */

// Set environment variables needed for oauth2
if (!isDeveloping) {
    clientID = process.env.CLIENT_ID;
    clientSecret = process.env.CLIENT_SECRET;
    callbackURL = 'https://shrouded-fortress-20795.herokuapp.com/auth/google/callback';
}

else {
    const token = require('../config/token.json');
    clientID = token.clientID;
    clientSecret = token.client_secret;
    callbackURL = 'http://127.0.0.1:3000/auth/google/callback';
}

// Passport serialization for session management
passport.serializeUser((user, done) => {
    done(null, {
        userName: user.username,
        loggedIn: true,
        id: user.id,
    });
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Configure passport
passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL,
    passReqToCallback: true,
},
(requestToken, accessToken, refreshToken, googleProfile, done) => {
    process.nextTick(() => {
        models.User.find({
            where: {
                userId: googleProfile.id,
            },
        }).then((user) => {
            if (!user) {
                models.User.create({
                    username: googleProfile.displayName,
                    userId: googleProfile.id,
                }).then((newUser) => {
                    return done(null, newUser);
                }).catch((error) => {
                    console.log(`Error creating user:\n${error}`);
                });
            }
            else {
                return done(null, user);
            }
        }).catch((error) => {
            res.status(500).send(`Error retrieving user:\n${error}`);
        });
    });
}));

router.get('/auth/google',
    passport.authenticate('google', {
        scope: 'profile',
    })
);

router.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login',
    }),
    (req, res) => {
        res.redirect('/');
    }
);

// Server endpoint that is pinged when app is redirected after login
router.get('/login', (req, res) => {
    if (!req.isAuthenticated()) {
        res.json({ loggedIn: '' });
    }
    else {
        res.json(req.user);
    }
});

// Server endpoint for logging out
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

/* REST api */

// Get specific user
router.get('/api/user/:id', (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        res.status(500).send('Invalid user id');
    }
    let user;
    models.User.find({
        where: {
            id: req.params.id,
        },
    }).then((queryResult) => {
        user = queryResult;
        return models.Poll.findAll({
            where: {
                UserId: req.params.id,
            },
            include: [
                models.Answers,
            ],
        });
    }).then((queryResult) => {
        res.json({
            polls: queryResult,
            user,
        });
    })
    .catch((err) => {
        console.log(`There was an error: ${err}`);
    });
});

// Get all polls
router.get('/api/polls', (req, res) => {
    models.Poll.findAll({
        order: '"createdAt" DESC',
    }).then((polls) => {
        res.json(polls);
    });
});

// Get specific poll
router.get('/api/poll/:id', (req, res) => {
    models.Poll.find({
        where: {
            id: req.params.id,
        },
        include: [
            models.Answers,
        ],
    }).then((queryResult) => {
        res.json(queryResult);
    })
    .catch((err) => {
        res.status(500).send(`There was an error: ${err}`);
    });
});

// Get all polls associated with a specific user
router.get('/api/poll/user/:id', (req, res) => {
    models.Poll.find({
        where: {
            UserId: req.params.id,
        },
    }).then((queryResult) => {
        res.json(queryResult);
    })
    .catch((err) => {
        res.status(500).send(`There was an error: ${err}`);
    });
});

// Create new poll
router.post('/api/createpoll', jsonParser, (req, res) => {
    if (req.isAuthenticated()) {
        let pollId;
        models.User.find({
            where: {
                username: req.body.userName,
            },
        }).then((user) => {
            return models.Poll.create({
                question: req.body.question,
                UserId: user.id,
            });
        }).then((poll) => {
            pollId = poll.id;
            return req.body.answers.map((answer, index) => {
                return models.Answers.create({
                    answer,
                    PollId: poll.id,
                    votes: 0,
                });
            });
        }).then((result) => {
            res.json(pollId);
        })
        .catch((err) => {
            res.status(500).send(`Error creating poll: ${err}`);
        });
    }
    else {
        res.status(401).send('You must be logged in to create a poll.');
    }
});

// Update poll
router.put('/api/updatepoll', (req, res) => {
    if (req.isAuthenticated()) {
        models.Poll.find({
            where: {
                id: req.params.id,
            },
        }).then((poll) => {
            if (poll) {
                poll.updateAttributes({
                    question: req.body.question,
                }).then((updatedPoll) => {
                    res.send(updatedPoll);
                });
            }
        });
    }
    else {
        res.status(401).send('You must be logged in to vote');
    }
});

// Update answer with new vote
router.put('/api/vote/:id', jsonParser, (req, res) => {
    models.Answers.find({
        where: {
            id: req.params.id,
        },
    }).then((answer) => {
        return answer.increment('votes');
    }).then((answer) => {
        let userIdentifier;
        if (!req.body.userName) {
            userIdentifier = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        }
        else {
            userIdentifier = req.body.userName;
        }
        console.log(userIdentifier);
        return answer.update({
            votedBy: sequelize.fn('array_append', sequelize.col('votedBy'), userIdentifier),
        });
    }).then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(500).send(`Error updating: ${err}`);
        console.log(err);
    });
});

// Delete a poll
router.delete('/api/deletepoll/:id', (req, res) => {
    models.Poll.destroy({
        where: {
            id: req.params.id,
        },
    }).then((poll) => {
        res.json(poll);
    });
});

// Authentication middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
}

module.exports = router;
