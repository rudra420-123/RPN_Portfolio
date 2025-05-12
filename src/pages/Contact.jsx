import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Input,
  Container,
  Avatar,
} from "@mui/material";
import WhatsApp from "../assets/Whatsapp.png";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    contactFor: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, contactFor, message } = formData;
    const text = `Hi Rudra Prasad, I am ${name}
It's My Email Id: ${email}
It's My Phone No: ${phone}

Subject: ${subject}
I Want to Contact With You For: ${contactFor}

Read the Below Message Carefully!!!\n ${message}`;
    const whatsappURL = `https://wa.me/917847091537?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          px: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "#ebbc26",
              mb: 8,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            📍 Get in touch!
          </Typography>
        </motion.div>

        <Grid container spacing={6} justifyContent="center">
          {/* Scanner */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: "#000",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#ebbc26", mb: 2, textAlign: "center" }}
              >
                Scan to Contact
                <br />
                on WhatsApp
              </Typography>

              <motion.img
                src={WhatsApp}
                alt="Rudra Prasad Nayak"
                transition={{ duration: 0.3 }}
                style={{
                  width: "100%",
                  maxWidth: 350,
                  height: "auto",
                  border: "5px solid #ebbc26",
                  borderRadius: "12px",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  px: 1,
                  borderRadius: "20px",
                }}
              >
                <a
                  href="https://wa.me/917847091537"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                  }}
                >
                  Click Here to Open WhatsApp
                </a>
              </Typography>
            </Box>
          </Grid>

          {/* Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "transparent",
                padding: "0px 30px",
                borderRadius: "12px",
              }}
            >
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                variant="outlined"
                onChange={handleChange}
                value={formData.name}
                required
                sx={{
                  input: { color: "#000" },
                  label: { color: "#aaa" },
                  bgcolor: "#fff",
                  borderRadius: "10px",
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    sx={{
                      input: { color: "#000" },
                      label: { color: "#aaa" },
                      bgcolor: "#fff",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Mobile Number"
                    variant="outlined"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                    sx={{
                      input: { color: "#000" },
                      label: { color: "#aaa" },
                      bgcolor: "#fff",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="subject"
                    label="Subject"
                    variant="outlined"
                    onChange={handleChange}
                    value={formData.subject}
                    sx={{
                      input: { color: "#000" },
                      label: { color: "#aaa" },
                      bgcolor: "#fff",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    select
                    fullWidth
                    name="contactFor"
                    label="Contact For"
                    onChange={handleChange}
                    value={formData.contactFor}
                    sx={{
                      color: "#fff",
                      label: { color: "#000" },
                      bgcolor: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem value="Job Reference">Job Reference</MenuItem>
                    <MenuItem value="Support">Support</MenuItem>
                    <MenuItem value="Suggestion">Suggestion</MenuItem>
                    <MenuItem value="Complaint">Complaint</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <TextField
                multiline
                rows={8}
                fullWidth
                name="message"
                label="Enter Message Here..."
                variant="outlined"
                onChange={handleChange}
                value={formData.message}
                sx={{
                  textarea: { color: "#000" },
                  label: { color: "#aaa" },
                  bgcolor: "#fff",
                  borderRadius: "10px",
                }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#ebbc26",
                  color: "#000",
                  fontWeight: "bold",
                  p: 1,
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
