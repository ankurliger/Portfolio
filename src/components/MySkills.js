import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
function MySkills() {
  return (
    <>
      <Box sx={{ height: "90vh", display: "flex", alignItems: "center" }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
            <u>What I do </u>
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "97%",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <CrisisAlertIcon
                  sx={{ fill: "#8A6AE3", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  UI Design
                </Typography>
                <Typography variant="subtitle2">
                I use User Interface (UI) Design to create of graphics, illustrations, and use of photographic artwork and typography to enhance the display and layout of a digital product within its various device views.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "350px",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <CodeIcon
                  sx={{ fill: "#CA624D", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  Web Development
                </Typography>
                <Typography variant="subtitle2">
                  I know HTML, CSS , JavaScript, Bootstrap and React.js. It helps me to build websites like its contents, designs and many more..
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "350px",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <LaptopMacIcon
                  sx={{ fill: "#2588CE", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  App Development
                </Typography>
                <Typography variant="subtitle2">
                I know App development and used for planning, designing, creating, testing, and deploying a software application to perform various business operations.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default MySkills;
