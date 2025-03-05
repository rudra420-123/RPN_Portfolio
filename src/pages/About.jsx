import React from "react";
import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
import { styled } from "@mui/system";
import { LinkedIn, GitHub } from "@mui/icons-material";
import RudraIcon from "../assets/Rudra.png";
import { Facebook, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";

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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                sx={{
                  color: "white",
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "2.1rem", md: "3.1rem" },
                }}
              >
                👋Hey! I'm{" "}
                <span style={{ color: "#ebbc26" }}>Rudra Prasad Nayak</span> and
                I'm a{" "}
                <span style={{ color: "#ebbc26" }}>Full Stack Developer</span>.
              </Typography>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay:0.1,  ease: "easeOut" }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                👉 I'm passionate about technology and education, and my journey
                has encompassed roles as a developer, content creator,
                entrepreneur, and innovator. With a strong focus on the MERN
                stack, I have hands-on experience building full-stack
                applications and transforming ideas into impactful solutions. I
                thrive on leveraging my skills to create meaningful projects
                that drive progress and innovation.
              </Typography>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay:0.2,  ease: "easeOut" }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                👉 Beyond development, I enjoy creating educational content that
                simplifies complex technical concepts. I’m committed to
                empowering the next generation of developers by sharing
                knowledge through easy-to-follow tutorials and resources.
              </Typography>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay:0.3,  ease: "easeOut" }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                👉 My goal is to contribute to projects that drive real-world
                impact while staying committed to lifelong learning. From
                building real-time collaboration platforms to solving problems
                on LeetCode, my passion for problem-solving and technology keeps
                growing every day.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=100057072414096",
                    icon: <Facebook />,
                  },
                  {
                    href: "https://www.linkedin.com/in/RudraPrasadNayak728/",
                    icon: <LinkedIn />,
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
                  <SocialIcon
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    as={motion.a}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </SocialIcon>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  alt="Rudra Prasad Nayak"
                  src={RudraIcon}
                  sx={{
                    width: { xs: 250, md: 350 },
                    height: { xs: 250, md: 350 },
                    border: "4px solid #ebbc26",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
