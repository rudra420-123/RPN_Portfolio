import React from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Grid,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  GitHub,
  Mail,
  Phone,
  Public,
  Room,
  Chat,
  Coffee,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#000", color: "white" }}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Grid container spacing={4}>
          {/* Logo and Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#ebbc26"
              gutterBottom
            >
              Rudra Prasad Nayak
            </Typography>
            <Typography variant="body1" color="white">
              Passionate developer and designer of the Keep Notes platform.
              Simplifying note-taking with modern UX.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <Room fontSize="medium" />
              <Typography variant="body1" color="white">
                Chatrapur, Ganjam, Odisha, India
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <Phone fontSize="medium" />
              <Typography variant="body1" color="white">
                +91-7847091537
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <Mail fontSize="medium" />
              <Typography variant="body1" color="white">
                rudraprasadnayak728@gmail.com
              </Typography>
            </Stack>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#ebbc26"
              gutterBottom
            >
              Navigation
            </Typography>
            {[
              { text: "🏠 Home", to: "/" },
              { text: "👤 About", to: "/about" },
              { text: "📝 Projects", to: "/project" },
              { text: "📞 Contact", to: "/contact" },
            ].map((item) => (
              <Typography
                key={item.to}
                variant="body1"
                color="white"
                sx={{ my: 1 }}
              >
                <Link
                  to={item.to}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MuiLink
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { color: "#ebbc26", textDecoration: "none" },
                    }}
                  >
                    {item.text}
                  </MuiLink>
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Features */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#ebbc26"
              gutterBottom
            >
              Features
            </Typography>
            {[
              "🖥️ Show My Web Development Projects",
              "🔧 Display My Technical Expertise Skills",
              "🖼️ Share My Creative Process",
              "🌱 Share My Learning and Growth",
              "🌐 Provide Links of My Blogs",
              "👨‍💻 Highlight My Freelance Work",
              "📞 Offer Contact Info for Collaborations",
              "💬 Display Testimonials and Feedbacks",
            ].map((feature, index) => (
              <Typography
                key={index}
                variant="body2"
                color="white"
                sx={{ my: 1 }}
              >
                {feature}
              </Typography>
            ))}
          </Grid>

          {/* Support */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#ebbc26"
              gutterBottom
            >
              Support
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Coffee />}
              href="https://buymeacoffee.com/rudraprasa3"
              target="_blank"
              sx={{
                color: "white",
                borderColor: "white",
                textTransform: "none",
                "&:hover": {
                  color: "#ebbc26",
                  borderColor: "#ebbc26",
                },
                mb: 2,
              }}
            >
              Buy Me A Coffee
            </Button>
            <Typography variant="body1" color="white">
              Made with ❤️ by Rudra Prasad Nayak
            </Typography>
            <Box mt={2} display="flex">
              {[
                {
                  icon: <LinkedIn />,
                  href: "https://www.linkedin.com/in/RudraPrasadNayak728/",
                },
                { icon: <GitHub />, href: "https://github.com/rudra420-123" },
                {
                  icon: <Instagram />,
                  href: "https://www.instagram.com/dipu13562/",
                },
                {
                  icon: <Facebook />,
                  href: "https://www.facebook.com/profile.php?id=100057072414096",
                },
                {
                  icon: <Public />,
                  href: "https://rudra420-123.github.io/RPN_Portfolio/",
                },
                { icon: <WhatsApp />, href: "https://wa.me/7847091537" },
              ].map(({ icon, href }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "#ebbc26",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box textAlign="center" py={2} borderTop="1px solid white" color="white">
        © {new Date().getFullYear()} Rudra Prasad Nayak. All Rights Reserved.
      </Box>
    </Box>
  );
}
