import React from "react";
import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
import { styled } from "@mui/system";
import { LinkedIn, GitHub } from "@mui/icons-material";
import RudraIcon from "../assets/Rudra.png";
import { Facebook, Instagram } from "@mui/icons-material";

const SocialIcon = styled("a")(({ theme }) => ({
  color: "#ebbc26",
  fontSize: "1.5rem",
  marginRight: theme.spacing(2),
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#ffffff",
  },
}));

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "black", py: 8, px: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                color: "white",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2.2rem", md: "3.2rem" },
              }}
            >
              Hey! I'm{" "}
              <span style={{ color: "#ebbc26" }}>Rudra Prasad Nayak</span> and
              I'm a{" "}
              <span style={{ color: "#ebbc26" }}>Full Stack Developer</span>.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              I'm passionate about technology and education, and my journey has
              encompassed roles as a developer, content creator, entrepreneur,
              and innovator. With a strong focus on the MERN stack, I have
              hands-on experience building full-stack applications and
              transforming ideas into impactful solutions. I thrive on
              leveraging my skills to create meaningful projects that drive
              progress and innovation.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Beyond development, I enjoy creating educational content that
              simplifies complex technical concepts. I’m committed to empowering
              the next generation of developers by sharing knowledge through
              easy-to-follow tutorials and resources.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              My goal is to contribute to projects that drive real-world impact
              while staying committed to lifelong learning. From building
              real-time collaboration platforms to solving problems on LeetCode,
              my passion for problem-solving and technology keeps growing every
              day.
            </Typography>
            <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=100057072414096"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/RudraPrasadNayak728/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/dipu13562/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/Rudra-Prasad-Nayak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </SocialIcon>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Rudra Prasad Nayak"
                src={RudraIcon}
                sx={{
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                  border: "4px solid #ebbc26",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
