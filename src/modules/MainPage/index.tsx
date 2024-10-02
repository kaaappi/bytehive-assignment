import React from "react";
import { styled } from "@mui/system";

import NavBreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import LeftColumnInfo from "@/components/Property/Details/LeftColumnInfo";
import RightColumnInfo from "@/components/Property/Details/RightColumnInfo";
import NextImage from "next/image";

const imageFiles = [
  "Rectangle_22.png",
  "Rectangle_23.png",
  "Rectangle_24.png",
  "Rectangle_25.png",
  "Rectangle_26.png",
  "Rectangle_27.png",
  "Rectangle_28.png",
  "Rectangle_29.png",
  "Rectangle_30.png",
  "Rectangle_31.png",
];

const RealEstatePage: React.FC = () => {
  const breadCrumbsItems = [
    { text: "Ontario", href: "/" },
    { text: "Toronto", href: "/" },
    { text: "22 Sunset Beach Rd" },
  ];

  return (
    <PageContainer>
      <NavBreadCrumbs items={breadCrumbsItems} separator={">"} />
      <GalleryWrapper>
        <GalleryContainer>
          {imageFiles.map((image, index) => (
            <Image
              src={`/images/house/${image}`}
              alt={`House image ${index + 1}`}
              width={220}
              height={220}
              key={index}
            />
          ))}
        </GalleryContainer>
      </GalleryWrapper>
      <MainContentContainer>
        <LeftColumnInfo />
        <RightColumnInfo />
      </MainContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled("div")({
  maxWidth: "1170px",
  margin: "0 auto",
  padding: "0 20px",
});

const Image = styled(NextImage)({
  width: "100%",
  height: "100%",
});

const GalleryWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const GalleryContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "0.4rem",
  borderRadius: "20px",
  width: "fit-content",
  overflow: "hidden",
  paddingBottom: "20px",
});

const MainContentContainer = styled("div")({
  display: "flex",
  gap: "30px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "20px",
  },
});

export default RealEstatePage;
