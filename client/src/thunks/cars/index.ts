import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Car } from '../../types/cars';
import { AppState } from '../../store';
import {
  fetchCarsAction,
  fetchCarsSuccessAction,
  fetchCarsFailAction,
  createCarAction,
  createCarSuccessAction,
  createCarFailAction,
  deleteCarSuccessAction,
  deleteCarFailAction,
} from '../../actions/cars';
import { fetchCars, createCar, deleteCar } from '../../api';

export const fetchCarsThunk = ():
ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch(fetchCarsAction());

  try {
    const { data } = await fetchCars();
    dispatch(fetchCarsSuccessAction(data));
  } catch (err) {
    dispatch(fetchCarsFailAction(err));
  }
};

export const createCarThunk = (car: Car):
ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch(createCarAction());

  try {
    const { data } = await createCar(car);
    dispatch(createCarSuccessAction(data));
  } catch (err) {
    dispatch(createCarFailAction(err));
  }
};

export const deleteCarThunk = (carId: string):
ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    await deleteCar(carId);
    dispatch(deleteCarSuccessAction(carId));
  } catch (err) {
    dispatch(deleteCarFailAction(err));
  }
};
