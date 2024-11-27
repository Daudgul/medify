import { Box, Container } from "@mui/material";
import React from "react";
import group1 from "../assests/images/banners/group1.png";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const faqData = [
  {
    Q: "Why should I choose your hospital for treatment?",
    A: "Our hospital offers state-of-the-art medical facilities, highly skilled healthcare professionals, and a patient-centered approach to ensure the best care possible for every individual.",
  },
  {
    Q: "What makes your hospital stand out from others?",
    A: "We prioritize both physical and emotional well-being, offering personalized treatment plans, advanced technologies, and a compassionate environment to ensure comprehensive care for all our patients.",
  },
  {
    Q: "Do you offer specialized services at your hospital?",
    A: "Yes, we provide a wide range of specialized services, including cardiology, oncology, pediatrics, and orthopedics, all backed by experienced doctors and cutting-edge treatment options.",
  },
  {
    Q: "How do you ensure quality care for your patients?",
    A: "Our hospital follows strict quality standards and best practices, regularly monitors patient outcomes, and invests in continuous staff training to ensure every patient receives the highest level of care and attention.",
  },
];

function FAQ() {
  return (
    <Box sx={{ background: "#fff" }}>
      <Container sx={{ py: 2 }}>
        <p className="sub-heading">Get Your answers</p>
        <h2 style={{ padding: "20px 0" }}>Frequently Asked Questions</h2>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <img src={group1} alt="Group picture" />

          <Box>
            {faqData.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  boxShadow: "none", // Remove shadow
                  my: 3,
                  color: "#1B3C74",
                  fontSize: "18px",
                  fontWeight: 600,
                  border: "none", // Remove border
                  "&:before": {
                    display: "none", // Remove the default accordion line on top
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon
                      style={{
                        color: "#2AA7FF",
                      }}
                    />
                  }
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6">{item.Q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{item.A}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;
