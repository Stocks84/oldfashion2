import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import GameDetails from "../components/GameDetails";
import GameCard from "../components/GameCard";
import CommentSection from "../components/CommentSection"; // Import the new component
import { fetchGameDetails, fetchRecentGames } from "../services/gameService";


const GameDetailsPage = () => {
    const { id } = useParams(); // Get game ID from the URL
    const [game, setGame] = useState(null);
    const [relatedGames, setRelatedGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGameData = async () => {
            try {
                const gameData = await fetchGameDetails(id); // Fetch game details
                const otherGames = await fetchRecentGames(); // Fetch related games
                setGame(gameData);
                setRelatedGames(otherGames.filter((g) => g.id !== parseInt(id))); // Exclude current game
            } catch (error) {
                console.error("Failed to fetch game data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadGameData();
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
                    <p>Game not found.</p>
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
                <Row>
                    <Col xs={12}>
                        <CommentSection gameId={id} initialComments={game.comments || []} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12}>
                        <h3>Related Games</h3>
                        <Row>
                            {relatedGames.map((relatedGame) => (
                                <Col xs={12} sm={6} md={4} key={relatedGame.id}>
                                    <GameCard {...relatedGame} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default GameDetailsPage;
