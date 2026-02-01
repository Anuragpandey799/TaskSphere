const Input = ({ label, type = "text", ...props }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: "4px" }}>
        {label}
      </label>
      <input
        type={type}
        {...props}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default Input;
