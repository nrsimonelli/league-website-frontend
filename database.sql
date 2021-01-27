CREATE TABLE season (
  id SERIAL PRIMARY KEY NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  active BOOLEAN
);

CREATE TABLE league (
  id SERIAL PRIMARY KEY NOT NULL,
  division INT NOT NULL,
  leagueNumber INT NOT NULL,
  season_id INT REFERENCES season
);

CREATE TABLE player (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(80) NOT NULL UNIQUE,
  signedUpForNextSeason BOOLEAN DEFAULT TRUE,
  signUpTime DATE
);

CREATE TABLE leauge_player (
  league_id INT REFERENCES league,
  player_id INT REFERENCES player,
  finishedGames INT,
  position INT NOT NULL,
  points FLOAT,
  first FLOAT,
  second FLOAT,
  third FLOAT,
  fourth FLOAT,
  avgPercentWinningCoin FLOAT
);

CREATE TABLE game (
  id SERIAL PRIMARY KEY NOT NULL,
  league_id INT REFERENCES league,
  gameNumber INT NOT NULL,
  finished BOOLEAN DEFAULT FALSE
);

CREATE TABLE game_player (
  game_id INT REFERENCES game,
  player_id INT REFERENCES player,
  faction VARCHAR(80),
  mat VARCHAR(80),
  bid INT,
  score INT,
  round INT,
  rank INT
);