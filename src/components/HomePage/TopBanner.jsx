import { Box, Button, Container } from "@mui/material";
import React from "react";
import banner from "../../assests/images/banners/banner.png";

function TopBanner() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        gap: 4,
        p: 4,
        flexDirection: { xs: "column", md: "row" },
        mb: "-230px",
      }}
    >
      <Box className="banner_Box">
        <h4>Skip the travel! Find Online</h4>
        <h1>
          Medical <span> Centers</span>
        </h1>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <Button
          variant="contained"
          sx={{ color: "#fff", textTransform: "capitalize", width: "177px" }}
        >
          Find Center
        </Button>
      </Box>
      <Box ml={"auto"}>
        <img style={{ width: "100%" }} src={banner} alt="Top banner image" />
      </Box>
    </Container>
  );
}

export default TopBanner;
