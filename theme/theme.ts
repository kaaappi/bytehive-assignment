import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-lato)",
    fontWeightRegular: "400",
    h4: {
      fontFamily: "var(--font-libre)",
      fontWeight: 800,
    },
    h5: {
      fontFamily: "var(--font-libre)",
      fontWeight: 800,
    },

    subtitle1: {
      fontFamily: "var(--font-lato)",
      fontWeight: 800,
    },
  },

  palette: {
    primary: {
      main: "#F1AE0F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#54CC61",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "@media (max-width: 430px)": {
            fontSize: "14px",
            padding: "8px 16px",
          },
          fontWeight: "700",
          fontFamily: "var(--font-lato)",
          fontSize: "16px",
          borderRadius: "50px",
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          variants: [
            {
              props: { variant: "text" },
              style: {
                "&:hover": {
                  color: "#F1AE0F",
                },
              },
            },
          ],
        },
        text: {
          color: "#202A44",
          fontFamily: "var(--font-lato)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-lato)",
          fontWeight: "700",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

export default theme;
