import React, { useState } from "react";
import Navbar from "../componenets/navbar";
const base = "https://tutoringapp-production.up.railway.app";

// import { CountryDropdown, StateDropdown } from "react-country-state-city";
import api from "../utils/authService";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    bio: "",
    subjectsInterested: "",
    role: "student",
    
    // Default to student
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here, such as an API call
    console.log(base+"/api/users/register/");
    try {
      const response = await api.post(
        base+"/api/users/register/",
        formData,
      );
      
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("role", formData.role);
      // Redirect to dashboard
        window.location.href = "/";
    } catch (error) {
      console.error("Error registering user:", error.response.data);
      
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-blue-300  ">
        <div className="border-b-2 border-gray-300">
          <Navbar />
        </div>
        <div className="w-full max-w-lg mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* First Name Field */}
            <div>
              <label
                htmlFor="first_name"
                className="block text-gray-700 font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label
                htmlFor="last_name"
                className="block text-gray-700 font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-gray-700 font-medium">Role</label>
              <div className="mt-1 ">
                <label className="inline-flex items-center mx-2">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={formData.role === "student"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Student</span>
                </label>
                <label className="inline-flex items-center ml-6 mx-2">
                  <input
                    type="radio"
                    name="role"
                    value="teacher"
                    checked={formData.role === "teacher"}
                    onChange={ handleChange }
                    className="form-radio"
                  />
                  <span className="ml-2">Teacher</span>
                </label>
              </div>
            </div>

            {/* Subjects Field (only if role is teacher) */}
            {formData.role === "teacher" && (
              <div>
                <label
                  htmlFor="subjectsInterested"
                  className="block text-gray-700 font-medium"
                >
                  Subjects
                </label>
                <input
                  type="text"
                  id="subjectsInterested"
                  name="subjectsInterested"
                  value={formData.subjectsInterested}
                  onChange={handleChange}
                  placeholder="Enter subjects you can teach"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            )}

            {/* Address Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* City Field */}
            <div>
              <label htmlFor="city" className="block text-gray-700 font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* State Field */}
            <div>
              <label
                htmlFor="state"
                className="block text-gray-700 font-medium"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Zipcode Field */}
            <div>
              <label
                htmlFor="zipcode"
                className="block text-gray-700 font-medium"
              >
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="Enter your zipcode"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Country Field */}
            <div>
              <label
                htmlFor="country"
                className="block text-gray-700 font-medium"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your Country"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Bio Field */}
            <div>
              <label htmlFor="bio" className="block text-gray-700 font-medium">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Enter your bio"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Register
              </button>
            </div>
          
          </form>
          <div>
            <p className="text-center text-gray-700 text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
