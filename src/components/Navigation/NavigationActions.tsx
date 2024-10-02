import React, { FC } from "react";
import { styled } from "@mui/system";
import HoverDropdown from "@/components/DropDown/HoverDropdown";
import { Link } from "@mui/material";
import { NavActionProps } from "../../../types/navigationTypes";

const NavigationActions: FC<{ buttons: NavActionProps[] }> = ({ buttons }) => {
  return (
    <ButtonActionContainer>
      {buttons.map((button, index) => (
        <div key={index}>
          {button.dropDown ? (
            <HoverDropdown
              buttonText={button.text}
              dropDownItems={button.dropDown}
            />
          ) : (
            <Link href={button.href} color="#202A44">
              {button.text}
            </Link>
          )}
        </div>
      ))}
    </ButtonActionContainer>
  );
};

const ButtonActionContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "40px",
});

export default NavigationActions;
