import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description:
      "Crafting visually appealing and user-friendly web designs to enhance online presence.",
  },
  {
    title: "Freelancing",
    description:
      "Offering freelance services for diverse projects, ensuring quality and timely delivery.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces with a focus on user experience.",
  },
  {
    title: "Web Development",
    description:
      "Developing robust and responsive websites with the latest web technologies.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving website visibility and ranking with effective SEO strategies.",
  },
  {
    title: "Content Creation",
    description:
      "Delivering compelling and optimized content tailored for digital platforms.",
  },
];

const Service = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "black", py: 6, px: 2 }}>
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
            🤖 My <span style={{ color: "#ebbc26" }}>Services</span>
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

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#000",
                  color: "#ebbc26",
                  border: "1px solid #ebbc26",
                  borderRadius: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign:'center' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{textAlign:'center', color: "#fff"}}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Service;
