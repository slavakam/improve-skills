import { createAction } from 'redux-actions';

export const fetchCarsAction = createAction('CARS_FETCH_CARS');
export const fetchCarsSuccessAction = createAction('CARS_FETCH_CARS_SUCCESS');
export const fetchCarsFailAction = createAction('CARS_FETCH_CARS_FAIL');

export const createCarAction = createAction('CARS_CREATE_CAR');
export const createCarSuccessAction = createAction('CARS_CREATE_CAR_SUCCESS');
export const createCarFailAction = createAction('CARS_CREATE_CAR_FAIL');
