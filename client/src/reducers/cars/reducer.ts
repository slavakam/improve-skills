import {
  CarsState,
  CarsActionType,
  CARS_OPEN_CREATE_CAR_DIALOG,
  CARS_CLOSE_CREATE_CAR_DIALOG,
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
    default: return state;
  }
};
