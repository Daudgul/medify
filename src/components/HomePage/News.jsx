import { Box, Container } from "@mui/material";
import React from "react";
import group3 from "../../assests/images/banners/group3.png";

function News() {
  return (
    <Box sx={{ bgcolor: "#fff", py: 4 }}>
      <Container>
        <p className="sub-heading">Blog & News</p>
        <h2>Read Our Latest News</h2>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mt: 4,
            }}
          >
            <img src={group3} alt="New card img" />
            <img src={group3} alt="New card img" />
            <img src={group3} alt="New card img" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default News;
