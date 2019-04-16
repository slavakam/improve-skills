import { CarsState, CarsActionType } from './types';
import { AppState } from '..';

const defaultState: CarsState = {
  cars: null,
  isCreateCarDialogVisible: false,
};

export const reducer = (
  state = defaultState,
  action: CarsActionType,
): CarsState => {
  switch (action.type) {
    default: return state;
  }
};

const carsStateSelector = (state: AppState) => state.cars;

const carsSelector = (state: AppState) => carsStateSelector(state).cars || [];

const isCreateCarDialogVisibleSelector = (state: AppState) =>
  carsStateSelector(state).isCreateCarDialogVisible;

export const selectors = {
  carsSelector,
  isCreateCarDialogVisibleSelector,
};
