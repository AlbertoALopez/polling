const express = require('express');
const models = require('../models/index');
const passport = require('passport');
const token = require('../config/token.json');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const router = new express.Router();

/* Passport.js config and pertinent routes */

// Passport serialization for session management
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

// Configure passport
passport.use(new GoogleStrategy({
    clientID: token.clientID,
    clientSecret: token.client_secret,
    callbackURL: 'http://127.0.0.1:3000/auth/google/callback',
    passReqToCallback: true,
},
(requestToken, accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
        console.log(profile);
        return done(null, profile);
    });
}));

router.get('/auth/google',
    passport.authenticate('google', {
        scope: 'profile',
    })
);

router.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login/failure',
        successRedirect: '/',
    })
);

/* REST api */

// Get all users
router.get('/api/users', (req, res) => {
    models.User.findAll({ order: '"createdAt" DESC' }).then((users) => {
        res.json(users);
    });
});

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
    models.Poll.find({
        where: {
            id: req.params.id,
        },
    }).then((poll) => {
        res.json(poll);
    });
});

// Create new poll
router.post('/api/polls', (req, res) => {
    models.Poll.create({
        question: req.body.question,
    }).then((poll) => {
        res.json(poll);
    });
});

// Update poll
router.put('/api/polls', (req, res) => {
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
router.delete('/api/poll/:id', (req, res) => {
    models.Poll.destroy({
        where: {
            id: req.params.id,
        },
    }).then((poll) => {
        res.json(poll);
    });
});

module.exports = router;
