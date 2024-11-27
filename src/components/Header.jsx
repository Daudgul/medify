import { Box, Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assests/images/banners/logo.png";

const drawerWidth = 240;
const navItems = [
  "Find Doctors",
  "Find Hospitals",
  "Find Medicines",
  "Find Surgeries",
  "Software for Providers",
  "Find Facilities",
];

function Header(props) {
  const location = useLocation();

  // Determine the background color based on the current location
  const backgroundColor = location.pathname === "/" ? "transparent" : "#fff";

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img style={{ width: "128px" }} src={logo} alt="Logo img" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "block" },
          backgroundColor: "#2AA7FF",
          color: "#fff",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "21px",
          padding: "10px 0",
        }}
      >
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
      <CssBaseline />
      <Container maxWidth="xl">
        <AppBar
          component="nav"
          sx={{
            // top: { xs: 0, sm: 41 },
            border: "none",
            boxShadow: "none",
            bgcolor: backgroundColor,
            position: "relative",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              //   variant="h6"
              //   component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {/* MUI */}
              <img style={{ width: "128px" }} src={logo} alt="Logo img" />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#102851",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    textTransform: "capitalize",
                  }}
                >
                  {item}
                </Button>
              ))}

              <Button
                variant="contained"
                sx={{ color: "#fff", textTransform: "capitalize" }}
              >
                My Booking
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Container>
    </Box>
  );
}

export default Header;
