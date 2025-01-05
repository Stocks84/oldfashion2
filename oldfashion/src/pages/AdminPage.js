import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import AdminGameTable from '../components/AdminGameTable';
import AdminUserTable from '../components/AdminUserTable';
import {
  fetchAllGames,
  fetchAllUsers,
  createGame,
  updateGame,
  deleteGame,
  createUser,
  updateUser,
  deleteUser,
} from '../services/adminService';

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

  // Game CRUD Handlers
  const handleCreateGame = async () => {
    const newGame = await createGame({ name: 'New Game', description: 'Description here' });
    setGames([...games, newGame]);
  };

  const handleEditGame = async (game) => {
    const updatedGame = await updateGame(game.id, { ...game, name: 'Updated Name' });
    setGames(games.map((g) => (g.id === game.id ? updatedGame : g)));
  };

  const handleDeleteGame = async (gameId) => {
    await deleteGame(gameId);
    setGames(games.filter((g) => g.id !== gameId));
  };

  // User CRUD Handlers
  const handleCreateUser = async () => {
    const newUser = await createUser({ username: 'new_user', email: 'new@example.com' });
    setUsers([...users, newUser]);
  };

  const handleEditUser = async (user) => {
    const updatedUser = await updateUser(user.id, { ...user, username: 'UpdatedUser' });
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter((u) => u.id !== userId));
  };

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
            <Button variant="success" onClick={handleCreateGame}>
              Add New Game
            </Button>
            <AdminGameTable games={games} onEdit={handleEditGame} onDelete={handleDeleteGame} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <h2>Manage Users</h2>
            <Button variant="success" onClick={handleCreateUser}>
              Add New User
            </Button>
            <AdminUserTable users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AdminPage;
