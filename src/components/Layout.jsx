import React from "react";
import { Outlet } from "react-router-dom";
import { Typography, Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import listImg from "../assests/images/banners/footer-up.png";
// const listImg =
const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      {/* <Container maxWidth="xl" sx={{ flexGrow: 1, marginTop: 8 }}> */}
      <Outlet /> {/* </Container> */}
      <Container sx={{ overflow: "hidden" }}>
        <img
          src={listImg}
          alt="background img"
          style={{ transform: " translateY(73px)" }}
        />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
