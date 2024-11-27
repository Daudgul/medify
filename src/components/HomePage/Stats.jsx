import { Box, Container } from "@mui/material";
import React from "react";
import group2 from "../../assests/images/banners/group2.png";

function Stats() {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box>
        <p className="sub-heading" style={{ textAlign: "start" }}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <h2 style={{ textAlign: "start", margin: "5px 0 15px" }}>
          Our Families
        </h2>
        <p style={{ color: "#77829D", textAlign: "start" }}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </Box>
      <img src={group2} alt="figure numbers" />
    </Container>
  );
}

export default Stats;
