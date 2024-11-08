import React, { useState } from "react";
import api from "../utils/authService"; // Assuming this sends a POST request for registration

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleEmailLogin() {
    try {
      if (username.includes("@") || username.includes("." || username.includes("-"))) {
        setError("Please enter a valid username");
        return;
      }
      const response = await api.post(base+"/api/users/login/", {
        "username": username,
        "password": password,
      });
      // Assuming response.data contains a message
      console.log("Logged in with email");
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("user_id", username);
      localStorage.setItem("role", response.data.role);
      alert("Logged in successfully");
      window.location.href = "/loginSuccess";
      console.log(response.data);

      // You might want to redirect to a different page or set a user session here
    } catch (error) {
      console.error("Email login error:", error.message);
      setError("Retry login");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {error && <div className="p-2 text-red-500">{error}</div>}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailLogin(); // Call the login function on submit
          }}
          className="space-y-4"
        >
          <input
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full p-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const auth = firebase.auth();
