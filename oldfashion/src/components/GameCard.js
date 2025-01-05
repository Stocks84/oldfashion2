import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GameCard = ({ id, name, description }) => (
  <Link to={`/game/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </Link>
);

export default GameCard;

