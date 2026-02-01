import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#1e293b",
        color: "#fff",
      }}
    >
      <h2>TaskSphere</h2>

      <div>
        <span style={{ marginRight: "12px" }}>
          {user?.name}
        </span>
        <button
          onClick={logout}
          style={{
            padding: "6px 12px",
            backgroundColor: "#ef4444",
            border: "none",
            color: "#fff",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
