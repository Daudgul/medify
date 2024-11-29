import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Top from "../Top";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { HospitalCards } from "../FindDoctors/FindDoctors";
import adsImg from "../../assests/images/banners/adds.png";

function MyBookings() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("hospitalList")) || [];
    setList(storedList);
    setOriginalList(storedList);
  }, []);

  const handleFilter = () => {
    if (input.trim().length < 1) {
      alert("Please input a hospital name");
      return;
    }

    const filteredList = originalList.filter((item) =>
      item["Hospital Name"]?.toLowerCase().includes(input.toLowerCase())
    );

    setList(filteredList);
    setInput("");
  };
  return (
    <Box>
      <Top />
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          gap={"3%"}
          sx={{
            transform: "translateY(-65px)",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <h1 style={{ color: "#fff", fontSize: "40px" }}>My Bookings</h1>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: 4,
              display: "flex",
              gap: 4,
              flex: 1,
              boxShadow: "6px 6px 35px 0px #1028511c;",
            }}
          >
            <TextField
              id="outlined-select-currency"
              // select
              // label="Search by hospital"
              placeholder="Search By Hospital"
              value={input}
              fullWidth
              onChange={(e) => setInput(e.target.value)}
              sx={
                {
                  // minWidth: "326px",
                }
              }
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: 500,
                textTransform: "capitalize",
                minWidth: "231px",
              }}
              onClick={handleFilter}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box sx={{ my: 4, display: "flex", gap: 4 }}>
          <Box width={"100%"}>
            {list.length > 0 ? (
              list.map((item) => (
                <HospitalCards
                  key={item["Provider ID"]}
                  item={item}
                  byBooking={true}
                />
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
          <Box sx={{ display: { xs: "none", lg: "block" }, marginTop: "26px" }}>
            <img src={adsImg} alt="Ads" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default MyBookings;
