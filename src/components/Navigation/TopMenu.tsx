import React, { FC } from "react";
import { styled } from "@mui/system";
import SignInPopup from "@/components/Popups/SignInPopup";
import NextImage from "next/image";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface TopMenuProps {
  logo: string;
  children?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onBurgerToggle?: () => void;
}

const TopMenu: FC<TopMenuProps> = ({
  logo,
  children,
  endAdornment,
  onBurgerToggle,
}) => {
  return (
    <TopMenuContainer>
      <LogoContainer>
        <Image priority src={logo} alt="Follow us on Twitter" />
      </LogoContainer>
      <NavActions>{children}</NavActions>
      <EndAdornmentContainer>{endAdornment}</EndAdornmentContainer>
      <StyledIconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={onBurgerToggle}
      >
        <MenuIcon />
      </StyledIconButton>
      <SignInPopup />
    </TopMenuContainer>
  );
};

const TopMenuContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 2rem",
  height: "64px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 20px rgba(32, 42, 68, 0.1)",
  width: "100%",
  "@media(max-width: 400px)": {
    padding: "0 1rem",
  },
});

const StyledIconButton = styled(IconButton)(() => ({
  display: "none",
  "@media(max-width: 1030px)": {
    display: "block",
  },
}));

const LogoContainer = styled("div")({
  flexBasis: "20%",
  maxWidth: "150px",
});
const Image = styled(NextImage)({
  "@media(max-width: 400px)": {
    width: "200%",
    height: "200%",
  },
});

const NavActions = styled("div")({
  display: "flex",
  gap: "5%",
  justifyContent: "center",
  flexBasis: "60%",
  paddingLeft: "10%",
  "@media(max-width: 1030px)": {
    display: "none",
  },
});

const EndAdornmentContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  flexBasis: "20%",
  "@media(max-width: 1030px)": {
    display: "none",
  },
});

export default TopMenu;
