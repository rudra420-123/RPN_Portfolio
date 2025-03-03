import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import Skipline from "../assets/Skipline.png";
import Guarder from "../assets/Guarder.png";
import Billing from "../assets/Billing.png";

const projects = [
  {
    title: "Skipline-Marketplace",
    description:
      "Skipline – a cutting-edge e-commerce platform delivering a seamless shopping experience with an intuitive interface, fast performance, and personalized recommendations.",
    image: Skipline,
    technologies: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "BOOTSTRAP",
    ],
    link: "https://rudra420-123.github.io/Skipline_Ecommerce_Website/",
  },
  {
    title: "Guarder-Services",
    description:
    "Guarder Website offers highly trained and professional security guards to safeguard homes, businesses, and large-scale events with 24/7 availability and reliability.",
    image: Guarder,
    technologies: ["REACT JS", "MATERIAL UI", "TYPESCRIPT"],
    link: "https://github.com/rudra420-123/Guarder_Website/",
  }, 
  {
    title: "Billing-Software",
    description:
    "Billing Software simplifies billing processes, enabling users to create, manage, and save invoices effortlessly with features like itemized billing, customer management, and automated bill generation.",
    image: Billing,
    technologies: ["PYTHON", "FLASK", "JINJA"],
    link: "https://github.com/rudra420-123/Billing_Software/",
  }, 
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%",
});

const TechChip = styled(Box)(({ theme }) => ({
  display: "inline-block",
  padding: "2px 8px",
  margin: "0 4px 4px 0",
  borderRadius: "16px",
  backgroundColor: "#ebbc26",
  color: "#000000",
  fontSize: "0.8rem",
}));

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "black", py: 8, px: 2 }}>
        <Typography
          align="center"
          sx={{
            color: "#ffffff",
            mb: 1,
            fontSize: { xs: "2rem", md: "3.7rem" },
          }}
        >
          My <span style={{ color: "#ebbc26" }}>Projects</span>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "#ebbc26", mb: 4 }}
        >
          "Explore a selection of projects I've worked on to showcase my skills
          and experience."
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <StyledCardMedia image={project.image} title={project.title} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ color: "#ebbc26" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <TechChip key={techIndex}>{tech}</TechChip>
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    href={project.link}
                    sx={{
                      color: "#ebbc26",
                      borderColor: "#ebbc26",
                      "&:hover": {
                        backgroundColor: "#ebbc26",
                        color: "#000000",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
