const CarController = require('./controllers/car');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });

  app.get('/cars', CarController.getCars);
  app.post('/cars', CarController.create);
  app.patch('/cars/:id', CarController.update);
  app.delete('/cars/:id', CarController.delete);
}