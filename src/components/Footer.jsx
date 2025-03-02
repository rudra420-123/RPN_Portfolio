import React from "react";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "@mui/icons-material";

const StyledFooter = styled(Box)({
  backgroundColor: "black",
  color: "#ebbc26",
  padding: "2rem 0",
});

const NavButton = styled(Button)({
  color: "#ebbc26",
  "&:hover": {
    backgroundColor: "rgba(136, 194, 115, 0.1)",
  },
});

const SocialButton = styled(IconButton)({
  color: "#ebbc26",
  "&:hover": {
    backgroundColor: "rgba(136, 194, 115, 0.1)",
  },
});

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Rudra Prasad Nayak
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <NavButton key={item.name} component={Link} to={item.path}>
                {item.name}
              </NavButton>
            ))}
          </Box>
          <Box>
            <a
              href="https://www.facebook.com/profile.php?id=100057072414096"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialButton aria-label="Facebook">
                <Facebook />
              </SocialButton>
            </a>
            <a
              href="https://www.linkedin.com/in/RudraPrasadNayak728/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialButton aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialButton>
            </a>
            <a
              href="https://www.instagram.com/dipu13562/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialButton aria-label="Instagram">
                <Instagram />
              </SocialButton>
            </a>
            <a
              href="https://github.com/Rudra-Prasad-Nayak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialButton aria-label="GitHub">
                <GitHubIcon />
              </SocialButton>
            </a>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
}
