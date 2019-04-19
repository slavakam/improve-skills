import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as PropTypes from 'prop-types';

interface EditCarDialogProps {
  show: boolean;
  make: string;
  model: string;
  mileage: string;
  price: string;
  onUpdateCar: () => void;
  onClose: (event?: React.MouseEvent) => void;
  onInputChange: (e: React.ChangeEvent) => void;
}

export const EditCarDialog: React.SFC<EditCarDialogProps> = ({
  show,
  onClose,
  onInputChange,
  make,
  model,
  mileage,
  price,
  onUpdateCar,
}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Car</Modal.Title>
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
        <Button variant="primary" onClick={onUpdateCar}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EditCarDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onUpdateCar: PropTypes.func.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  mileage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
