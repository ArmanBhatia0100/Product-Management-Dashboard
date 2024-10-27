import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, Lock, Email } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Login attempt with:", formData);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="space-y-8 bg-white shadow-xl p-8 rounded-2xl">
          {/* Header Section */}
          <div className="space-y-2 text-center">
            <div className="inline-block bg-blue-50 p-3 rounded-full">
              <Lock className="text-blue-600" sx={{ fontSize: 32 }} />
            </div>
            <h1 className="font-bold text-3xl text-gray-800">Welcome Back</h1>
            <p className="text-gray-500">
              Please enter your details to sign in
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" className="rounded-lg">
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email className="text-gray-400" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.75rem",
                  },
                }}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock className="text-gray-400" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.75rem",
                  },
                }}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <button
                type="button"
                className="font-medium text-blue-600 text-sm hover:text-blue-800"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "0.75rem",
                padding: "0.75rem",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Sign in
            </Button>

            {/* Signup Link */}
            <div className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <button
                type="button"
                className="font-medium text-blue-600 hover:text-blue-800"
                onClick={() => {
                  // Add your navigation logic here
                  console.log("Navigate to signup");
                }}
              >
                Sign up
              </button>
            </div>
          </form>

          {/* Optional: Social Login Section */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="border-gray-200 border-t w-full"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="gap-3 grid grid-cols-3">
              {["G", "A", "F"].map((provider, index) => (
                <button
                  key={index}
                  className="flex justify-center items-center border-gray-300 hover:border-gray-400 px-4 py-2 border rounded-xl transition-colors"
                >
                  {provider}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
