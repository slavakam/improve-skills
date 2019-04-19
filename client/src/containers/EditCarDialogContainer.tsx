import * as React from 'react';
import { connect } from 'react-redux';

import { EditCarDialog } from '../components/EditCarDialog';

import { AppState } from '../store';
import { selectors } from '../reducers/cars';
import { closeEditCarDialogAction } from '../actions/cars';
import { updateCarThunk } from '../thunks/cars';
import { Car } from '../types/cars';

interface EditCarDialogContainerState {
  make: string;
  model: string;
  mileage: string;
  price: string;
}

interface EditCarDialogContainerProps {
  car: Car;
  closeEditCarDialog: () => void;
  updateCar: (carId: string, car: EditCarDialogContainerState) => void;
}

class EditCarDialogContainerComponent extends React.Component
<EditCarDialogContainerProps, EditCarDialogContainerState> {
  constructor(props: EditCarDialogContainerProps) {
    super(props);

    this.state = {
      make: props.car.make,
      model: props.car.model,
      mileage: props.car.mileage,
      price: props.car.price,
    };
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  }

  onUpdateCar = (): void => {
    this.props.updateCar(this.props.car._id, this.state);
    this.props.closeEditCarDialog();
  }

  render() {
    return (
      <EditCarDialog
        onClose={this.props.closeEditCarDialog}
        show
        onInputChange={this.onInputChange}
        onUpdateCar={this.onUpdateCar}
        {...this.state}
      />
    );
  }
}

export const EditCarDialogContainer = connect((state: AppState) => ({
  car: selectors.carByIdSelector(state),
}), {
  closeEditCarDialog: closeEditCarDialogAction,
  updateCar: updateCarThunk,
})(EditCarDialogContainerComponent);
