const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('discord'));

router.get('/login', passport.authenticate('discord'), (req, res) => {
    res.sendStatus(200);
});

router.get('/login', (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send({msg: 'Unauthorized' });
    }
    
})





module.exports = router;