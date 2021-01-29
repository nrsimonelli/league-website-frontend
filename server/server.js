const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");

const passport = require("./strategies/discord.strategy");

// Route includes
const authRouter = require('./routes/auth.router');




// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);


// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRouter);



// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 4000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });