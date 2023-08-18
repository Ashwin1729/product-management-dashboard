import { Box } from "@mui/material";
import React from "react";
import SideBar from "../components/SideBar";

const About = () => {
  return (
    <>
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>About</h3>
        </Box>
      </Box>
    </>
  );
};

export default About;
