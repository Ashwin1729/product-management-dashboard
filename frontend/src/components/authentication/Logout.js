import React from "react";
import SideBar from "../SideBar";
import { Box } from "@mui/material";
import styles from "./Logout.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notifyLogoutSuccessful } from "../../utils/toastify-objects";

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    notifyLogoutSuccessful();
    navigate("/login");
  };

  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className={styles.logout_container}>
            <div className={styles.logout_card}>
              <p>Log out from your account</p>
              <button className={styles.logout_button} onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Logout;
