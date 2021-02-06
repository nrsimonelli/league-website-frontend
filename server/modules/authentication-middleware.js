const rejectUnauthenticated = (req, res, next) => {

  if(req.isAuthenticated()) {
    next();
  } else {
    // add redirect here
    res.sendStatus(403);
  }
}

module.exports = { rejectUnauthenticated };