const passport = require('passport');
const DiscordStrategy = require('passport-discord');

const pool = require('../modules/pool');


passport.serializeUser((user, done) => {
    console.log('in passport serialize')
    done(null, user.discord_id)
});

passport.deserializeUser((discord_id, done) => {
    pool.query(`SELECT * FROM "user" WHERE discord_id = $1`, [discord_id])
    .then((result) => {
        const user = result && result.rows && result.rows[0];

        if (user !== undefined) {
            // user found
            done(null, user);
        }
    }).catch((err) => {
        console.log('error in deserialize', err);
        done(err, null);
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
        try  {
            const { id, username, discriminator, avatar, guilds } = profile;
            console.log( id, username, discriminator, avatar, guilds );

            pool.query('SELECT * FROM "user" WHERE discord_id = $1;', [id])
            .then((result) => {
                const user = result && result.rows && result.rows[0];
                console.log('in .then, user:', user);

                if (user !== undefined) {

                    done(null, user);

                } else {

                    const newUser = pool.query(
                        `INSERT INTO "user" ("discord_id", "discord_tag", "avatar", "guilds") 
                        VALUES ($1, $2, $3, $4);`, 
                        [profile.id, `${profile.username}#${profile.discriminator}`, profile.avatar, profile.guilds])

                    done(null, newUser); 
                }
            })

        } catch {
            console.log('error in passport', err);
            return done (err, null);
        }
        
    })

);



module.exports = passport;