import React, { useContext, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    setError("Failed to log in");

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-2">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="p-2">
            <Form.Group id="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Register</Link>
      </div>
    </>
  );
}
