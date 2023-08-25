import { Box, Button } from "@mui/material";
import React from "react";
import SideBar from "../components/SideBar";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Products</h3>
          <ProductTable />
          <Link to="/add-product">
            <Button variant="outlined">+ Add Product</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Products;
