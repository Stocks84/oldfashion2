import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import GameDetails from '../components/GameDetails';
import { fetchGameDetails } from '../services/gameService';

const GameDetailsPage = () => {
  const { id } = useParams(); // Retrieve the game ID from the URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGameDetails = async () => {
      try {
        const gameData = await fetchGameDetails(id);
        setGame(gameData);
      } catch (error) {
        console.error('Failed to fetch game details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGameDetails();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Container>
          <p>Loading game details...</p>
        </Container>
      </Layout>
    );
  }

  if (!game) {
    return (
      <Layout>
        <Container>
          <p>Game details could not be loaded.</p>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <GameDetails game={game} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default GameDetailsPage;

