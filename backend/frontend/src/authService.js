import axios from "axios";

const API_URL = "http://localhost:8000/api/auth"; // Django's backend API endpoint

// Register new user
export const register = (username, password) => {
  console.log(username, password);
  return axios.post(`${API_URL}/register/`, { username, password });
};

// Login user and get token
export const login = (username, password) => {
  return axios.post(`${API_URL}/login/`, { username, password });
};

// Logout user by removing the token from localStorage
export const logout = () => {
  localStorage.removeItem("user");
};
