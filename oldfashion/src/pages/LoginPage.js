import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLoginSuccess = (userData) => {
    console.log('Login successful:', userData);
    // Store user data, redirect, or update global state here
  };

  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1>Login</h1>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default LoginPage;


