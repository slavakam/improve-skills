const Car = require('../models/car');

exports.create = (req, res, next) => {
  const { make, model, mileage, price } = req.body;

  if (!make || !model || !mileage || !price) {
    return res.status(422).send({ error: 'You must provide make and model'});
  }

  const car = new Car({ make, model, mileage, price });

  car.save((err, car) => {
    if (err) return next(err);

    res.json(car);
  });
};

exports.getCars = (req, res) => {
  Car.find((err, cars) => {
    if (err) return next(err);

    res.json(cars);
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Car.deleteOne({ _id: id }, (err) => {
    if (err) return next(err);

    res.send();
  })
};

exports.update = (req, res) => {
  const { id } = req.params;

  Car.findOneAndUpdate({ _id: id }, req.body, (err, car) => {
    if (err) return next(err);

    res.json(car);
  })
};
