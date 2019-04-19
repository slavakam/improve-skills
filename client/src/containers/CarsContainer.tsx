import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { CreateCarDialogContainer } from './CreateCarDialogContainer';
import { EditCarDialogContainer } from './EditCarDialogContainer';
import { CarsTable } from '../components/CarsTable';

import { AppState } from '../store';
import { selectors } from '../reducers/cars';
import {
  openCreateCardDialogAction,
  openEditCardDialogAction,
} from '../actions/cars';
import { fetchCarsThunk, deleteCarThunk } from '../thunks/cars';
import { Car } from '../types/cars';

interface CarsContainerProps {
  cars: Car[];
  isCreateNewCarDialogVisible: boolean;
  isEditCarDialogVisible: boolean;
  openCreateCardDialog: () => void;
  openEditCardDialog: (carId: string) => void;
  fetchCars: () => void;
  deleteCar: (carId: string) => void;
}

class CarsContainerComponent extends React.Component<CarsContainerProps, null> {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    const {
      cars,
      openCreateCardDialog,
      openEditCardDialog,
      deleteCar,
      isEditCarDialogVisible,
      isCreateNewCarDialogVisible,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Button onClick={openCreateCardDialog} variant="outline-primary">Create new car</Button>
          </Col>
        </Row>
        {cars.length > 0 && (
          <CarsTable cars={cars} deleteCar={deleteCar} openEditCardDialog={openEditCardDialog} />
        )}
        {isCreateNewCarDialogVisible && <CreateCarDialogContainer />}
        {isEditCarDialogVisible && <EditCarDialogContainer />}
      </Container>
    );
  }
}

export const CarsContainer = connect((state: AppState) => ({
  isCreateNewCarDialogVisible: selectors.isCreateCarDialogVisibleSelector(state),
  isEditCarDialogVisible: selectors.isEditCarDialogVisibleSelector(state),
  cars: selectors.carsSelector(state),
}), {
  openCreateCardDialog: openCreateCardDialogAction,
  openEditCardDialog: openEditCardDialogAction,
  fetchCars: fetchCarsThunk,
  deleteCar: deleteCarThunk,
})(CarsContainerComponent);
