import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <Card>
      <h2 className="text-center mb-2 p-2">Welcome {user.displayName}</h2>
    </Card>
  );
};

export default Home;
