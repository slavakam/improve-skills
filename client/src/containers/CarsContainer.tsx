import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { CreateNewCarDialog } from '../components/CreateNewCarDialog';
import { CarsTable } from '../components/CarsTable';

import { AppState } from '../store';
import { selectors } from '../store/cars/reducer';
import { openCreateCardDialogAction } from '../store/cars/actions';
import { Car } from '../store/cars/types';

interface CarsContainerProps {
  cars: Car[];
  isCreateCarDialogVisible: boolean;
  openCreateCardDialog: ;
}

class CarsContainerComponent extends React.Component<CarsContainerProps, null> {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    const { cars, isCreateCarDialogVisible } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Button onClick={() => console.log('hello')} variant="outline-primary">Create new car</Button>
          </Col>
        </Row>
        {cars.length > 0 && (
          <CarsTable cars={cars} />
        )}
        {isCreateCarDialogVisible && (
          <CreateNewCarDialog
            onCloseCreateNewCarDialog={() => console.log('hello')}
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
})(CarsContainerComponent);
