const express = require('express');
const router = new express.Router();
const models = require('../models/index');

// Middleware
router.use((req, res, next) => {
    next();
});

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

// Create user TODO: connect passport.js

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
