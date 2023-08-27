import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyUploadPic = () =>
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

export const notifyPicUploadSuccessful = () =>
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

export const notifyIncompleteFields = () =>
  toast.warn("Please fill all the details !", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyAddProductSuccessful = () =>
  toast.success("Product added successfully !", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyEditProductSuccessful = () =>
  toast.success("Product edited successfully !", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyUndefinedProductId = () =>
  toast.warn("Product Id is not defined", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyDeleteProductSuccessful = () =>
  toast.success("Product deleted successfully !", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyLogoutSuccessful = () =>
  toast.success("Logged out successfully !", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyError = () =>
  toast.error("Error Occured !", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
