import { useState } from "react";
import { Toast, Form, Button } from "react-bootstrap"; // Importing Toast from react-bootstrap
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/accounts");
    } else {
      setError("Login Failed"); // Set error message
      setShowToast(true); // Show the toast on failed login
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>

      {/* Toast for displaying error message */}
      <Toast show={showToast} onClose={() => setShowToast(false)} className="mt-3">
        <Toast.Body>{error}</Toast.Body>
      </Toast>
    </div>
  );
};

export default LoginForm;
