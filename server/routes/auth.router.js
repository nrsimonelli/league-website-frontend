const express = require('express');

const router = express.Router();

router.get( '/discord', passport.authenticate( 'discord' ));

router.get( 'discord/redirect', passport.authenticate( 'discord' ), (req, res) => {
    res.send(200);
});





module.exports = router;