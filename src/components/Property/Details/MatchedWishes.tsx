import React, { useState } from "react";
import { styled } from "@mui/system";
import { Typography, IconButton, Chip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const chipMocks = [
  { text: "Beach", color: "#F1AE0F" },
  { text: "Ravine / Woods", color: "#F1AE0F" },
  { text: "Park", color: "#F1AE0F" },
  { text: "Subway Station", color: "#9499A8" },
  { text: "Bus Station", color: "#9499A8" },
  { text: "Groceries", color: "#9499A8" },
];

const MatchedWishes: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Header>
        <Typography variant="h4" pt={"1rem"}>
          Matched Wishes
        </Typography>
        <IconButton onClick={handleToggle}>
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Header>
      {isExpanded && (
        <LabelsContainer>
          <Section>
            <Typography variant="subtitle1">Parkings</Typography>
            <LabelsRow>
              <StyledChip
                label="1+ Garage Parking"
                sx={{ backgroundColor: "#F1AE0F" }}
              />
            </LabelsRow>
          </Section>
          <Section>
            <Typography variant="subtitle1">Exposure</Typography>
            <LabelsRow>
              <StyledChip label="East" sx={{ backgroundColor: "#F1AE0F" }} />
              <StyledChip label="West" sx={{ backgroundColor: "#F1AE0F" }} />
            </LabelsRow>
          </Section>
          <Section>
            <Typography variant="subtitle1">&lt; 20 mins Walk to</Typography>
            <LabelsRow>
              {chipMocks.map((item, index) => (
                <StyledChip
                  label={item.text}
                  sx={{ backgroundColor: item.color }}
                  key={index}
                />
              ))}
            </LabelsRow>
          </Section>
        </LabelsContainer>
      )}
    </Container>
  );
};

export default MatchedWishes;

const Container = styled("div")({
  marginTop: "20px",
  borderTop: "2px solid #E9EBEF",
});

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledChip = styled(Chip)({
  borderRadius: "5px",
  fontWeight: "bold",
  color: "#fff",
});

const LabelsContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  alignItems: "flex-start",
  marginTop: "1rem",
});

const Section = styled("div")({
  marginBottom: "1rem",
});

const LabelsRow = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});
