import { Box, Container } from "@mui/material";
import React from "react";
import group4 from "../../assests/images/banners/group4.png";
import rightIcon from "../../assests/images/banners/right.png";

function Patient() {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <img src={group4} alt="group img" />
      <Box>
        <p style={{ color: "#2aa7ff" }}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </p>
        <h2 style={{ textAlign: "start", margin: "10px 0 20px " }}>
          Patient <span style={{ color: "#2aa7ff" }}>Caring</span>
        </h2>
        <p style={{ color: "#77829D" }}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>

        <p style={{ color: "#1B3C74", marginTop: "20px" }}>
          {" "}
          <span style={{ textAlign: "center" }}>
            {" "}
            <img
              src={rightIcon}
              style={{ width: "20px", marginTop: "10px", marginRight: "10px" }}
              alt="icon"
            />
          </span>{" "}
          Stay Updated About Your Health
        </p>
        <p style={{ color: "#1B3C74" }}>
          {" "}
          <span style={{ textAlign: "center" }}>
            {" "}
            <img
              src={rightIcon}
              style={{ width: "20px", marginTop: "10px", marginRight: "10px" }}
              alt="icon"
            />
          </span>{" "}
          Check Your Results Online
        </p>
        <p style={{ color: "#1B3C74" }}>
          {" "}
          <span style={{ textAlign: "center" }}>
            {" "}
            <img
              src={rightIcon}
              style={{ width: "20px", marginTop: "10px", marginRight: "10px" }}
              alt="icon"
            />
          </span>{" "}
          Manage Your Appointments
        </p>
      </Box>
    </Container>
  );
}

export default Patient;
