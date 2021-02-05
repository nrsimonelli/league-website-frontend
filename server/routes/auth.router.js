const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('discord'));

router.get('/login', passport.authenticate('discord', {
    failureRedirect: '/forbidden',
    successRedirect: '/'

}));

module.exports = router;