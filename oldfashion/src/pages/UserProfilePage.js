import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import UserProfileForm from '../components/UserProfileForm';
import { fetchUserProfile } from '../services/userService';

  const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadUserProfile = async () => {
        try {
          const userData = await fetchUserProfile();
          setUser(userData);
        } catch (error) {
          setError('Failed to load user profile');
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    loadUserProfile();
  }, []);

  const handleUpdateSuccess = (updatedUser) => {
    setUser(updatedUser); // Update the user state with the new data
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1>User Profile</h1>
            {user && <UserProfileForm user={user} onUpdateSuccess={handleUpdateSuccess} />}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};


export default UserProfilePage;



