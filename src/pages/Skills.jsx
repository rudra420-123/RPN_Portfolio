import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";

// Define the skills data
const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎭" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "TailwindCSS", icon: "💨" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "MaterialUI", icon: "🎨" },
  // { name: 'Redux', icon: '🔄' },
  { name: "NodeJS", icon: "🟢" },
  { name: "ExpressJS", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "SQL", icon: "🗄️" },
  { name: "MySQL", icon: "🐬" },
  { name: "PL/SQL", icon: "📂" },
  // { name: 'AWS', icon: '☁️' },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "NumPy", icon: "🔢" },
  { name: "Pandas", icon: "🐼" },
  { name: "Django", icon: "🌱" },
  { name: "Flask", icon: "🍶" },
  { name: "DSA", icon: "🧮" },
  // { name: 'Scikit-learn', icon: '📊' },
  { name: "C", icon: "📟" },
  { name: "C++", icon: "➕" },
  { name: "PHP", icon: "🐘" },
  // { name: 'Kubernets', icon: '🕸️' },
  // { name: 'Postman', icon: '📮' },
  { name: "Figma", icon: "🖌️" },
  { name: "Canva", icon: "🖍️" },
  { name: "Docker", icon: "🐳" },
  { name: "GitHub", icon: "🐙" },
  { name: "Heroku", icon: "🚀" },
  { name: "Vercel", icon: "▲" },
];

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#ffffff",
  background: "#1a1a1a",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export default function Skills() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "black", py: 8, px: 2 }}>
        <Typography
          align="center"
          sx={{
            color: "#ebbc26",
            mb: 4,
            fontSize: { xs: "2rem", md: "3.7rem" },
          }}
        >
          Skills <span style={{ color: "#ffffff" }}>&</span>{" "}
          <span style={{ color: "#FFFF00" }}>Expertises</span>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={skill.name}>
              <SkillCard elevation={3}>
                <Typography
                  variant="h1"
                  component="div"
                  sx={{ fontSize: "3rem", mb: 1 }}
                >
                  {skill.icon}
                </Typography>
                <Typography variant="subtitle1">{skill.name}</Typography>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
