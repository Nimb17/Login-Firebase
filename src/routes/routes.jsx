import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/signUp/SignUp";
import { Home } from "../components/home/Home";
import { auth } from "..//firebase";
import { useState } from "react";
import { useEffect } from "react";
import DashBoard from "../components/dashBoard/DashBoard";

export function MyRoutes() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home name={userName} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </Router>
  );
}
