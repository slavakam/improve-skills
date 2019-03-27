import axios, { AxiosResponse } from 'axios';
import { Car } from '../interfaces';

export const fetchCars = (): Promise<AxiosResponse<Car[]>> => axios.get('http://localhost:3001/cars');

export const createCar = (): Promise<AxiosResponse<Car[]>> => axios.post('http://localhost:3001/cars');
