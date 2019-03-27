import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { CreateNewCarDialog } from '../components/CreateNewCarDialog';
import { CarsTable } from '../components/CarsTable';

import { AppState } from '../reducers';
import { selectors } from '../reducers/cars/reducer';
import { Car } from '../interfaces';

interface CarsContainerState { cars: Car[]; isCreateCarDialogVisible: boolean }
interface CarsContainerProps { cars: Car[] }

class CarsContainerComponent extends React.Component<CarsContainerProps, CarsContainerState> {
  constructor(props: CarsContainerProps) {
    super(props);

    this.state = {
      cars: props.cars,
      isCreateCarDialogVisible: false,
    };
  }

  onCreateNewCarClick = (): void => {
    this.setState({ isCreateCarDialogVisible: true });
  }

  onCloseCreateNewCarDialog = (): void => {
    this.setState({ isCreateCarDialogVisible: false });
  }

  render() {
    const { cars, isCreateCarDialogVisible } = this.state;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Button onClick={this.onCreateNewCarClick} variant="outline-primary">Create new car</Button>
          </Col>
        </Row>
        {cars.length > 0 && (
          <CarsTable cars={cars} />
        )}
        {isCreateCarDialogVisible && (
          <CreateNewCarDialog
            onCloseCreateNewCarDialog={this.onCloseCreateNewCarDialog}
            show={isCreateCarDialogVisible}
          />
        )}
      </Container>
    );
  }
}

export const CarsContainer = connect((state: AppState) => ({
  cars: selectors.carsSelector(state),
}))(CarsContainerComponent);
