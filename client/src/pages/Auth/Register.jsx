import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../component/common/Input";
import Button from "../../component/common/Button";
import { registerUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (error) {
      console.error("Register error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" onChange={handleChange} required />
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <Button type="submit">Register</Button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
