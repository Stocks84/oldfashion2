import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import UserProfileForm from '../components/UserProfileForm';
import { fetchUserProfile } from '../services/userService';
import { jwtDecode } from 'jwt-decode';  


const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        // Get the user ID from the decoded JWT token stored in localStorage
        const token = localStorage.getItem('authToken');
        const decodedToken = jwtDecode(token);  // Decode the token
        const userId = decodedToken.user_id; 
        // Fetch user profile using the userId
        const userData = await fetchUserProfile(userId);
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user profile:', error);
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



