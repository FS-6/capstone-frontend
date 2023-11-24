import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import LandingPage from "./pages/landingpage";
import Register from "./pages/register";
import Home from "./pages/home";
import Settings from "./pages/profilesettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="profilesettings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
