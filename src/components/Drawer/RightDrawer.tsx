import React, { FC } from "react";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
  ListItemButton,
  Collapse,
  Link,
} from "@mui/material";
import {
  ActionButtonProps,
  NavActionProps,
} from "../../../types/navigationTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers/rootReducer";
import CloseIcon from "@mui/icons-material/Close";
import ActionButtons from "@/components/Buttons/ActionButtons";
import { styled } from "@mui/system";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navButtons: NavActionProps[];
  authButtons: ActionButtonProps[];
  logOutButtons: ActionButtonProps[];
}

const RightDrawer: FC<DrawerProps> = ({
  onClose,
  navButtons,
  isOpen,
  logOutButtons,
  authButtons,
}) => {
  const isAuthorized = useSelector(
    (state: RootState) => state.auth.isAuthorized,
  );
  const username = useSelector((state: RootState) => state.auth.username);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const handleClick = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div>
      <StyledDrawer anchor="right" open={isOpen} onClose={onClose}>
        <List>
          <ListItem sx={{ height: "35px", marginTop: "-0.5rem" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={onClose}
            >
              <CloseIcon style={{ width: "20px" }} />
            </IconButton>
          </ListItem>
          <Divider />

          {!isAuthorized && (
            <AuthButtonsContainer>
              {authButtons.map((button, index) => (
                <ActionButtons key={index} buttonsArray={[button]} />
              ))}
            </AuthButtonsContainer>
          )}
          {isAuthorized && (
            <>
              <ListItem>
                <ListItemText
                  primary={`Welcome, ${username || ""}`}
                  primaryTypographyProps={{ fontSize: "0.9rem" }}
                />
              </ListItem>
              <ListItem
                sx={{ height: "35px", display: "flex", marginTop: "-0.5rem" }}
              >
                <ActionButtons buttonsArray={logOutButtons} />
              </ListItem>
            </>
          )}

          <Divider />
          {navButtons.map((button) => (
            <div key={button.text}>
              {button.dropDown ? (
                <ListItemButton onClick={() => handleClick(button.text)}>
                  <ListItemText primary={button.text} />
                  {openDropdown === button.text ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
              ) : (
                <Link
                  href={button.href}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton>
                    <ListItemText primary={button.text} />
                  </ListItemButton>
                </Link>
              )}
              {button.dropDown && (
                <Collapse
                  in={openDropdown === button.text}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {button.dropDown.map((item) => (
                      <Link href={item.href} key={item.hrefText}>
                        <ListItemButton>
                          <ListItemText
                            sx={{ paddingLeft: "15px" }}
                            primary={item.hrefText}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </StyledDrawer>
    </div>
  );
};

const StyledDrawer = styled(Drawer)(() => ({
  display: "none",
  "@media(max-width: 1030px)": {
    display: "block",
  },
  "@media (max-width: 1030px)": {
    display: "block",
    "& .MuiDrawer-paper": {
      width: "100vw",
      maxWidth: "400px",
    },
  },
  "@media (max-width: 768px)": {
    "& .MuiDrawer-paper": {
      maxWidth: "300px",
    },
  },
  "@media (max-width: 480px)": {
    "& .MuiDrawer-paper": {
      maxWidth: "200px",
    },
  },
}));

const AuthButtonsContainer = styled("div")({
  display: "flex",
  gap: "10px",
  marginBottom: "1rem",
  marginTop: "1rem",
});

export default RightDrawer;
