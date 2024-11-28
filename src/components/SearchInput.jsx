import { Box, Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

function SearchInput({ small = false }) {
  //   console.log(small, "this is sma;;");
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "space-between",
        gap: 5,
        padding: 3,
        flexWrap: { xs: "wrap", md: "nowrap" },
        // flexWrap: "",
      }}
    >
      {" "}
      <TextField
        id="outlined-select-currency"
        select
        label="State"
        // placeholder="City"
        // fullWidth
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
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="City"
        fullWidth
        sx={
          {
            //   maxWidth: "522px",
          }
        }
        // defaultValue="EUR"
        // helperText="Please select your currency"
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
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
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
        // fullWidth
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchInput;
