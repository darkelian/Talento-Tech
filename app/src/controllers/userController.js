// src/controllers/userController.js

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  res.send(`Get user with ID molesto: ${userId}`);
};

exports.getAllUsers = (req, res) => {
  res.send('Get all users');
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  res.send('Create new user');
};
