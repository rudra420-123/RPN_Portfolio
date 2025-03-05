import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import RudraIcon from "../assets/Rudra.png";
import Skills from "./Skills";
import Education from "./Education";
import Resume from "../assets/RUDRA-PRASAD-NAYAK-CV.pdf";
import { motion } from "framer-motion";

const StyledHeroSection = styled(Box)({
  backgroundColor: "black",
  color: "white",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
});

const GreenText = styled("span")({
  color: "#ebbc26",
});

const ProfileImage = styled(motion.img)({
  width: "100%",
  maxWidth: "380px",
  height: "auto",
  borderRadius: "20px",
  border: "3px solid #ebbc26",
  transition: "transform 0.3s ease",
});
const spring = {
  type: "spring",
  damping: 10,
  stiffness: 200,
};

const rotatingWords = [
  "Full Stack Developer",
  "Mern Stack Developer",
  "Python Developer",
  "UI/UX Designer",
];

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);

  // Handle rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StyledHeroSection
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Text Section */}
            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "start" },
              }}
            >
              <motion.div
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  sx={{
                    mt: { xs: 3, md: 0 },
                    mb: { xs: 2, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                    fontSize: { xs: "2rem", md: "3.7rem" },
                  }}
                >
                  👋Hello, I’m a{" "}
                  <GreenText>{rotatingWords[wordIndex]}.</GreenText>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Typography
                  sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}
                >
                  👉 I'm <b>Rudra Prasad Nayak</b>, a passionate web developer
                  and technology enthusiast. I enjoy tackling complex challenges
                  and turning ideas into impactful, scalable solutions through
                  clean and efficient code. My goal is to use my skills to
                  create innovative projects that make a real difference.
                </Typography>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...spring,
                  duration: 0.7,
                  delay: 1,
                }}
              >
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#ebbc26",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#facd3c",
                      },
                    }}
                  >
                    View My CV
                  </Button>
                </a>
              </motion.div>
            </Grid>

            {/* Image Section */}
            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Box display="flex" justifyContent="center">
                <ProfileImage
                  src={RudraIcon}
                  alt="Rudra Prasad Nayak"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHeroSection>
      <Skills />
      <Education />
    </>
  );
}
