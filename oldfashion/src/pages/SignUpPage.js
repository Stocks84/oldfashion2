import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  const handleSignUpSuccess = (response) => {
    console.log('Sign-up successful:', response);
    // Optionally redirect to login page or display additional success message
  };

  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1>Sign Up</h1>
            <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignUpPage;
