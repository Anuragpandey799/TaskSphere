import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ marginTop: "10px" }}>
        Go back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
