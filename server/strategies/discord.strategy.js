const passport = require('passport');
const DiscordStrategy = require('passport-discord');

const pool = require('../modules/pool');


passport.serializeUser((user, done) => {
    console.log('in passport serialize')
    done(null, user.id)
});

passport.deserializeUser((discordId, done) => {
    pool.query(`SELECT * FROM "user" WHERE discordId = $1`, [discordId])
    .then((result) => {
        const user = result && result.rows && result.rows[0];

        if (user) {
            // user found
            done(null, user);
        }
    })
    
})

passport.use(
    'discord', 
    new DiscordStrategy({
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        redirectURL: process.env.DISCORD_REDIRECT,
        scope: ['identify', 'guilds'],
    }, ( accessToken, refreshToken, profile, done ) => {
        const { id, username, discriminator, avatar, guilds } = profile;
        console.log( id, username, discriminator, avatar, guilds );
        console.log('hello');

        pool.query('SELECT * FROM "user" WHERE discordId = $1;', [profile.id])
        .then((result) => {
            const user = result && result.rows && result.rows[0];
            console.log('in .then, user:', user);
            if (user) {
                done(null, user);
            } else {
                const newUser = pool.query(`INSERT INTO "user" ("discordId", "discordTag") VALUES ($1, $2);`, [profile.id, profile.username])
                done(null, newUser); 
            }
        }).catch((err) => {
            console.log('error in strategy', err);
            done(err, null);
        })
        // try {
        //     const findUser = await username.findOneAndUpdate(
        //         { discordId: id },
        //         { 
        //             discordTag: `${username}#${discriminator}`,
        //             avatar,
        //             guilds,
        //         },
        //         { new: true }
        //     );
        //     if (findUser) {
        //         console.log('User found');
        //         return done(null, findUser);
        //     } else {
        //         const newUser = await User.create({
        //             discordId: id,
        //             discordTag: `${username}#${discriminator}`,
        //             avatar,
        //             guilds,
        //         });
        //         return done(null, newUser);
        //     }
        // } catch (err) {
        //     console.log(err);
        //     return done (err, null);
        // }
    })

);



module.exports = passport;