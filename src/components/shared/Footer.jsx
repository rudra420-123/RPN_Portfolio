import React from "react";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Rudra Prasad Nayak
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.name}
                    component={Link}
                    to={item.path}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </NavButton>
                ))}
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Box>
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=100057072414096",
                    icon: <Facebook />,
                  },
                  {
                    href: "https://www.linkedin.com/in/RudraPrasadNayak728/",
                    icon: <LinkedInIcon />,
                  },
                  {
                    href: "https://www.instagram.com/dipu13562/",
                    icon: <Instagram />,
                  },
                  {
                    href: "https://github.com/Rudra-Prasad-Nayak",
                    icon: <GitHubIcon />,
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialButton
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </SocialButton>
                  </a>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </StyledFooter>
  );
}
