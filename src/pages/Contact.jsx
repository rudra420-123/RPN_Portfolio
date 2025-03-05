import React from "react";
import { Box, Typography, Avatar, IconButton, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Facebook, Instagram, GitHub } from "@mui/icons-material";
import RudraIcon from "../assets/Rudra.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
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
                icon: <GitHub />,
              },
            ].map((item, index) => (
              <SocialIconButton
                key={index}
                component={motion.a}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </SocialIconButton>
            ))}
          </Box>
        </motion.div>
        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
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
        </motion.div>
      </Box>
    </Container>
  );
}
