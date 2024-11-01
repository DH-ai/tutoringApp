import React, { useEffect, useState } from "react";
import { register } from "../authService";
// import { auth, firebase } from "./firebaseConfig";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  //   const handleGoogleLogin = async () => {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     try {
  //       await auth.signInWithPopup(provider);
  //       console.log("Logged in with Google");
  //     } catch (error) {
  //       console.error("Google login error:", error.message);
  //     }
  //   };

  async function handleEmailLogin() {
    try {
      register(username, password).then((response) => {
        alert(response.data.message);
      });
      console.log("Logged in with email");
    } catch (error) {}
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* {error && <div className="p-2 text-red-500">{error}</div>} */}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailLogin();
          }}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <button className="w-full p-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Login with Email
          </button>
        </form>

        <div className="relative my-4 text-center">
          <span className="px-2 text-gray-500 bg-white">or</span>
        </div>

        <button
          //   onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full p-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          <FaGoogle className="mr-2" /> Login with Google
        </button>
      </div>
      {/* <div className="h-screen flex justify-center items-center">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        </div>
      </div> */}
    </div>
  );
}

export default Login;
