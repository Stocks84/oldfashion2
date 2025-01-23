import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import GameCard from "../components/GameCard";
import UserInfoCard from "../components/UserInfoCard";
import { fetchRecentGames, fetchUserProfile } from "../services/homeService";

const HomePage = () => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (token) {
                    const userId = JSON.parse(atob(token.split(".")[1])).user_id; // Decode token to get user ID
                    const userData = await fetchUserProfile(userId);
                    setUser(userData);
                    setGames(await fetchRecentGames());
                } else {
                    setError("User is not authenticated. Please log in.");
                }
            } catch (error) {
                setError("Failed to load data. Please try again later.");
            }
        };

        loadData();
    }, []);

    return (
        <Layout>
            <Container>
                <Row className="my-4">
                    <Col xs={12}>
                        <h1>Welcome to OldFashion</h1>
                    </Col>
                </Row>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Row>
                    <Col xs={12} md={4}>
                        {user.username ? (
                            <UserInfoCard {...user} />
                        ) : (
                            <p>Loading user information...</p>        
                        )}
                    </Col>
                    <Col xs={12} md={8}>
                        <h2>Recent Games</h2>
                        <Row>
                            {games.map((game) => (
                                <Col xs={12} sm={6} key={game.id}>
                                    <GameCard {...game} />
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
