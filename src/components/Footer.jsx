import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../assests/images/banners/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const list = [
  "about us",
  "our gallery",
  "appointment",
  "privacy policy",
  "orthology ",
  "neurology",
  "dental care",
  "ophthalmology",
  "cardiology",
  "about us",
  "our gallery",
  "appointment",
];

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1B3C74",
        color: "#fff",
        height: { xs: "auto", md: "424" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          mt={"4%"}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"space-between"}
            height={"200px"}
            margin={"0% 20% 30px 2%"}
          >
            <img style={{ width: "128px" }} src={logo} alt="Logo img" />
            <Box display={"flex"} gap={3}>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                <FaFacebookF style={{ color: "#2AA7FF" }} />
              </Box>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                <FaTwitter style={{ color: "#2AA7FF" }} />
              </Box>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                <FaYoutube style={{ color: "#2AA7FF" }} />
              </Box>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                <FaPinterest style={{ color: "#2AA7FF" }} />
              </Box>
            </Box>
          </Box>
          {/* <Box display={"flex"} flex={1} justifyContent={"space-between"}> */}
          <Grid container justifyContent="center" spacing={3}>
            {list.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Typography
                  variant="body1"
                  style={{
                    textTransform: "capitalize",
                    textDecoration: "none",
                    display: "flex",
                    // justifyContent: "center",
                  }}
                >
                  <span style={{ margin: "0 10px", fontSize: "18px" }}>
                    {">"}
                  </span>
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {/* </Box> */}
        </Box>
        <Typography
          variant="body2"
          color="white"
          align="left"
          sx={{ borderTop: "1px solid gray", py: "30px" }}
        >
          Copyright ©2024 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
