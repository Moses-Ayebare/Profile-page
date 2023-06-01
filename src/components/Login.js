import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Import the custom CSS file for styling

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Get the email and password entered by the user
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Make the API request to check user information
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        {
          password,
          email,
        }, {withCredentials: true}
      );
      console.log(response);
      // const users = response.data;

      //Find the user with matching email and password
      // const user = users.find((u) => u.email === email && u.password === password);

      if (response.data) {
        // User is logged in, navigate to the profile page
        navigate("/profilePage");
      } else {
        // User information not found, handle the error
        console.log("Invalid credentials");
      }
    } catch (error) {
      // Handle any API request errors
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="login-card">
            <h2 className="text-center mb-4">Welcome To AC Mobility</h2>
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Login;
