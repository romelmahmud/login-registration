import React, { useContext, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Register() {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);
    registerUser(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        const userInfo = {
          displayName: nameRef.current.value,
        };

        console.log(userInfo);
        updateUserProfile(userInfo).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch(() => setError("Can't Register"));

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-2">Register</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="p-2">
            <Form.Group id="name" className="mt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="phone" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" ref={phoneRef} required />
            </Form.Group>
            <Form.Group id="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="address" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" ref={addressRef} required />
            </Form.Group>
            <Form.Group id="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
