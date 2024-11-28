import { Box, Container } from "@mui/material";
import React from "react";
import SearchInput from "../SearchInput";
import { FaRegHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { RiCapsuleLine } from "react-icons/ri";
import { HiBuildingLibrary } from "react-icons/hi2";
import { LuTestTube2 } from "react-icons/lu";
import { BsShieldPlus } from "react-icons/bs";
import { BsHeartPulse } from "react-icons/bs";

function SelectBox() {
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          px: "32px !important",
          transform: "translateY(95px)",
        }}
      >
        <Box
          sx={{
            // mb: -8,
            boxShadow: "6px 6px 35px 0px #1028511C",
            borderRadius: "15px",
            background: "#fff",
          }}
        >
          <SearchInput />
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            You may be looking for
          </p>

          <Box
            display={"flex"}
            sx={{
              flexWrap: "wrap",
              //   gap: 1,
              mx: "auto",
              justifyContent: "space-around",
              mt: 6,
              pb: 6,
            }}
          >
            <div className="spec_card2">
              <FaUserDoctor style={{ color: "#2AA7FF", fontSize: "60px" }} />
              <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Doctors</p>
            </div>
            <div className="spec_card2">
              <HiBuildingLibrary
                style={{ color: "#2AA7FF", fontSize: "60px" }}
              />
              <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Labs</p>
            </div>

            <div className="spec_card2 active">
              <FaRegHospital style={{ color: "#2AA7FF", fontSize: "60px" }} />
              <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Hospital</p>
            </div>
            <div className="spec_card2">
              <RiCapsuleLine style={{ color: "#2AA7FF", fontSize: "60px" }} />
              <p style={{ color: "#ABB6C7", marginTop: "10px" }}>
                Medical Store
              </p>
            </div>
            <div className="spec_card2">
              <FaAmbulance style={{ color: "#2AA7FF", fontSize: "60px" }} />
              <p style={{ color: "#ABB6C7", marginTop: "10px" }}>Ambulance</p>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SelectBox;
