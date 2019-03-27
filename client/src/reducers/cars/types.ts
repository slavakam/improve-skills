export interface Car {
  _id: string;
  make: string;
  model: string;
  mileage: string;
  price: string;
}

export interface CarsState {
  cars: Car[];
}
