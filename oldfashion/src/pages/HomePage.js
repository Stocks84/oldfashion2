import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import GameCard from "../components/GameCard";
import UserInfoCard from "../components/UserInfoCard";
import { fetchRecentGames, fetchUserInfo } from "../services/homeService";

const HomePage = () => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        const loadData = async () => {
            try {
                const gamesData = await fetchRecentGames();
                const token = localStorage.getItem("authToken");
                const userId = JSON.parse(atob(token.split(".")[1])).user_id; // Decode token to get user ID
                const userData = await fetchUserInfo(userId);
                setGames(gamesData);
                setUser(userData);
            } catch (error) {
                console.error("Error loading data:", error);
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
                <Row>
                    <Col xs={12} md={4}>
                        <UserInfoCard {...user} />
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
