import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6 text-center">
                    <h1 className="display-4 text-primary mb-4">Welcome to Our Fields!</h1>
                    <p className="lead mb-4">
                        We offer affordable and high-quality fields along with top-notch services!
                    </p>
                    <img 
                            src="images/soccer-488700_1280.jpg" 
                        alt="Football field" 
                        className="img-fluid mb-4 rounded"
                    />
                    <button className="btn btn-success btn-lg mb-3">Learn More</button>
                    <h3 className="mt-5">Our Services</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Field Rentals</li>
                        <li className="list-group-item">Training Sessions</li>
                        <li className="list-group-item">Coaching Services</li>
                        <li className="list-group-item">Event Hosting</li>
                    </ul>
                </div>
            </div>
            <footer className="text-center py-4 bg-dark text-white">
                <h5>Contact Us</h5>
                <p>Email: info@example.com | Phone: (123) 456-7890</p>
                <p>&copy; 2024 Our Fields. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;
