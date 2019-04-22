const CarController = require('./controllers/car');
const AuthenticationController = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' });
  });

  app.get('/cars', requireAuth, CarController.getCars);
  app.post('/cars', requireAuth, CarController.create);
  app.patch('/cars/:id', requireAuth, CarController.update);
  app.delete('/cars/:id', requireAuth, CarController.delete);


  app.post('/signin', requireSignin, AuthenticationController.signin);
  app.post('/signup', AuthenticationController.signup);
}