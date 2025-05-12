import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RudraIcon from "../../assets/Rudra.png";

// Animation Settings
const fadeInDown = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

const fadeInUp = (delay = 0) => ({
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay },
});

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 200,
};

// Styled Components
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
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(136, 194, 115, 0.1)",
    transform: "scale(1.1)",
  },
}));

const StyledTypography = styled(Typography)({
  color: "#ebbc26",
  fontWeight: "bold",
});

const StyledAvatar = styled(motion.img)({
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "2px solid #ebbc26",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "rotate(360deg)",
  },
});

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/project" },
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
          <motion.div
            {...fadeInDown}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
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
          </motion.div>

          {/* Display buttons on larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item, index) => (
              <motion.div key={item.name} {...fadeInUp(index * 0.2)}>
                <NavButton
                  key={item.name}
                  component={Link}
                  to={item.path}
                  active={location.pathname === item.path ? 1 : 0}
                >
                  {item.name}
                </NavButton>
              </motion.div>
            ))}
          </Box>

          {/* Display hamburger menu on mobile screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
              TransitionComponent={motion.div}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={spring}
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    {item.name}
                  </motion.div>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}
