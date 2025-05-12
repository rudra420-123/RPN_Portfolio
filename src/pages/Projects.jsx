import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Skipline from "../assets/Skipline.png";
import Guarder from "../assets/Guarder.png";
import Billing from "../assets/Billing.png";
import ImageEnhancer from "../assets/ImageEnhancer.png";
import CodeReviewer from "../assets/CodeReviewer.png";
import Luxurious_360_Tour from "../assets/Luxurious_360_Tour.png";
import TypingMaster from "../assets/TypingMaster.png";
import ProDevelopersTheme from "../assets/ProDevelopersTheme.png";

const projects = [
  {
    title: "Skipline-Marketplace",
    category: "Web Dev",
    description:
      "Skipline – a cutting-edge e-commerce platform delivering a seamless shopping experience.",
    image: Skipline,
    technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    source: "https://github.com/rudra420-123/Skipline_Ecommerce_Website/",
    live: "https://rudra420-123.github.io/Skipline_Ecommerce_Website/",
  },
  {
    title: "Guarder-Services",
    category: "Web Dev",
    description:
      "Guarder Website offers highly trained and professional security guards to safeguard homes and businesses.",
    image: Guarder,
    technologies: ["REACT JS", "MATERIAL UI", "TYPESCRIPT"],
    source: "https://github.com/rudra420-123/Guarder_Website/",
    live: "https://rudra420-123.github.io/Guarder_Website/",
  },
  {
    title: "Billing-Software",
    category: "Web Dev",
    description:
      "Billing Software simplifies billing processes, enabling users to create, manage, and save invoices effortlessly.",
    image: Billing,
    technologies: ["HTML", "CSS", "PYTHON", "FLASK", "JINJA"],
    source: "https://github.com/rudra420-123/Billing_Software/",
    live: "https://github.com/rudra420-123/Billing_Software/",
  },
  {
    title: "Ai-Image-Enhancer",
    category: "AI & Tools",
    description:
      "AI Image Enhancer is a tool that uses artificial intelligence to automatically improve image quality.",
    image: ImageEnhancer,
    technologies: ["REACT JS", "TAILWIND CSS", "AI INTEGRATION"],
    source: "https://github.com/rudra420-123/Ai_Image_Enhancer",
    live: "https://rudra420-123.github.io/Ai_Image_Enhancer/",
  },
  {
    title: "Ai-Code-Reviewer",
    category: "AI & Tools",
    description:
      "An AI Code Reviewer automatically checks code for errors, quality, security, and best practices.",
    image: CodeReviewer,
    technologies: ["REACT JS", "TAILWIND CSS", "AI INTEGRATION"],
    source: "https://github.com/rudra420-123/Ai_Code_Reviewer",
    live: "https://rudra420-123.github.io/Ai_Code_Reviewer/",
  },
  {
    title: "Luxurious_360_Tour",
    category: "Web Dev",
    description:
      "Luxurious_360_Tour features a virtual 360° tour of a luxury house with smooth, realistic navigation.",
    image: Luxurious_360_Tour,
    technologies: ["REACT JS", "TAILWIND CSS", "THREE JS", "FRAMER-MOTION"],
    source: "https://github.com/rudra420-123/Luxurious_360_Tour",
    live: "https://rudra420-123.github.io/Luxurious_360_Tour/",
  },
  {
    title: "ProDevelopers Theme",
    category: "VS Code",
    description:
      "ProDevelopers Theme is a custom VS Code theme designed for modern developers with vibrant syntax highlighting.",
    image: ProDevelopersTheme,
    technologies: ["VS CODE", "JSON", "THEME DESIGN"],
    source: "https://github.com/rudra420-123/ProDevelopers_Theme",
    live: "https://marketplace.visualstudio.com/items?itemName=developershub.prodevelopers-theme&ssr=false#review-details",
  },
  {
    title: "Typing Master",
    category: "Web Dev",
    description:
      "Typing Master is a typing speed and accuracy trainer with real-time stats and a modern dark/light UI.",
    image: TypingMaster,
    technologies: ["REACT JS", "TAILWIND CSS"],
    source: "https://github.com/rudra420-123/Typing_Master",
    live: "https://rudra420-123.github.io/Typing_Master/",
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
  border: "1px solid #ebbc26",
  borderRadius: "10px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  paddingTop: "56.25%",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const TechChip = styled(Box)(() => ({
  display: "inline-block",
  padding: "2px 8px",
  margin: "0 4px 4px 0",
  borderRadius: "16px",
  backgroundColor: "#ebbc26",
  color: "#000000",
  fontSize: "0.8rem",
}));

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const [activeTab, setActiveTab] = useState(0);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setVisibleCount(6);
  };

  const getCategoryLabel = (tabIndex) => {
    switch (tabIndex) {
      case 1:
        return "Web Development";
      case 2:
        return "AI & Tools";
      case 3:
        return "VS Code Themes";
      default:
        return "";
    }
  };

  const filteredProjects =
    activeTab === 0
      ? projects
      : projects.filter(
          (project) => project.category === getCategoryLabel(activeTab)
        );

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
            🌟 My <span style={{ color: "#ebbc26" }}>Projects</span>
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

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          // variant="scrollable"
          variant="fullWidth"
          scrollButtons="auto"
          // allowScrollButtonsMobile
          sx={{
            mb: 4,
            border: "1px solid #ebbc26",
            borderRadius: "20px",
            backgroundColor: "transparent",
            overflowX: "auto",
            "& .MuiTabs-scroller": {
              overflowX: "auto !important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#ebbc26",
              height: "3px",
            },
          }}
        >
          {["All Projects", "Web Dev", "AI & Tools", "VS Code"].map(
            (label, index) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  color: "#ffffff",
                  fontSize: {
                    xs: "0.85rem",
                    sm: "1rem",
                    md: "1.1rem",
                  },
                  fontWeight: "bold",
                  px: 2,
                  "&.Mui-selected": {
                    backgroundColor: "#ebbc26",
                    color: "#000000",
                  },
                }}
              />
            )
          )}
        </Tabs>

        <Grid container spacing={4} justifyContent="center">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
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
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{ color: "#ebbc26", fontSize: "1.2rem" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, fontSize: "0.9rem" }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <TechChip key={techIndex}>{tech}</TechChip>
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      variant="outlined"
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#ebbc26",
                        borderColor: "#ebbc26",
                        fontSize: "0.8rem",
                        "&:hover": {
                          backgroundColor: "#ebbc26",
                          color: "#000000",
                        },
                      }}
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
                        fontSize: "0.8rem",
                        "&:hover": {
                          backgroundColor: "#ebbc26",
                          color: "#000000",
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {visibleCount < filteredProjects.length && (
          <Box textAlign="center" mt={6}>
            <Button
              onClick={handleViewMore}
              variant="outlined"
              sx={{
                color: "#ebbc26",
                borderColor: "#ebbc26",
                px: 4,
                py: 1,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#ebbc26",
                  color: "#000000",
                },
              }}
            >
              View More
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Projects;
