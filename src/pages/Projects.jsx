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
import { motion } from "framer-motion";
import Skipline from "../assets/Skipline.png";
import Guarder from "../assets/Guarder.png";
import Billing from "../assets/Billing.png";
import ImageEnhancer from "../assets/ImageEnhancer.png";
import CodeReviewer from "../assets/CodeReviewer.png";
import Luxurious_360_Tour from "../assets/Luxurious_360_Tour.png";

const projects = [
  {
    title: "Skipline-Marketplace",
    description:
      "Skipline – a cutting-edge e-commerce platform delivering a seamless shopping experience with an intuitive interface, fast performance, and personalized recommendations.",
    image: Skipline,
    technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    source: "https://github.com/rudra420-123/Skipline_Ecommerce_Website/",
    live: "https://rudra420-123.github.io/Skipline_Ecommerce_Website/",
  },
  {
    title: "Guarder-Services",
    description:
      "Guarder Website offers highly trained and professional security guards to safeguard homes, businesses, and large-scale events with 24/7 availability and reliability.",
    image: Guarder,
    technologies: ["REACT JS", "MATERIAL UI", "TYPESCRIPT"],
    source: "https://github.com/rudra420-123/Guarder_Website/",
    live: "https://rudra420-123.github.io/Guarder_Website/",
  },
  {
    title: "Billing-Software",
    description:
      "Billing Software simplifies billing processes, enabling users to create, manage, and save invoices effortlessly with features like itemized billing, customer management, and automated bill generation.",
    image: Billing,
    technologies: ["HTML", "CSS", "PYTHON", "FLASK", "JINJA"],
    source: "https://github.com/rudra420-123/Billing_Software/",
    live: "https://github.com/rudra420-123/Billing_Software/",
  },
  {
    title: "Ai-Image-Enhancer",
    description:
      "AI Image Enhancer is a tool that uses artificial intelligence to automatically improve image quality by enhancing resolution, reducing noise, sharpening details, and correcting colors.",
    image: ImageEnhancer,
    technologies: ["REACT JS", "TAILWIND CSS", "AI INTEGRATION"],
    source: "https://github.com/rudra420-123/Ai_Image_Enhancer",
    live: "https://rudra420-123.github.io/Ai_Image_Enhancer/",
  },
  {
    title: "Ai-Code-Reviewer",
    description:
      "An AI Code Reviewer automatically checks code for errors, quality, security, and best practices, offering quick suggestions to improve and optimize it.",
    image: CodeReviewer,
    technologies: ["REACT JS", "TAILWIND CSS", "AI INTEGRATION"],
    source: "https://github.com/rudra420-123/Ai_Code_Reviewer",
    live: "https://rudra420-123.github.io/Ai_Code_Reviewer/",
  },
  {
    title: "Luxurious_360_Tour",
    description:
      "Luxurious_360_Tour features a virtual 360° tour of a luxury house, allowing users to click on labeled rooms and explore each one with smooth, realistic navigation.",
    image: Luxurious_360_Tour,
    technologies: ["REACT JS", "TAILWIND CSS", "SHADCN UI", "FRAMER-MOTION", "THREE JS"],
    source: "https://github.com/rudra420-123/Luxurious_360_Tour",
    live: "https://rudra420-123.github.io/Luxurious_360_Tour/",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  zIndex: 10,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  border:'1px, solid,rgb(255, 255, 255)',
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
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
            🌟My <span style={{ color: "#ebbc26" }}>Projects</span>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#ebbc26", mb: 4 }}
          >
            "Explore a selection of projects I've worked on to showcase my
            skills and experience."
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
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
                  image={project.image}
                  title={project.title}
                  alt={project.title}
                  // component={motion.img}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
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
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="outlined"
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#ebbc26",
                        borderColor: "#ebbc26",
                        fontSize: { xs: "0.7rem", md: "0.9rem" },
                        "&:hover": {
                          backgroundColor: "#ebbc26",
                          color: "#000000",
                        },
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Source Code
                    </Button>
                    <Button
                      variant="outlined"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#ebbc26",
                        borderColor: "#ebbc26",
                        fontSize: { xs: "0.7rem", md: "0.9rem" },
                        "&:hover": {
                          backgroundColor: "#ebbc26",
                          color: "#000000",
                        },
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
