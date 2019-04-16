export interface Car {
  _id: string;
  make: string;
  model: string;
  mileage: string;
  price: string;
}

export interface CarsState {
  cars: Car[];
  isCreateCarDialogVisible: boolean;
}

export const CARS_OPEN_CREATE_CAR_DIALOG = 'CARS_OPEN_CREATE_CAR_DIALOG';

export const CARS_FETCH_CARS = 'CARS_FETCH_CARS';
export const CARS_FETCH_CARS_SUCCESS = 'CARS_FETCH_CARS_SUCCESS';
export const CARS_FETCH_CARS_FAIL = 'CARS_FETCH_CARS_FAIL';

export const CARS_CREATE_CAR = 'CARS_CREATE_CAR';
export const CARS_CREATE_CAR_SUCCESS = 'CARS_CREATE_CAR_SUCCESS';
export const CARS_CREATE_CAR_FAIL = 'CARS_CREATE_CAR_FAIL';

interface CarsOpenCreateCarDialogAction {
  type: typeof CARS_OPEN_CREATE_CAR_DIALOG;
}

interface CarsFetchCarsAction {
  type: typeof CARS_FETCH_CARS;
}

interface CarsFetchCarsSuccessAction {
  type: typeof CARS_FETCH_CARS_SUCCESS;
}

interface CarsFetchCarsFailAction {
  type: typeof CARS_FETCH_CARS_FAIL;
}

interface CarsCreateCarAction {
  type: typeof CARS_CREATE_CAR;
}

interface CarsCreateCarSuccessAction {
  type: typeof CARS_CREATE_CAR_SUCCESS;
}

interface CarsCreateCarFailAction {
  type: typeof CARS_CREATE_CAR_FAIL;
}

export type CarsActionType = CarsOpenCreateCarDialogAction |
CarsFetchCarsAction |
CarsFetchCarsSuccessAction |
CarsFetchCarsFailAction |
CarsCreateCarAction |
CarsCreateCarSuccessAction |
CarsCreateCarFailAction;
