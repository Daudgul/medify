import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchInput({ small = false }) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);

  const fetchCity = (city) => {
    setLoading(true);
    axios
      .get(`https://meddata-backend.onrender.com/cities/${city}`)
      .then((response) => {
        setCities(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
        setLoading(false);
      });
  };

  // Handle change in selection
  const handleChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    fetchCity(event.target.value);
  };

  const handleSearch = () => {
    let city = false;
    city = cities?.includes(selectedCity);
    if (selectedState && city) {
      navigate(`/find-doctors?state=${selectedState}&city=${selectedCity}`);
    } else {
      alert("please select the inputs");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        padding: 3,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {" "}
      <TextField
        id="outlined-select-currency"
        select
        label="State"
        value={selectedState}
        onChange={handleChange}
        sx={{
          minWidth: "326px",
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      >
        <MenuItem disabled>State</MenuItem>
        {states?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="City"
        fullWidth
        value={selectedCity || ""}
        onChange={(e) => setSelectedCity(e.target.value)}
        sx={{}}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      >
        <MenuItem disabled>City</MenuItem>
        {loading ? (
          <MenuItem disabled>
            <CircularProgress size={24} />
          </MenuItem>
        ) : (
          cities?.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))
        )}
      </TextField>
      <Button
        variant="contained"
        sx={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: 500,
          textTransform: "capitalize",
          minWidth: "231px",
        }}
        onClick={handleSearch}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchInput;
