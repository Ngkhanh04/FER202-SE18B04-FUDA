import React from "react";
import { Carousel, Card, Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselSlide = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='images/firstdeal.png' alt='firstsale' style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
                <Carousel.Caption>
                    <h4 style={{ color: "black" }}>First deal! 10% off for the first 10 customers!</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='images/sale.jpg' alt='sale' style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
                <Carousel.Caption>
                    <h4 style={{ color: "black" }}>50% off! Book now!</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='images/tournament.png' alt='tournament' style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
                <Carousel.Caption>
                    <h4 style={{ color: "black" }}>Tournament is happening! Sign up now!</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

function TopField() {
    return (
        <Container>
            <h3 className="text-center my-4">Top Fields</h3>
            <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="images/san1.jpg" height="200rem" />
                        <Card.Body>
                            <Card.Title>Field 1</Card.Title>
                            <Card.Text>
                                This field is at the bottom-left
                                <h5 className="text-primary">$10</h5>
                            </Card.Text>
                            <Button variant="primary">Detail</Button>{' '}
                            <Button variant="warning">Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="images/san2.jpg" height="200rem" />
                        <Card.Body>
                            <Card.Title>Field 2</Card.Title>
                            <Card.Text>
                                This field is on the top-right
                                <h5 className="text-primary">$12</h5>
                            </Card.Text>
                            <Button variant="primary">Detail</Button>{' '}
                            <Button variant="warning">Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="images/san3.jpg" height="200rem" />
                        <Card.Body>
                            <Card.Title>Field 3</Card.Title>
                            <Card.Text>
                                This field is at the top-left
                                <h5 className="text-primary">$11</h5>
                            </Card.Text>
                            <Button variant="primary">Detail</Button>{' '}
                            <Button variant="warning">Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>About Us</h5>
                        <p>We offer affordable and high-quality fields along with top-notch services. Join us to enjoy the best experience!</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Contact Us</h5>
                        <p>Email: support@example.com</p>
                        <p>Phone: +123 456 789</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Follow Us</h5>
                        <a href="#" className="text-white">Facebook</a><br />
                        <a href="#" className="text-white">Instagram</a><br />
                        <a href="#" className="text-white">Twitter</a>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p>© 2024 Your Company Name. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

// Thêm phần Header
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Your Company Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#fields">Fields</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const Home = () => {
    return (
        <>
            <Header />
            <CarouselSlide />
            <TopField />
            <Footer />
        </>
    );
};

export default Home;
