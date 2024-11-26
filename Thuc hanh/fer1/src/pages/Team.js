import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {
    return (
        <Container
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1 className="text-center mb-4">Team Matching</h1>
            <p className="text-center mb-4">
                Looking to play with friends or meet new people? Our team matching feature allows you to find teammates based on your preferences.
            </p>

            <Row className="justify-content-center mb-4">
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Find Your Team</Card.Title>
                            <Card.Text>
                                Join a team with similar interests and skill levels. Whether you're a beginner or a pro, there's a place for you!
                            </Card.Text>
                            <Button variant="primary">Start Matching</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Meet New Friends</Card.Title>
                            <Card.Text>
                                Connect with fellow players and build lasting friendships through team activities and events.
                            </Card.Text>
                            <Button variant="primary">Join a Team</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Enhance Your Skills</Card.Title>
                            <Card.Text>
                                Learn from teammates, share strategies, and improve your game together.
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h3 className="text-center">Our Team Members</h3>
            <Row className="justify-content-center">
                <Col md={3} className="text-center mb-4">
                    <h5>John Doe</h5>
                    <p>Midfielder</p>
                </Col>
                <Col md={3} className="text-center mb-4">
                    <h5>Jane Smith</h5>
                    <p>Defender</p>
                </Col>
                <Col md={3} className="text-center mb-4">
                    <h5>Mike Johnson</h5>
                    <p>Striker</p>
                </Col>
                <Col md={3} className="text-center mb-4">
                    <h5>Emily Davis</h5>
                    <p>Goalkeeper</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Team;
