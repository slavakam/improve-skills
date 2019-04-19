import {
  CarsState,
  CarsActionType,
  CARS_OPEN_CREATE_CAR_DIALOG,
  CARS_CLOSE_CREATE_CAR_DIALOG,
  CARS_FETCH_CARS_SUCCESS,
  CARS_CREATE_CAR_SUCCESS,
  CARS_DELETE_CAR_SUCCESS,
} from '../../types/cars';

const defaultState: CarsState = {
  cars: null,
  isCreateCarDialogVisible: false,
};

export const reducer = (
  state = defaultState,
  action: CarsActionType,
): CarsState => {
  switch (action.type) {
    case CARS_OPEN_CREATE_CAR_DIALOG:
      return {
        ...state,
        isCreateCarDialogVisible: true,
      };
    case CARS_CLOSE_CREATE_CAR_DIALOG:
      return {
        ...state,
        isCreateCarDialogVisible: false,
      };
    case CARS_FETCH_CARS_SUCCESS:
      return {
        ...state,
        cars: action.cars,
      };
    case CARS_CREATE_CAR_SUCCESS:
      return {
        ...state,
        cars: [...state.cars, action.car],
      };
    case CARS_DELETE_CAR_SUCCESS:
      return {
        ...state,
        cars: state.cars.filter(car => car._id !== action.carId),
      };
    default: return state;
  }
};
