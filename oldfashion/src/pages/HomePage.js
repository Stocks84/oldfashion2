import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <h2>Recent Games</h2>
        </Col>
        <Col xs={12} md={6}>
          <h2>User Info</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
