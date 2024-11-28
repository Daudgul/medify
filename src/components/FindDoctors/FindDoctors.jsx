import { Box, Container } from "@mui/material";
import React from "react";
import Top from "../Top";
import SearchInput from "../SearchInput";

function FindDoctors() {
  return (
    <Box>
      <Top />
      <Container maxWidth="xl">
        <Box className="box">
          <SearchInput />
        </Box>
        <Box sx={{ my: 3 }}>contnt</Box>
      </Container>
    </Box>
  );
}

export default FindDoctors;
