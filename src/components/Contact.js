import React from "react";
import {
  Grid,
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";

function Contact() {
  return (
    <Box sx={{ height: "90vh", mt: 10 }}>
      <Container>
        <Grid container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                sx={{ border: "1px solid grey", color: "white" }}
                label="First Name"
                
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                sx={{ border: "1px solid grey", color: "white" }}
                label="Last Name"
              />
            </Grid>
          </Grid>
          <Grid xs={12} sx={{ my: 3 }}>
            <TextField
              fullWidth
              sx={{ border: "1px solid grey", color: "white" }}
              label="Your Email"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              sx={{
                border: "1px solid grey",
                color: "white",
                height: "200px",
              }}
              label="Your Message"
            />
          </Grid>
          <Grid xs={12}>
            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: "#0CBBA0", width: "100%", mt: 3 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
