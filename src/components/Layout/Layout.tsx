import React, { ReactNode, useState } from "react";
import TopMenu from "@/components/Navigation/TopMenu";
import { IconButton, Typography } from "@mui/material";
import ActionButtons from "@/components/Buttons/ActionButtons";
import NavigationActions from "@/components/Navigation/NavigationActions";
import mainLogo from "../../../public/images/logo.svg";
import {
  ActionButtonProps,
  NavActionProps,
} from "../../../types/navigationTypes";
import { useRouter } from "next/router";
import { updatePopup } from "../../../redux/actions/popupActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers/rootReducer";
import { updateIsAuthorized } from "../../../redux/actions/authActions";
import { styled } from "@mui/system";
import StyledDrawer from "@/components/Drawer/RightDrawer";
interface LayoutProps {
  children: ReactNode;
}

const navButtons: NavActionProps[] = [
  { text: "Buy & Invest", href: "" },
  { text: "Discover Homes", href: "" },
  {
    text: "Learn",
    dropDown: [{ href: "/", hrefText: "Learn 1" }],
  },
  {
    text: "Company",
    dropDown: [
      { href: "/", hrefText: "Company 1" },
      { href: "/", hrefText: "Company 2" },
      { href: "/", hrefText: "Company 3" },
    ],
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isAuthorized = useSelector(
    (state: RootState) => state.auth.isAuthorized,
  );
  const username = useSelector((state: RootState) => state.auth.username);
  const dispatch = useDispatch();

  const router = useRouter();

  const authButtons: ActionButtonProps[] = [
    {
      title: "Log in",
      onClick: () => {
        dispatch(updatePopup({ status: true }));
      },
      variant: "text",
    },
    {
      title: "Registration",
      onClick: () => {
        router.push("/");
      },
      variant: "contained",
    },
  ];

  const logOut: ActionButtonProps[] = [
    {
      title: "Log out",
      onClick: () => {
        dispatch(updateIsAuthorized({ isAuthorized: false }));
      },
      variant: "text",
    },
  ];

  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div>
      <TopMenu
        logo={mainLogo}
        endAdornment={
          isAuthorized ? (
            <EndAdornmentContainer>
              <Typography pr={"10px"}>Welcome, {username || ""}</Typography>
              <ActionButtons buttonsArray={logOut} />
            </EndAdornmentContainer>
          ) : (
            <ActionButtons buttonsArray={authButtons} />
          )
        }
        onBurgerToggle={toggleBurger}
      >
        <NavigationActions buttons={navButtons} />
      </TopMenu>
      <StyledDrawer
        isOpen={burgerOpen}
        onClose={toggleBurger}
        navButtons={navButtons}
        authButtons={isAuthorized ? [] : authButtons}
        logOutButtons={isAuthorized ? logOut : []}
      />
      <main>{children}</main>
    </div>
  );
};

const EndAdornmentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export default Layout;
