import React from "react";
import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Promo = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: 'url(images/promo-background.jpg) no-repeat center center/cover',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <h1>Sales up to 10% if you sign up today!</h1>
            <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
                Don't miss out on this limited-time offer! Join our community and enjoy exclusive deals and services tailored for you.
            </p>
            <Button 
                variant="success" 
                size="lg" 
                style={{ marginTop: '20px' }} 
                href="/register"
            >
                Sign Up Now
            </Button>
        </div>
    );
};

export default Promo;
