import React, { FC } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { ActionButtonProps } from "../../../types/navigationTypes";

const ActionButtons: FC<{ buttonsArray: ActionButtonProps[] }> = ({
  buttonsArray,
}) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {buttonsArray.map((button, index) => (
        <Button
          onClick={button.onClick}
          variant={button.variant}
          color="primary"
          key={index}
        >
          {button.title}
        </Button>
      ))}
    </Box>
  );
};

export default ActionButtons;
