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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 px-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">
            Create Account ✨
          </h2>
          <p className="text-gray-300 mt-1">
            Join TaskSphere and get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-white">
            <Input
              label="Name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-white">
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-white">
            <Input
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white py-2.5 rounded-xl transition-all shadow-lg"
          >
            Register
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
