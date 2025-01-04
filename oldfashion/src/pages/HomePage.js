import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
      <h1>Welcome to OldFashion</h1>
      <p>Recent uploads of games and user information will go here.</p>
    </Layout>
  );
};

export default HomePage;
