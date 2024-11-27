import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider, Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Create a custom theme with the primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF", // Set your primary color here
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif", // Use Poppins font
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
