import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import RudraIcon from "../../assets/Rudra.png";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
  boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
  padding: "0.5rem 1rem",
});

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? "#ebbc26" : "#fff",
  borderBottom: active ? "2px solid #ebbc26" : "none",
  borderRadius: 0,
  paddingBottom: "0.3rem",
  "&:hover": {
    backgroundColor: "rgba(136, 194, 115, 0.1)",
  },
}));

const StyledTypography = styled(Typography)({
  color: "#ebbc26",
  fontWeight: "bold",
});

const StyledAvatar = styled(Avatar)({
  width: 40,
  height: 40,
  border: "2px solid #ebbc26",
});

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <StyledToolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            <StyledAvatar alt="Rudra Prasad Nayak" src={RudraIcon} />
            <StyledTypography
              sx={{ flexGrow: 1, fontSize: { xs: "1.1rem", md: "1.8rem" } }}
            >
              Rudra Prasad Nayak
            </StyledTypography>
          </Box>

          {/* Display buttons on larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <NavButton
                key={item.name}
                component={Link}
                to={item.path}
                active={location.pathname === item.path ? 1 : 0}
              >
                {item.name}
              </NavButton>
            ))}
          </Box>

          {/* Display hamburger menu on mobile screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}
