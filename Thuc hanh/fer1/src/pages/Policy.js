import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Policy = () => {
    return (
        <Container
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Row>
                <Col>
                    <h1 className="text-center mb-4">Our Policies</h1>
                    <h5>1. Booking Policy</h5>
                    <p>
                        All bookings must be made at least 24 hours in advance. Cancellations made within 12 hours of the scheduled time will incur a 50% fee.
                    </p>
                    
                    <h5>2. Refund Policy</h5>
                    <p>
                        Refunds will only be processed if the cancellation is made more than 24 hours prior to the booking. Refund requests must be submitted via email.
                    </p>
                    
                    <h5>3. Safety Policy</h5>
                    <p>
                        We prioritize the safety of our customers. All players must wear appropriate footwear and adhere to the safety guidelines posted on-site.
                    </p>
                    
                    <h5>4. Privacy Policy</h5>
                    <p>
                        We are committed to protecting your privacy. Your personal information will not be shared with third parties without your consent.
                    </p>

                    <h5>5. Code of Conduct</h5>
                    <p>
                        All players are expected to maintain good sportsmanship and respect towards staff and other players. Violation of this code may result in expulsion from the facility.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Policy;
    