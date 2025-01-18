import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import GameDetails from '../components/GameDetails';
import GameCard from '../components/GameCard';
import { fetchGameDetails, fetchRecentGames, postComment } from '../services/gameService';

const GameDetailsPage = () => {
  const { id } = useParams(); // Retrieve the game ID from the URL
  const [game, setGame] = useState(null);
  const [relatedGames, setRelatedGames] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGameData = async () => {
      try {
        const gameData = await fetchGameDetails(id);
        const otherGames = await fetchRecentGames();
        setGame(gameData);
        setRelatedGames(otherGames.filter((g) => g.id !== parseInt(id))); // Exclude the current game
        setComments(gameData.comments || []);
      } catch (error) {
        console.error('Failed to fetch game data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGameData();
  }, [id]);

  const handleCommentSubmit = async () => {
    try {
        const newCommentObj = await postComment(id, newComment); // **API Call**
        setComments([...comments, newCommentObj]); // Append new comment
        setNewComment(""); // Clear input
    } catch (error) {
        console.error('Failed to post comment:', error);
    }
};

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
        <Row className="mt-5">
          <Col xs={12}>
            <h3>Other Games</h3>
          </Col>
          {relatedGames.map((relatedGame) => (
            <Col xs={12} sm={6} md={4} key={relatedGame.id}>
              <GameCard {...relatedGame} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default GameDetailsPage;
