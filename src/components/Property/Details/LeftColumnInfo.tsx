import React from "react";
import { Button, Chip, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MatchedWishes from "@/components/Property/Details/MatchedWishes";
import { styled } from "@mui/system";
import bedSVG from "../../../../public/images/details/bed.svg";
import showerSVG from "../../../../public/images/details/shower.svg";
import kitchenSVG from "../../../../public/images/details/kitchen.svg";
import autoSVG from "../../../../public/images/details/auto.svg";
import sizeSVG from "../../../../public/images/details/size.svg";
import buildingSVG from "../../../../public/images/details/building.svg";
import Image from "next/image";

const PropertyDetailsMock = [
  { image: { src: bedSVG, alt: "bed" }, text: "4" },
  { image: { src: showerSVG, alt: "shower" }, text: "3+1" },
  { image: { src: kitchenSVG, alt: "kitchen" }, text: "1" },
  { image: { src: autoSVG, alt: "auto" }, text: "2" },
  { image: { src: sizeSVG, alt: "size" }, text: "19.98 x 100.4 ft" },
  { image: { src: sizeSVG, alt: "size" }, text: "2500-3500 sqft" },
  { image: { src: buildingSVG, alt: "building" }, text: "Semi-Detached" },
];

const LeftColumnInfo = () => {
  return (
    <LeftColumn>
      <TopInfoContainer>
        <StatusContainer>
          <HomeInfo>
            <Chip
              icon={<FiberManualRecordIcon style={{ fontSize: "10px" }} />}
              label="On Market"
              color={"secondary"}
            />
            <Typography pl={"1rem"} color={"grey"} variant="body1">
              Listed 5 days ago
            </Typography>
          </HomeInfo>
          <Typography variant="body2" color={"grey"}>
            MLS: N5866678
          </Typography>
        </StatusContainer>
        <PriceLocContainer>
          <Typography variant="h4">York, Oak Ridges Lake Wilcox</Typography>
          <Typography variant="h4">$1,688,000</Typography>
        </PriceLocContainer>
        <Typography variant="body1" fontWeight={"600"} pb={"1rem"}>
          Near Yonge/Stouffville Rd, 22 Sunset Beach Rd
        </Typography>
        <PropertyDetailsContainer>
          {PropertyDetailsMock.map((detail, index) => (
            <PropertyDetailItem key={index}>
              <Image src={detail.image.src} alt={detail.image.alt} />
              <Typography pl={"0.5rem"} fontWeight={"bold"}>
                {detail.text}
              </Typography>
            </PropertyDetailItem>
          ))}
        </PropertyDetailsContainer>
        <Button variant="contained" color="primary" size={"large"}>
          Take Virtual Tour
        </Button>
      </TopInfoContainer>
      <MatchedWishes />
    </LeftColumn>
  );
};

const LeftColumn = styled("div")({
  flex: "1 1 65%",
  "@media (max-width: 768px)": {
    flex: "1 1 100%",
  },
});
const TopInfoContainer = styled("div")({
  marginBottom: "20px",
});

const StatusContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
});

const HomeInfo = styled("div")({
  display: "flex",
  alignItems: "center",
});

const PriceLocContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 375px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const PropertyDetailsContainer = styled("div")({
  display: "flex",
  marginBottom: "2rem",
  flexWrap: "wrap",
  gap: "1rem",
  "@media (min-width: 768px)": {
    justifyContent: "space-between",
  },
});

const PropertyDetailItem = styled("div")({
  display: "flex",
  alignItems: "center",
});

export default LeftColumnInfo;
