import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import AdminGameTable from '../components/AdminGameTable';
import AdminUserTable from '../components/AdminUserTable';
import { fetchAllGames, fetchAllUsers } from '../services/adminService';

const AdminPage = () => {
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAdminData = async () => {
      try {
        const gamesData = await fetchAllGames();
        const usersData = await fetchAllUsers();
        setGames(gamesData);
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch admin data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAdminData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Container>
          <p>Loading admin data...</p>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Manage Games</h2>
            <AdminGameTable games={games} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <h2>Manage Users</h2>
            <AdminUserTable users={users} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AdminPage;
