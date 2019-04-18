import { CarsState, Car } from '../../types/cars';
import { AppState } from '../../store';

const carsStateSelector = (state: AppState): CarsState => state.cars;

export const carsSelector = (state: AppState): Car[] => carsStateSelector(state).cars || [];

export const isCreateCarDialogVisibleSelector = (state: AppState): boolean =>
  carsStateSelector(state).isCreateCarDialogVisible;
