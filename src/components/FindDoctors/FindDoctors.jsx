import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Top from "../Top";
import SearchInput from "../SearchInput";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import adsImg from "../../assests/images/banners/adds.png";
import hospital from "../../assests/images/banners/hospital.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CircularProgress from "@mui/material/CircularProgress";
import FAQ from "../FAQ";

function FindDoctors() {
  const [listHospital, setListHospital] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get("state");
  const city = params.get("city");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      )
      .then((response) => {
        setListHospital(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
        setLoading(false);
      });
  }, [city, state]);

  return (
    <>
      <Box>
        <Top />
        <Container maxWidth="xl">
          <Box className="box">
            <SearchInput />
          </Box>
          {loading ? (
            <Box
              sx={{
                margin: "auto 0px",
                height: "40vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff",
                borderRadius: "15px",
                flexDirection: "column",
              }}
            >
              <CircularProgress />
              Loding
            </Box>
          ) : (
            <Box sx={{ my: 3 }}>
              <Box>
                <h4
                  style={{ fontSize: "24px", fontWeight: 500, color: "#000" }}
                >
                  {listHospital.length} medical centers available in {state}
                </h4>
                <p style={{ color: "#787887" }}>
                  <span
                    style={{
                      display: "inline-block",
                      transform: "translateY(7px)",
                      paddingRight: "20px",
                    }}
                  >
                    <CheckCircleOutlineIcon />
                  </span>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </p>
              </Box>
              <Box display={"flex"} my={4} gap={4}>
                <Box width={"100%"}>
                  {!loading && listHospital.length > 0 ? (
                    listHospital.map((item) => (
                      <HospitalCards key={item["Provider ID"]} item={item} />
                    ))
                  ) : (
                    <Box
                      sx={{
                        margin: "auto 0px",
                        height: "40vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#fff",
                        borderRadius: "15px",
                      }}
                    >
                      No Hospitol found to this{" "}
                    </Box>
                  )}
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", lg: "block", marginTop: "26px" },
                  }}
                >
                  <img src={adsImg} alt="Ads" />
                </Box>
              </Box>
            </Box>
          )}
        </Container>
        <FAQ />
      </Box>
    </>
  );
}

export default FindDoctors;

export function HospitalCards({ item, byBooking = false }) {
  const navigate = useNavigate();
  const saveHospitalToLocalStorage = (obj) => {
    let objectList = JSON.parse(localStorage.getItem("hospitalList")) || [];
    objectList.push(obj);
    localStorage.setItem("hospitalList", JSON.stringify(objectList));
  };
  const handleClick = () => {
    saveHospitalToLocalStorage(item);
    alert("Your appoitment has been booked.");
    navigate("/my-bookings");
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "4% 20px 20px",
        background: "#fff",
        borderRadius: "15px",
        marginRight: "5%",
        my: 3,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          background: "#8CCFFF",
          width: "124px",
          height: "124px",
          textAlign: "center",
          paddingTop: "10px",
          mb: "auto",
        }}
      >
        <img src={hospital} alt="Hospital icon" />
      </Box>
      <Box flex={1}>
        <h4
          style={{
            color: "#14BEF0",
            fontSize: "20px",
            fontWeight: 600,
            margin: "10px 0",
          }}
        >
          {item["Hospital Name"]}
        </h4>
        <p style={{ fontWeight: 700, color: "#000" }}>{item.Address}</p>
        <p style={{ color: "#414146" }}>{item["Hospital Type"]}</p>
        <p style={{ color: "#414146", marginTop: "8px" }}>
          {" "}
          <span style={{ color: "green", fontWeight: 700 }}>FREE</span>{" "}
          <span
            style={{
              padding: "0 10px ",
              color: "#787887",
              textDecoration: "line-through",
            }}
          >
            ₹500
          </span>
          Consultation fee at clinic
        </p>
        <div className="doted_icon">
          <ThumbUpIcon fontSize="small" />{" "}
          <span>{item["Hospital overall rating"]}</span>
        </div>
      </Box>
      <Box
        sx={{
          mt: !byBooking ? "auto" : "",
        }}
      >
        <Box sx={{ display: !byBooking ? "none" : "flex", mb: "auto" }}>
          <p
            style={{
              color: "#2AA7FF",
              border: "solid 1px #2aa7ff",
              padding: "10px 20px",
              marginRight: "10px",
              borderRadius: "3px",
            }}
          >
            10 : 00
          </p>{" "}
          <p
            style={{
              borderRadius: "3px",
              color: "green",
              border: "solid 1px green",
              padding: "10px 20px",
            }}
          >
            20 April 2014
          </p>{" "}
        </Box>
        <p
          style={{
            color: "#01A400",
            textAlign: "center",
            padding: "10px",
            display: byBooking ? "none" : "",
          }}
        >
          Available Today
        </p>
        <Button
          fullWidth
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            p: "10px 30px",
            display: byBooking ? "none" : "",
          }}
          variant="contained"
          onClick={handleClick}
        >
          Book FREE Center Visit
        </Button>
      </Box>
    </Box>
  );
}
