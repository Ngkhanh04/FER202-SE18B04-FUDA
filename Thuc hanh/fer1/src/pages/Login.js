import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center text-primary mb-4">Login</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        placeholder="Enter your username" 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Enter your password" 
                                        required 
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="text-center mt-3">
                                <p>Don't have an account? <a href="/register" className="text-primary">Register here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
