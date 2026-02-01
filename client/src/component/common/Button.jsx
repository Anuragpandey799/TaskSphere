const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        padding: "10px",
        width: "100%",
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
