import React from 'react';
import { Card } from 'react-bootstrap';

const GameCard = ({ name, description }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default GameCard;
