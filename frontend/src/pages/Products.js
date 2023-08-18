import { Box } from "@mui/material";
import React from "react";
import SideBar from "../components/SideBar";

const Products = () => {
  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Products</h3>
        </Box>
      </Box>
    </>
  );
};

export default Products;
