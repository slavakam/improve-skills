import axios, { AxiosResponse } from 'axios';
import { Car } from '../types/cars';

export const fetchCars = (): Promise<AxiosResponse<Car[]>> =>
  axios.get('http://localhost:3001/cars');

export const createCar = (car: Car): Promise<AxiosResponse<Car>> =>
  axios.post('http://localhost:3001/cars', car);

export const deleteCar = (carId: string): Promise<AxiosResponse<Car>> =>
  axios.delete(`http://localhost:3001/cars/${carId}`);
