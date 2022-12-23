import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "../pages/ForgetPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdatePassword from "../pages/UpdatePassword";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/update-password",
    element: (
      <PrivateRoute>
        <UpdatePassword />
      </PrivateRoute>
    ),
  },
  {
    path: "/reset-password",
    element: <ForgotPassword />,
  },
]);
