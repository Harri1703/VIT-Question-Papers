import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Search from "./components/Search";
import AddPaper from "./components/AddPaper";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/home" element={<Search />} />
            <Route path="/upload" element={<AddPaper />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
