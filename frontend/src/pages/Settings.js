import React from "react";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";

const Settings = () => {
  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Settings</h3>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
