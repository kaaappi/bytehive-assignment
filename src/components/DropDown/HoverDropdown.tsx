import React from "react";
import Popper from "@mui/material/Popper";
import { Paper, Link } from "@mui/material";
import {
  usePopupState,
  bindHover,
  bindPopper,
} from "material-ui-popup-state/hooks";
import { Stack, styled } from "@mui/system";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface HoverPopperProps {
  buttonText: string;
  dropDownItems?: Array<{ href: string; hrefText: string }>;
}

const HoverDropdown: React.FC<HoverPopperProps> = ({
  buttonText,
  dropDownItems,
}) => {
  const popupState = usePopupState({
    variant: "popper",
    popupId: "demoPopper",
  });

  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        gap={"0.5px"}
        {...bindHover(popupState)}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="body1" fontWeight={"bold"}>
          {buttonText}
        </Typography>
        <KeyboardArrowDownIcon />
      </Stack>
      {dropDownItems && (
        <Popper {...bindPopper(popupState)}>
          <Paper>
            {dropDownItems.map((item, index) => (
              <ItemsContainer key={index}>
                <Link key={index} href={item.href} p={"0.5rem"}>
                  {item.hrefText}
                </Link>
              </ItemsContainer>
            ))}
          </Paper>
        </Popper>
      )}
    </div>
  );
};

const ItemsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "fit-content",
});

export default HoverDropdown;
