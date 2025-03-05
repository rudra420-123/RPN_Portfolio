import React from "react";
import { Box, Typography, Avatar, IconButton, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Facebook, Instagram, GitHub } from "@mui/icons-material";
import RudraIcon from "../assets/Rudra.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: "#ebbc26",
  "&:hover": {
    backgroundColor: "rgba(136, 194, 115, 0.1)",
  },
}));

export default function Contact() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: "black",
          // minHeight: '100vh',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: "white",
            mb: 4,
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          }}
        >
          📳Don't hesitate to get in touch!
        </Typography>

        <Avatar
          alt="Rudra Prasad Nayak"
          src={RudraIcon}
          sx={{
            width: { xs: 150, sm: 200 },
            height: { xs: 150, sm: 200 },
            mb: 4,
            border: "4px solid #ebbc26",
          }}
        />

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <SocialIconButton
            aria-label="Facebook"
            href="https://www.facebook.com/profile.php?id=100057072414096"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook fontSize="large" />
          </SocialIconButton>
          <SocialIconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/RudraPrasadNayak728/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </SocialIconButton>
          <SocialIconButton
            aria-label="Instagram"
            href="https://www.instagram.com/dipu13562/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="large" />
          </SocialIconButton>
          <SocialIconButton
            aria-label="GitHub"
            href="https://github.com/Rudra-Prasad-Nayak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub fontSize="large" />
          </SocialIconButton>
        </Box>

        {/* Contact details */}
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "#ebbc26", textAlign: "center", mb: 1 }}
        >
          Email:{" "}
          <a
            href="mailto:rudraprasadnayak728@gmail.com"
            style={{ color: "#ebbc26", textDecoration: "none" }}
          >
            rudraprasadnayak728@gmail.com
          </a>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "#ebbc26", textAlign: "center" }}
        >
          Phone:{" "}
          <a
            href="tel:+917847091537"
            style={{ color: "#ebbc26", textDecoration: "none" }}
          >
            +91 78470 91537
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
