import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";
import { AppContext } from "../context/application-context";

const Products = () => {
  const appCtx = useContext(AppContext);
  const productsData = appCtx.productsData;

  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Products</h3>
          {productsData.length === 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "30vh",
              }}
            >
              No products found. Please Add New Products ...!
            </Box>
          )}
          {productsData.length > 0 && <ProductTable />}

          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <Link to="/add-product">
              <Button variant="outlined">+ Add Product</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Products;
