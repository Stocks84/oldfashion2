import React from 'react';
import { Table } from 'react-bootstrap';

const AdminGameTable = ({ games }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <tr key={game.id}>
            <td>{game.id}</td>
            <td>{game.name}</td>
            <td>{game.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminGameTable;
