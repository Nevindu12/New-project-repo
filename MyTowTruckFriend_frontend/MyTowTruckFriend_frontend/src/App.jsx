import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import FooterBar from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Abouts from "./components/Abouts";
import Service from "./components/Service";

const App = () => {
  const location = useLocation();

  // Hide NavBar and FooterBar on login and signup pages
  const hideNavBarAndFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavBarAndFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideNavBarAndFooter && <FooterBar />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
