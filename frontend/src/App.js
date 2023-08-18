import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign_up" exact element={<SignUp />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/analytics" exact element={<Analytics />} />
        <Route path="/settings" exact element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
