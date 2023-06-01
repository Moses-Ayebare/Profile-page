import React, { useState, useEffect } from "react";
import "./profilePage.css";
import profileImage from "../components/kawa.JPG";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const location = useLocation();

  const showNavbar = location.pathname === "/profilePage";

  const [user, setUser] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/users/authed",
          {},
          { withCredentials: true }
        );
        const userData = response.data && response.data.data; // response containing the user data

        // Update the user state with the relevant data
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error.response);
      }
    };

    fetchData();
  }, []);

  // const handleInputChange = (e) => {
  //   setUpdatedUser({
  //     ...updatedUser,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [id]: value !== "" ? value : null,
    }));
  };
  
  const handleUpdate = async () => {
    console.log(updatedUser)
    try {
      setIsUpdating(true);
      const response = await axios.post(
        "http://localhost:5001/api/users/update-profile",
        updatedUser,
        { withCredentials: true }
      );
      const updatedUserData = response.data && response.data.data; // response containing the updated user data

      // Update the user state with the updated data
      setUser(updatedUserData);
      setIsUpdating(false);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error.response);
      setIsUpdating(false);
    }
  };

  return (
    <div className="profile-page">
      {showNavbar && <Navbar />}
      <div className="container">
        <div className="profile-card">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div className="card-body">
            <h2>Personal Info</h2>
            <div className="input-column">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <div className="input-answer">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  value={isEditing ? updatedUser.firstName || user.firstName : user.firstName}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-column">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <div className="input-answer">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  value={isEditing ? updatedUser.lastName || user.lastName : user.lastName}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-column">
              <label htmlFor="phoneNumber" className="form-label">
                Phone
              </label>
              <div className="input-answer">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Phone"
                  value={isEditing ? updatedUser.phoneNumber || user.phoneNumber : user.phoneNumber}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-column">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-answer">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={isEditing ? updatedUser.email || user.email : user.email}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-column">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <div className="input-answer">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Company"
                  value={ user?.company?.name ??"Unavailable"}
                  disabled
                />
              </div>
            </div>

            {!isEditing && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Update
              </button>
            )}

            {isEditing && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
                disabled={isUpdating}
              >
                {isUpdating ? "Updating..." : "Submit"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
