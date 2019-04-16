import {
  CARS_OPEN_CREATE_CAR_DIALOG,
  CARS_FETCH_CARS,
  CARS_FETCH_CARS_SUCCESS,
  CARS_FETCH_CARS_FAIL,
  CARS_CREATE_CAR,
  CARS_CREATE_CAR_SUCCESS,
  CARS_CREATE_CAR_FAIL,
} from './types';

export const openCreateCardDialogAction = () => ({
  type: CARS_OPEN_CREATE_CAR_DIALOG,
});

export const fetchCarsAction = () => ({
  type: CARS_FETCH_CARS,
});
export const fetchCarsSuccessAction = () => ({
  type: CARS_FETCH_CARS_SUCCESS,
});
export const fetchCarsFailAction = () => ({
  type: CARS_FETCH_CARS_FAIL,
});

export const createCarAction = () => ({
  type: CARS_CREATE_CAR,
});
export const createCarSuccessAction = () => ({
  type: CARS_CREATE_CAR_SUCCESS,
});
export const createCarFailAction = () => ({
  type: CARS_CREATE_CAR_FAIL,
});
