import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { CreateNewCarDialog } from '../components/CreateNewCarDialog';
import { CarsTable } from '../components/CarsTable';

import { AppState } from '../store';
import { selectors } from '../reducers/cars';
import { openCreateCardDialogAction, closeCreateCardDialogAction } from '../actions/cars';
import { fetchCarsThunk } from '../thunks/cars';
import { Car } from '../types/cars';

interface CarsContainerProps {
  cars: Car[];
  isCreateCarDialogVisible: boolean;
  openCreateCardDialog: () => void;
  closeCreateCardDialog: () => void;
  fetchCars: () => void;
}

class CarsContainerComponent extends React.Component<CarsContainerProps, null> {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    const {
      cars,
      isCreateCarDialogVisible,
      openCreateCardDialog,
      closeCreateCardDialog,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Button onClick={openCreateCardDialog} variant="outline-primary">Create new car</Button>
          </Col>
        </Row>
        {cars.length > 0 && (
          <CarsTable cars={cars} />
        )}
        {isCreateCarDialogVisible && (
          <CreateNewCarDialog
            onCloseCreateNewCarDialog={closeCreateCardDialog}
            show={isCreateCarDialogVisible}
          />
        )}
      </Container>
    );
  }
}

export const CarsContainer = connect((state: AppState) => ({
  cars: selectors.carsSelector(state),
  isCreateCarDialogVisible: selectors.isCreateCarDialogVisibleSelector(state),
}), {
  openCreateCardDialog: openCreateCardDialogAction,
  closeCreateCardDialog: closeCreateCardDialogAction,
  fetchCars: fetchCarsThunk,
})(CarsContainerComponent);
