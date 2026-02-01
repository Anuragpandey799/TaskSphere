import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../component/common/Input";
import Button from "../../component/common/Button";
import { loginUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h2>Login to TaskSphere</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Email" name="email" type="email" onChange={handleChange} required />
        <Input label="Password" name="password" type="password" onChange={handleChange} required />
        <Button type="submit">Login</Button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
