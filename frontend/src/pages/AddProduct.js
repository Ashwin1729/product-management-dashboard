import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";
import SideBar from "../components/SideBar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AddProduct.module.css";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const notifyUploadPic = () =>
    toast.warn("Please Select an Image !", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyPicUploadSuccessful = () =>
    toast.success("Image Uploaded !", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const postDetails = (pics) => {
    setPicLoading(true);

    if (pics === undefined) {
      notifyUploadPic();
      setPicLoading(false);
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "product-dashboard");
      data.append("cloud_name", "dv7h7dmhz");
      fetch("https://api.cloudinary.com/v1_1/dv7h7dmhz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          notifyPicUploadSuccessful();
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      notifyUploadPic();
      setPicLoading(false);
      return;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
      productName,
      price,
      description,
      quantity,
    });
  };

  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className={styles.form_container}>
            <div className={styles.login_card}>
              <p>Add a New Product</p>
              <form onSubmit={submitHandler}>
                <div className={styles.form_field}>
                  <TextField
                    id="standard-basic"
                    label="Product Name"
                    type="text"
                    variant="standard"
                    fullWidth
                    size="small"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className={styles.form_field}>
                  <TextField
                    id="standard-basic"
                    label="Price"
                    type="number"
                    variant="standard"
                    fullWidth
                    size="small"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className={styles.form_field}>
                  <TextField
                    id="standard-basic"
                    label="Description"
                    multiline
                    variant="standard"
                    fullWidth
                    size="small"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className={styles.form_field}>
                  <TextField
                    id="standard-basic"
                    label="Quantity"
                    type="number"
                    variant="standard"
                    fullWidth
                    size="small"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className={styles.form_field}>
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="neutral"
                    loading={picLoading}
                    startDecorator={
                      <SvgIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>
                      </SvgIcon>
                    }
                  >
                    Upload Product Image
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => postDetails(e.target.files[0])}
                    />
                  </Button>
                </div>

                <button className={styles.submit_button} type="submit">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AddProduct;
