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

module.exports = router;
