import React, { useContext, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { user, logOut, verifyEmail, updatePassword } = useContext(AuthContext);

  const handleLogout = () => {
    logOut(() => {
      navigate("/login");
    });
  };

  async function handleEmailVerification() {
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await verifyEmail();
      setMessage("Please check your email inbox to verify");
    } catch {
      setError("Failed send verify email");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <h2 className="text-center mb-2 p-2">
          Welcome <strong>{user.displayName}</strong>
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Link to="/update-password">
          <Button className="btn-primary m-4">Update Password</Button>
        </Link>
      </Card>
      <div className="w-100 text-center mt-2">
        {!user.emailVerified && (
          <Button className="btn-primary " onClick={handleEmailVerification}>
            Verify Email
          </Button>
        )}

        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Home;
