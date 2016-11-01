const express = require('express');
const models = require('../models/index');
const passport = require('passport');
const token = require('../config/token.json');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const bodyParser = require('body-parser');

const router = new express.Router();

const jsonParser = bodyParser.json();

/* Passport.js config and authentication routes */

// Passport serialization for session management
passport.serializeUser((user, done) => {
    done(null, {
        userName: user.username,
        loggedIn: true,
    });
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Configure passport
passport.use(new GoogleStrategy({
    clientID: token.clientID,
    clientSecret: token.client_secret,
    callbackURL: 'http://127.0.0.1:3000/auth/google/callback',
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
            console.log(`Error retrieving user:\n${error}`);
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

// Server endpoint that is pinged when app initializes
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
    models.User.find({
        where: {
            id: req.params.id,
        },
    }).then((user) => {
        res.json(user);
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
    const response = {};
    models.Poll.find({
        where: {
            id: req.params.id,
        },
        include: [
            models.Answers,
            models.Votes,
        ],
    }).then((queryResult) => {
        // response.pollAndAnswer = {
        //     queryResult,
        // };
        res.json(queryResult);
        // return models.Votes.find({
        //     where: {
        //         PollId: req.params.id,
        //     },
        // });
    })
    .catch((err) => {
        console.log(`There was an error: ${err}`);
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
                });
            });
        }).then((result) => {
            res.json(pollId);
        }).catch((err) => {
            console.log(`Error creating poll: ${err}`);
        });
    }
    else {
        res.status(401).send('You must be logged in to create a poll.');
    }
});

// Update poll
router.put('/api/updatepoll', (req, res) => {
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

module.exports = router;
