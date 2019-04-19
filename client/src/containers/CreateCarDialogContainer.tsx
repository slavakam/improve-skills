import * as React from 'react';
import { connect } from 'react-redux';

import { CreateNewCarDialog } from '../components/CreateNewCarDialog';

import { AppState } from '../store';
import { selectors } from '../reducers/cars';
import { closeCreateCarDialogAction } from '../actions/cars';
import { createCarThunk } from '../thunks/cars';

interface CreateCarDialogContainerState {
  make: string;
  model: string;
  mileage: string;
  price: string;
}

interface CreateCarDialogContainerProps {
  isCreateCarDialogVisible: boolean;
  closeCreateCarDialog: () => void;
  createCar: (car: CreateCarDialogContainerState) => void;
}

interface CreateCarDialogContainerState {
  make: string;
  model: string;
  mileage: string;
  price: string;
}

class CreateCarDialogContainerComponent extends React.Component
<CreateCarDialogContainerProps, CreateCarDialogContainerState> {
  state = {
    make: '',
    model: '',
    mileage: '',
    price: '',
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  }

  onCloseDialog = (): void => {
    this.setState({
      make: '',
      model: '',
      mileage: '',
      price: '',
    });
    this.props.closeCreateCarDialog();
  }

  onCreateCar = (): void => {
    this.props.createCar(this.state);
    this.onCloseDialog();
  }

  render() {
    const { isCreateCarDialogVisible } = this.props;
    return isCreateCarDialogVisible && (
      <CreateNewCarDialog
        onClose={this.onCloseDialog}
        show={isCreateCarDialogVisible}
        onInputChange={this.onInputChange}
        onCreateCar={this.onCreateCar}
        {...this.state}
      />
    );
  }
}

export const CreateCarDialogContainer = connect((state: AppState) => ({
  isCreateCarDialogVisible: selectors.isCreateCarDialogVisibleSelector(state),
}), {
  closeCreateCarDialog: closeCreateCarDialogAction,
  createCar: createCarThunk,
})(CreateCarDialogContainerComponent);
