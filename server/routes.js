const AuthController = require('./controllers/auth_controller');

module.exports = app => {
  app.post('/login', AuthController.signin);
  app.post('/signup', AuthController.signup);
  app.get('/logout', AuthController.logout);
  app.get('/authstatus', (req, res) => {
    res.send(req.user || {});
  });
};
