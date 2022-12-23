import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <Card>
        <h2 className="text-center mb-2 p-2">
          Welcome <strong>{user.displayName}</strong>
        </h2>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Home;
