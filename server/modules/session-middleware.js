const cookieSession = require('cookie-session');
const warnings = require('../constants/warnings');

const serverSessionSecret = () => {
  if (!process.env.SERVER_SESSION_SECRET ||
      process.env.SERVER_SESSION_SECRET.length < 8 ||
      process.env.SERVER_SESSION_SECRET === warnings.exampleBadSecret) {
    // Warning if user doesn't have a good secret
    console.log(warnings.badSecret);
  }

  return process.env.SERVER_SESSION_SECRET;
};

module.exports = cookieSession({
  secret: serverSessionSecret() || 'secret', 
  key: 'user', 
  resave: 'false',
  saveUninitialized: false,
  maxAge: 24 * 60 * 60 * 1000, // Set to 1 day - 24 hour/day * 60 min/hour * 60 s/min * 1000 ms/s
  secure: false
});