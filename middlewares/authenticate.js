// middlewares/authenticateJWT.js
const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Not authenticated');

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded; // now accessible in your route
    next();
  } catch (err) {
    return res.status(403).send('Invalid token');
  }
}

module.exports = authenticateJWT;
