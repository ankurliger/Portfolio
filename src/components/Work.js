import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";

function Work() {
  const education = [
    {
      title: "10TH",
      date: "2015-2017",
      description:
        "I completed my 10th from Shivam International School, Bihar in CBSE Board and scored 9.4 CGPA.",
    },
    {
      title: "12TH",
      date: "2017-2020",
      description:
        "I completed my 12th from S.R.P. College, Bihar in BSEB Board and Scored 77.6%.",
    },
    {
      title: "B.TECH.",
      date: "2020-2024",
      description:
        "I am pursuing Btech in Computer Science And Engineering from Lovely Professional University, Punjab.",
    },
  ];
  const workExp = [
    {
      title: "MICROSOFT LEARN STUDENT AMBASSADOR",
      date: "17/12/22 - 18/12/22",
      responsibility: ["Hackathon", "Participation in making Project"],
    },
    {
      title: "Student Of The Year Certificate",
      date: "2015-2017",
      responsibility: ["Best in Everthing like Study, Sports and many Extra-Curricular Activities"],
    },
    {
      title: "DSA Self-placed Course Completion Certificate",
      date: "2/6/22-26/7/22",
      responsibility: ["Completed Course with GeeksforGeeks"],
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                <u>Education</u>
              </Typography>
              {education.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
               <u> Certificate</u>
              </Typography>
              {workExp.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      <ul style={{ padding: "0 18px" }}>
                        {item.responsibility.map((list) => {
                          return <li>{list}</li>;
                        })}
                      </ul>
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Work;
