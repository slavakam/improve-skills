export interface Car {
  _id: string;
  make: string;
  model: string;
  mileage: string;
  price: string;
}

export interface CarsState {
  cars: Car[] | null;
  isCreateCarDialogVisible: boolean;
  isEditCarDialogVisible: boolean;
  selectedCarId: null | string;
}

export const CARS_OPEN_CREATE_CAR_DIALOG = 'CARS_OPEN_CREATE_CAR_DIALOG';
export const CARS_CLOSE_CREATE_CAR_DIALOG = 'CARS_CLOSE_CREATE_CAR_DIALOG';

export const CARS_OPEN_EDIT_CAR_DIALOG = 'CARS_OPEN_EDIT_CAR_DIALOG';
export const CARS_CLOSE_EDIT_CAR_DIALOG = 'CARS_CLOSE_EDIT_CAR_DIALOG';

export const CARS_FETCH_CARS = 'CARS_FETCH_CARS';
export const CARS_FETCH_CARS_SUCCESS = 'CARS_FETCH_CARS_SUCCESS';
export const CARS_FETCH_CARS_FAIL = 'CARS_FETCH_CARS_FAIL';

export const CARS_CREATE_CAR = 'CARS_CREATE_CAR';
export const CARS_CREATE_CAR_SUCCESS = 'CARS_CREATE_CAR_SUCCESS';
export const CARS_CREATE_CAR_FAIL = 'CARS_CREATE_CAR_FAIL';

export const CARS_UPDATE_CAR = 'CARS_UPDATE_CAR';
export const CARS_UPDATE_CAR_SUCCESS = 'CARS_UPDATE_CAR_SUCCESS';
export const CARS_UPDATE_CAR_FAIL = 'CARS_UPDATE_CAR_FAIL';

export const CARS_DELETE_CAR = 'CARS_DELETE_CAR';
export const CARS_DELETE_CAR_SUCCESS = 'CARS_DELETE_CAR_SUCCESS';
export const CARS_DELETE_CAR_FAIL = 'CARS_DELETE_CAR_FAIL';

interface CarsOpenCreateCarDialogAction {
  type: typeof CARS_OPEN_CREATE_CAR_DIALOG;
}
interface CarsCloseCreateCarDialogAction {
  type: typeof CARS_CLOSE_CREATE_CAR_DIALOG;
}

interface CarsOpenEditCarDialogAction {
  type: typeof CARS_OPEN_EDIT_CAR_DIALOG;
  carId: string;
}
interface CarsCloseEditCarDialogAction {
  type: typeof CARS_CLOSE_EDIT_CAR_DIALOG;
}
interface CarsFetchCarsAction {
  type: typeof CARS_FETCH_CARS;
}
interface CarsFetchCarsSuccessAction {
  type: typeof CARS_FETCH_CARS_SUCCESS;
  cars: Car[];
}
interface CarsFetchCarsFailAction {
  type: typeof CARS_FETCH_CARS_FAIL;
  err: Error;
}

interface CarsCreateCarAction {
  type: typeof CARS_CREATE_CAR;
}
interface CarsCreateCarSuccessAction {
  type: typeof CARS_CREATE_CAR_SUCCESS;
  car: Car;
}
interface CarsCreateCarFailAction {
  type: typeof CARS_CREATE_CAR_FAIL;
  err: Error;
}

interface CarsUpdateCarAction {
  type: typeof CARS_UPDATE_CAR;
}
interface CarsUpdateCarSuccessAction {
  type: typeof CARS_UPDATE_CAR_SUCCESS;
  car: Car;
}
interface CarsUpdateCarFailAction {
  type: typeof CARS_UPDATE_CAR_FAIL;
  err: Error;
}

interface CarsDeleteCarAction {
  type: typeof CARS_DELETE_CAR;
}
interface CarsDeleteCarSuccessAction {
  type: typeof CARS_DELETE_CAR_SUCCESS;
  carId: string;
}
interface CarsDeleteCarFailAction {
  type: typeof CARS_DELETE_CAR_FAIL;
  err: Error;
}

export type CarsActionType = CarsOpenCreateCarDialogAction |
CarsCloseCreateCarDialogAction |
CarsOpenEditCarDialogAction |
CarsCloseEditCarDialogAction |
CarsFetchCarsAction |
CarsFetchCarsSuccessAction |
CarsFetchCarsFailAction |
CarsCreateCarAction |
CarsCreateCarSuccessAction |
CarsCreateCarFailAction |
CarsUpdateCarAction |
CarsUpdateCarSuccessAction |
CarsUpdateCarFailAction |
CarsDeleteCarAction |
CarsDeleteCarSuccessAction |
CarsDeleteCarFailAction;
