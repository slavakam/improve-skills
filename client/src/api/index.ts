import { AxiosResponse } from 'axios';
import http from '../../axios';

import { Car } from '../types/cars';
import { Auth } from '../types/auth';

export const fetchCars = (): Promise<AxiosResponse<Car[]>> =>
  http.get('/cars');

export const createCar = (car: Car): Promise<AxiosResponse<Car>> =>
  http.post('/cars', car);

export const updateCar = (carId: string, car: Car): Promise<AxiosResponse<Car>> =>
  http.patch(`/cars/${carId}`, car);

export const deleteCar = (carId: string): Promise<AxiosResponse<Car>> =>
  http.delete(`/cars/${carId}`);

export const registration = (email: string, password: string): Promise<AxiosResponse<Auth>> =>
  http.post('/signup', { email, password });

export const login = (email: string, password: string): Promise<AxiosResponse<Auth>> =>
  http.post('/signin', { email, password });
