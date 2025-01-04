import React from 'react';
import { Card } from 'react-bootstrap';

const UserInfoCard = ({ username, bio, favoriteDrink }) => (
  <Card>
    <Card.Body>
      <Card.Title>User Info</Card.Title>
      <Card.Text>
        <strong>Username:</strong> {username}
      </Card.Text>
      <Card.Text>
        <strong>Bio:</strong> {bio}
      </Card.Text>
      <Card.Text>
        <strong>Favorite Drink:</strong> {favoriteDrink}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default UserInfoCard;
