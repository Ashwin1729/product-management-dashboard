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
import { ToastContainer } from "react-toastify";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign_up" exact element={<SignUp />} />
        <Route
          path="/products"
          exact
          element={
            <>
              <NavBar />
              <Products />
            </>
          }
        />
        <Route
          path="/analytics"
          exact
          element={
            <>
              <NavBar />
              <Analytics />
            </>
          }
        />
        <Route
          path="/settings"
          exact
          element={
            <>
              <NavBar />
              <Settings />
            </>
          }
        />
        <Route
          path="/add-product"
          exact
          element={
            <>
              <NavBar />
              <AddProduct />
            </>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
