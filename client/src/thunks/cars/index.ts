import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppState } from '../../store';
import { fetchCarsSuccessAction, fetchCarsFailAction, fetchCarsAction } from '../../actions/cars';
import { fetchCars } from '../../api';

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
