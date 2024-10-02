import React from "react";
import Image from "next/image";
import mainHome from "../../../../public/images/home.svg";
import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "../../../../public/images/WhatsApp.svg";
import { styled } from "@mui/system";

const RightColumnInfo = () => {
  return (
    <RightColumn>
      <HomeMatchesContainer>
        <Image src={mainHome} alt={`home`} width={170} height={137} />
        <Typography
          fontSize={"1.8rem"}
          fontFamily={"var(--font-libre)"}
          fontWeight={"800"}
          pb={"1.5rem"}
        >
          This home matches 6 of your wishes ✨
        </Typography>
      </HomeMatchesContainer>
      <WhatsappContainer>
        <Typography variant="h5" pb={"1rem"}>
          Whatsapp Ambrose
        </Typography>
        <QAContainer>
          <Image src={WhatsAppIcon} alt={`whatsapp`} />
          <Typography pl={"0.5rem"}>I’ve a question about this deal</Typography>
        </QAContainer>
        <Button variant="contained" color="secondary" size={"large"}>
          Start Chat
        </Button>
        <Typography fontSize={"small"} color={"#9499A8"} pt={"2rem"}>
          <b>Agent:</b> Ambrose Choy, Landpower Real Estate Ltd.
        </Typography>
      </WhatsappContainer>
    </RightColumn>
  );
};

const RightColumn = styled("div")({
  flex: "1 1 35%",
  boxShadow: "0px 10px 120px -30px rgba(32, 42, 68, 0.1)",
  borderRadius: "20px",
  padding: "2rem",
  "@media (max-width: 768px)": {
    flex: "1 1 100%",
  },
});

const HomeMatchesContainer = styled("div")({
  marginBottom: "20px",
  borderBottom: "1.8px solid #E9EBEF",
});

const WhatsappContainer = styled("div")({
  paddingTop: "1rem",
});

const QAContainer = styled("div")({
  display: "flex",
  backgroundColor: "#F5F6F9",
  padding: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  marginBottom: "1rem",
});

export default RightColumnInfo;
