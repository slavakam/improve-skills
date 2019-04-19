import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { CreateCarDialogContainer } from './CreateCarDialogContainer';
import { CarsTable } from '../components/CarsTable';

import { AppState } from '../store';
import { selectors } from '../reducers/cars';
import { openCreateCardDialogAction } from '../actions/cars';
import { fetchCarsThunk, deleteCarThunk } from '../thunks/cars';
import { Car } from '../types/cars';

interface CarsContainerProps {
  cars: Car[];
  openCreateCardDialog: () => void;
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
      deleteCar,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Button onClick={openCreateCardDialog} variant="outline-primary">Create new car</Button>
          </Col>
        </Row>
        {cars.length > 0 && (
          <CarsTable cars={cars} deleteCar={deleteCar} />
        )}
        <CreateCarDialogContainer />
      </Container>
    );
  }
}

export const CarsContainer = connect((state: AppState) => ({
  cars: selectors.carsSelector(state),
}), {
  openCreateCardDialog: openCreateCardDialogAction,
  fetchCars: fetchCarsThunk,
  deleteCar: deleteCarThunk,
})(CarsContainerComponent);
