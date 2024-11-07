import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./componenets/Login";
import Profile from "./componenets/profile";
import ServiceWorker from "./pages/services";
import AboutUs from "./pages/About";
import ContactUs from "./pages/contact";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import RegistrationPage from "./pages/Registration";
import RegisterSuccess from "./pages/registerSucces";
// import Logout from "./componenets/Logout";
import ProtectedRoutes from "./ProctedRoutes";
import LoginRoute from "./LoginRoutes";
import LoginSuccess from "./componenets/loginSuccess";
// import { AuthProvider, useAuth } from "./utils/authcontext";
import api from "./utils/authService";
// import api from './utils/api';

// Example of getting auth token

const Main = () => {
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setAuthToken(true);
    }
    // console.log(authToken);
  }, []);

  // useEffect(() => {
  //   api
  //     .get("http://127.0.0.1:8000" + "/api/users/isLoggedin/")
  //     .then((res) => {
  //       console.log(res.data.status);
  //       setAuthToken(res.data.status === "YES");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  //   console.log(authToken);

  //   if (authToken === null) {
  //     return (
  //       <div className="h-screen flex justify-center items-center">
  //         <div className="flex gap-2">
  //           <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
  //           <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
  //           <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
  //         </div>
  //       </div>
  //     );
  //   }

  // return (
  //   <>
  //     <div className="background">
  //       <Navbar title="SOC" authToken={authToken} />
  //       <Routes>
  //         <Route path="/" element={<Home />} />

  //         {/* Routes for Unauthenticated Users */}
  //         <Route element={<LoginRoute authToken={authToken} />}>
  //           <Route path="/register" element={<Register />} />
  //           <Route path="/registerSuccess" element={<RegisterSuccess />} />
  //           <Route path="/verify-email/:token" element={<VerifyEmail />} />
  //           <Route path="/login" element={<Login />} />
  //         </Route>

  //         {/* Routes for Authenticated Users */}
  //         <Route element={<ProtectedRoutes authToken={authToken} />}>
  //           <Route path="/current_projects" element={<Projects />} />
  //           <Route path="/current_projects/:ProjectId" element={<ProjectDetails />} />
  //           <Route path="/wishlist" element={<Wishlist />} />
  //           <Route path="/Dashboard" element={<Dashboard />} />
  //           <Route path="/Dashboard/ProjectForm" element={<ProjectForm />} />
  //           <Route path="/PreferenceForm" element={<PreferenceForm />} />
  //           <Route path="/PreferenceFormFilled" element={<PreferenceFormFilled />} />
  //           <Route path="/logout" element={<Logout />} />
  //         </Route>
  //       </Routes>
  // const {authToken} = useAuth();
  return (
    // <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServiceWorker />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />{" "}
        {/* i have a querry string in api side to get profiles how to give query to the profile and then use it fetch the profile deatils reactec query and context maybe */}
        <Route element={<LoginRoute authToken={authToken} />}>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/registerSuccess" element={<RegisterSuccess />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes authToken={authToken} />}>
          <Route path="/loginSuccess" element={<LoginSuccess />} />
          <Route path="/dashboard" element={
            localStorage.getItem("role") === "student"
              ? <StudentDashboard />
              : <TeacherDashboard />
          } />
          {/* <Route path="/dashboard" element={<TeacherDashboard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Main />);
