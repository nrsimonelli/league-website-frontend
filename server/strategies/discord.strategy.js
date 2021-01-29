const passport = require('passport');
const DiscordStrategy = require('passport-discord');

const pool = require('../modules/pool');


passport.serializeUser((user, done) => {
    done(null, user.discordId)
});

passport.deserializeUser(async(discordId, done) => {
    try {
        const user =await User.findOne({discordId});
        return user ? done(null, user) : done(null, null);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});

passport.use( 
    new DiscordStrategy({
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        redirectURL: process.env.DISCORD_REDIRECT,
        scope: ['identify', 'guilds'],
    }, async( accessToken, refreshToken, profile, done ) => {
        const { id, username, discriminator, avatar, guilds } = profile;
        console.log( id, username, discriminator, avatar, guilds );
        try {
            const findUser = await username.findOneAndUpdate(
                { discordId: id },
                { 
                    discordTag: `${username}#${discriminator}`,
                    avatar,
                    guilds,
                },
                { new: true }
            );
            if (findUser) {
                console.log('User found');
                return done(null, findUser);
            } else {
                const newUser = await User.create({
                    discordId: id,
                    discordTag: `${username}#${discriminator}`,
                    avatar,
                    guilds,
                });
                return done(null, newUser);
            }
        } catch (err) {
            console.log(err);
            return done (err, null);
        }
    })

);



module.exports = passport;