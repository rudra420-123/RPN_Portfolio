import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import ATCCollege from "../assets/ATC.jpg";
import HighSchool from "../assets/High.PNG";
import ScienceCollege from "../assets/Science.png";
import { motion } from "framer-motion";

const educationData = [
  {
    school: "Academy Of Technocrats College, Berhampur",
    years: "2022-2025",
    status: "Completed",
    image: ATCCollege,
    qualification: "Graduation",
    // description: '',
  },
  {
    school: "Govt.Science College, Chatrapur",
    years: "2020-2022",
    status: "Completed",
    image: ScienceCollege,
    qualification: "Intermediate",
    // description: '',
  },
  {
    school: "Karapada High School, Karapada",
    years: "2019-2020",
    status: "Completed",
    image: HighSchool,
    qualification: "Matriculation",
    // description: '',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 180,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    height: 200,
    width: "100%",
  },
}));

export default function Education() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "black", py: 8, px: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            align="center"
            sx={{
              color: "#ffffff",
              mb: 1,
              fontSize: { xs: "2rem", md: "3.7rem" },
            }}
          >
            🏫 My <span style={{ color: "#ebbc26" }}>Education</span>
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#ebbc26", mb: 4 }}
          >
            "The beautiful thing about learning is that no one can take it away
            from you."
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {educationData.map((edu, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <StyledCard
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <StyledCardMedia
                  component="img"
                  image={edu.image}
                  alt={edu.school}
                  // component={motion.img}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "#ebbc26", mb: 1 }}
                  >
                    {edu.school}
                  </Typography>
                  {/* {edu.description && (
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        {edu.description}
                                    </Typography>
                                )} */}
                  <Typography variant="body1" sx={{ color: "#ebbc26", mb: 1 }}>
                    {edu.years} | {edu.status}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#ebbc26" }}
                  >
                    {edu.qualification}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
