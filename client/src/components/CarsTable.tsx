import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

import { Car } from '../types/cars';

interface CarsTableProps {
  cars: Car[];
  deleteCar: (cardId: string) => void;
}

export const CarsTable: React.SFC<CarsTableProps> = ({ cars, deleteCar }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Make</th>
          <th>Model</th>
          <th>Mileage</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index): JSX.Element => (
          <tr key={car._id}>
            <td>{index + 1}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.mileage}</td>
            <td>{car.price}</td>
            <td>
              <Button size="sm" variant="link">Edit</Button>
              <Button onClick={() => deleteCar(car._id)} size="sm" variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

CarsTable.propTypes = {
  cars: PropTypes.array.isRequired,
  deleteCar: PropTypes.func.isRequired,
};
