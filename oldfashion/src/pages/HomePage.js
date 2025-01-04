import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../components/Layout';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState({});

  // Mock API call
  useEffect(() => {
    const fetchMockData = async () => {
      // Mocked games data
      setGames([
        { id: 1, name: 'Beer Pong', description: 'A fun classic drinking game.' },
        { id: 2, name: 'Kings Cup', description: 'A card-based drinking game.' },
      ]);
      // Mocked user data
      setUser({
        username: 'john_doe',
        bio: 'Lover of games and craft beers.',
        favoriteDrink: 'Whiskey Old Fashioned',
      });
    };

    fetchMockData();
  }, []);

  return (
    <Layout>
      <Container>
        <Row className="my-4">
          <Col xs={12}>
            <h1>Welcome to OldFashion</h1>
          </Col>
        </Row>
        <Row>
          {/* User Info */}
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>User Info</Card.Title>
                <Card.Text>
                  <strong>Username:</strong> {user.username}
                </Card.Text>
                <Card.Text>
                  <strong>Bio:</strong> {user.bio}
                </Card.Text>
                <Card.Text>
                  <strong>Favorite Drink:</strong> {user.favoriteDrink}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Recent Games */}
          <Col xs={12} md={8}>
            <h2>Recent Games</h2>
            <Row>
              {games.map((game) => (
                <Col xs={12} sm={6} key={game.id} className="mb-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>{game.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default HomePage;

