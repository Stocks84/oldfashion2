import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const GameDetails = ({ game }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>{game.description}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Created By:</strong> {game.createdBy}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Likes:</strong> {game.likes}
          </ListGroup.Item>
        </ListGroup>
        <h5 className="mt-4">Rules</h5>
        <ul>
          {game.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default GameDetails;
