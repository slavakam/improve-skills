import { handleActions } from 'redux-actions';

import { CarsState } from './types';
import { AppState } from '..';

const defaultState: CarsState = {
  cars: null,
};

export const reducer = handleActions({ }, defaultState);

const carsStateSelector = (state: AppState) => state.cars;

const carsSelector = (state: AppState) => carsStateSelector(state).cars || [];

export const selectors = {
  carsSelector,
};
