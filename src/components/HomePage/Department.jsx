import { Box, Button, Container } from "@mui/material";
import React from "react";
import { FaRegHospital } from "react-icons/fa";
import { LuTestTube2 } from "react-icons/lu";
import { BsShieldPlus } from "react-icons/bs";
import { BsHeartPulse } from "react-icons/bs";
import { HiOutlineLibrary } from "react-icons/hi";
import { FaXRay } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Department() {
  return (
    <Container sx={{ my: 5 }} maxWidth="xl">
      <h2>Find by specialisation</h2>
      <Box
        display={"flex"}
        sx={{
          flexWrap: "wrap",
          gap: 6,
          mx: "auto",
          justifyContent: "center",
          my: 6,
        }}
      >
        <div className="spec_card">
          <FaRegHospital style={{ color: "#2AA7FF", fontSize: "80px" }} />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Dentistry</p>
        </div>
        <div className="spec_card">
          <LuTestTube2 style={{ color: "#2AA7FF", fontSize: "80px" }} />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Primary Care</p>
        </div>
        <div className="spec_card">
          <BsShieldPlus style={{ color: "#2AA7FF", fontSize: "80px" }} />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Cardiology</p>
        </div>
        <div className="spec_card">
          <BsHeartPulse style={{ color: "#2AA7FF", fontSize: "80px" }} />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>MRI Responces</p>
        </div>
        <div className="spec_card">
          <HiOutlineLibrary style={{ color: "#2AA7FF", fontSize: "80px" }} />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Blood Test</p>
        </div>
        <div className="spec_card">
          <FaXRay style={{ color: "#2AA7FF", fontSize: "80px" }} />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Piscologist</p>
        </div>
        <div className="spec_card">
          <AiOutlineFundProjectionScreen
            style={{ color: "#2AA7FF", fontSize: "80px" }}
          />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Laborotary</p>
        </div>
        <div className="spec_card">
          <FaRegHospital style={{ color: "#2AA7FF", fontSize: "80px" }} />
          <p style={{ color: "#ABB6C7", marginTop: "10px" }}>X-Ray</p>
        </div>
      </Box>
      <Box textAlign={"center"}>
        <Button sx={{ color: "#fff" }} variant="contained">
          View All
        </Button>
      </Box>
    </Container>
  );
}

export default Department;
