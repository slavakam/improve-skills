import {
  Car,
  CARS_OPEN_CREATE_CAR_DIALOG,
  CARS_CLOSE_CREATE_CAR_DIALOG,
  CARS_FETCH_CARS,
  CARS_FETCH_CARS_SUCCESS,
  CARS_FETCH_CARS_FAIL,
  CARS_CREATE_CAR,
  CARS_CREATE_CAR_SUCCESS,
  CARS_CREATE_CAR_FAIL,
  CarsActionType,
} from '../../types/cars';

export const openCreateCardDialogAction = (): CarsActionType => ({
  type: CARS_OPEN_CREATE_CAR_DIALOG,
});
export const closeCreateCardDialogAction = (): CarsActionType => ({
  type: CARS_CLOSE_CREATE_CAR_DIALOG,
});

export const fetchCarsAction = (): CarsActionType => ({
  type: CARS_FETCH_CARS,
});
export const fetchCarsSuccessAction = (cars: Car[]): CarsActionType => ({
  type: CARS_FETCH_CARS_SUCCESS,
  cars,
});
export const fetchCarsFailAction = (err: Error): CarsActionType => ({
  type: CARS_FETCH_CARS_FAIL,
  err,
});

export const createCarAction = (): CarsActionType => ({
  type: CARS_CREATE_CAR,
});
export const createCarSuccessAction = (): CarsActionType => ({
  type: CARS_CREATE_CAR_SUCCESS,
});
export const createCarFailAction = (): CarsActionType => ({
  type: CARS_CREATE_CAR_FAIL,
});
