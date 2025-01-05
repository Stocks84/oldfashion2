import React from 'react';
import { Table, Button } from 'react-bootstrap';

const AdminGameTable = ({ games, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <tr key={game.id}>
            <td>{game.id}</td>
            <td>{game.name}</td>
            <td>{game.description}</td>
            <td>
              <Button variant="warning" size="sm" onClick={() => onEdit(game)}>
                Edit
              </Button>{' '}
              <Button variant="danger" size="sm" onClick={() => onDelete(game.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminGameTable;
