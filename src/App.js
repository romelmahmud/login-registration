import { Container } from "react-bootstrap";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <div style={{ backgroundColor: "#ebebeb" }}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <RouterProvider router={routes}></RouterProvider>
        </div>
      </Container>
    </div>
  );
}

export default App;
