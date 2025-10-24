// middleware/auth.js
const auth = (req, res, next) => {
  const token = req.header('x-api-key');
  if (!token || token !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }
  next();
};

module.exports = auth;
