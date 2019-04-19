import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as PropTypes from 'prop-types';

interface CreateCarDialogProps {
  show: boolean;
  make: string;
  model: string;
  mileage: string;
  price: string;
  onCreateCar: () => void;
  onClose: (event?: React.MouseEvent) => void;
  onInputChange: (e: React.ChangeEvent) => void;
}

export const CreateCarDialog: React.SFC<CreateCarDialogProps> = ({
  show,
  onClose,
  onInputChange,
  make,
  model,
  mileage,
  price,
  onCreateCar,
}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="make">
            <Form.Label>Make</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter make"
              value={make}
              onChange={onInputChange}
            />
          </Form.Group>

          <Form.Group controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter model"
              value={model}
              onChange={onInputChange}
            />
          </Form.Group>

          <Form.Group controlId="mileage">
            <Form.Label>Mileage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mileage"
              value={mileage}
              onChange={onInputChange}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              value={price}
              onChange={onInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onCreateCar}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CreateCarDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCreateCar: PropTypes.func.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  mileage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
