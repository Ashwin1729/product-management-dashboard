import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import NavBar from "./components/NavBar";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import { ToastContainer } from "react-toastify";
import EditProduct from "./pages/EditProduct";
import Logout from "./components/authentication/Logout";

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
          path="/logout"
          exact
          element={
            <>
              <NavBar />
              <Logout />
            </>
          }
        />
        <Route
          path="/add-product"
          exact
          element={
            <>
              <NavBar />
              <EditProduct />
            </>
          }
        />
        <Route
          path="/edit-product/:productId"
          exact
          element={
            <>
              <NavBar />
              <EditProduct />
            </>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
