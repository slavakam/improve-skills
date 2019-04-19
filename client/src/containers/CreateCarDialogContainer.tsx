import * as React from 'react';
import { connect } from 'react-redux';

import { CreateCarDialog } from '../components/CreateCarDialog';

import { closeCreateCarDialogAction } from '../actions/cars';
import { createCarThunk } from '../thunks/cars';

interface CreateCarDialogContainerState {
  make: string;
  model: string;
  mileage: string;
  price: string;
}

interface CreateCarDialogContainerProps {
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

  onCreateCar = (): void => {
    this.props.createCar(this.state);
    this.props.closeCreateCarDialog();
  }

  render() {
    return (
      <CreateCarDialog
        onClose={this.props.closeCreateCarDialog}
        show
        onInputChange={this.onInputChange}
        onCreateCar={this.onCreateCar}
        {...this.state}
      />
    );
  }
}

export const CreateCarDialogContainer = connect(null, {
  closeCreateCarDialog: closeCreateCarDialogAction,
  createCar: createCarThunk,
})(CreateCarDialogContainerComponent);
