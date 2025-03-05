import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import RudraIcon from "../assets/Rudra.png";
import Skills from "./Skills";
import Education from "./Education";
import Resume from "../assets/RUDRA-PRASAD-NAYAK-CV.pdf";

const StyledHeroSection = styled(Box)({
  backgroundColor: "black",
  color: "white",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
});

const GreenText = styled("span")({
  color: "#ebbc26",
});

const ProfileImage = styled("img")({
  width: "100%",
  maxWidth: "380px",
  height: "auto",
  borderRadius: "20px",
  border: "3px solid #ebbc26",
});

const rotatingWords = [
  "Full Stack Developer",
  "Mern Stack Developer",
  "Python Developer",
  "UI/UX Designer",
];

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StyledHeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "start" },
              }}
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
              <Typography
                sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}
              >
                👉 I'm <b>Rudra Prasad Nayak</b>, a passionate web developer and
                technology enthusiast. I enjoy tackling complex challenges and
                turning ideas into impactful, scalable solutions through clean
                and efficient code. My goal is to use my skills to create
                innovative projects that make a real difference.
              </Typography>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center">
                <ProfileImage src={RudraIcon} alt="Rudra Prasad Nayak" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHeroSection>
      <Skills />
      {/* <WorkExperience /> */}
      <Education />
    </>
  );
}
