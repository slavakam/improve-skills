import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as PropTypes from 'prop-types';

interface CreateNewCarDialogProps {
  show: boolean;
  onCloseCreateNewCarDialog: (event?: React.MouseEvent) => void;
}

export const CreateNewCarDialog: React.SFC<CreateNewCarDialogProps> = (props) => {
  const { show, onCloseCreateNewCarDialog } = props;
  return (
    <Modal show={show} onHide={onCloseCreateNewCarDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Create new car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Make</Form.Label>
            <Form.Control type="text" placeholder="Enter make" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Model</Form.Label>
            <Form.Control type="text" placeholder="Enter model" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mileage</Form.Label>
            <Form.Control type="text" placeholder="Enter mileage" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseCreateNewCarDialog}>
          Close
        </Button>
        <Button variant="primary" onClick={onCloseCreateNewCarDialog}>
          Create Car
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CreateNewCarDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onCloseCreateNewCarDialog: PropTypes.func.isRequired,
};
