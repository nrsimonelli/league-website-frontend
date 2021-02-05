const express = require('express');
const passport = require('passport');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/login', passport.authenticate('discord', {
    failureRedirect: '/forbidden',
    successRedirect: 'http://localhost:3000/'
}));

router.get('/', rejectUnauthenticated, (req, res) => {
    res.send(req.user);
    console.log('testing req.user', req.user);
})

router.get('/test', rejectUnauthenticated, (req, res) => {
    res.sendStatus(200);
    console.log('req.user:', req.user);
})

router.post('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
})


module.exports = router;