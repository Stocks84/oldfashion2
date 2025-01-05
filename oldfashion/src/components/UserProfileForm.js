import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { updateUserProfile } from '../services/userService';

const UserProfileForm = ({ user, onUpdateSuccess }) => {
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUserProfile(user.id, formData);
      setSuccess('Profile updated successfully!');
      onUpdateSuccess(updatedUser);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <Form.Group controlId="username" className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />
      </Form.Group>
      <Form.Group controlId="email" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </Form.Group>
      <Form.Group controlId="bio" className="mb-3">
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Write a short bio"
          rows={3}
        />
      </Form.Group>
      <Form.Group controlId="favoriteDrink" className="mb-3">
        <Form.Label>Favorite Drink</Form.Label>
        <Form.Control
          type="text"
          name="favoriteDrink"
          value={formData.favoriteDrink}
          onChange={handleChange}
          placeholder="Enter your favorite drink"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update Profile
      </Button>
    </Form>
  );
};

export default UserProfileForm;
