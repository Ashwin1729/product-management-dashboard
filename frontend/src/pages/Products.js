import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";
import { AppContext } from "../context/application-context";
import { toast } from "react-toastify";
import axios from "axios";
import { transformProducts } from "../utils/data";
import CircularProgress from "@mui/material/CircularProgress";

const Products = () => {
  const [loading, setLoading] = useState(false);

  const appCtx = useContext(AppContext);
  const user = appCtx.user;
  const productsData = appCtx.productsData;
  const setProductsData = appCtx.setProductsData;
  const fetchAgain = appCtx.fetchAgain;

  const notifyError = () =>
    toast.error("Unable to fetch Products !", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const fetchProducts = async () => {
    setLoading(true);
    console.log(user);
    try {
      const config = {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/products/fetch-products", config);
      const updatedProducts = transformProducts(data);
      setProductsData(updatedProducts);
      setLoading(false);
    } catch (error) {
      notifyError();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchAgain]);

  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Products</h3>
          {loading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "30vh",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          {!loading && productsData.length === 0 && (
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
          {!loading && productsData.length > 0 && <ProductTable />}

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
