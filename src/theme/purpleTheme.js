import { createTheme } from "@mui/material";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#56ca00",
    },
    secondary: {
      main: "#9155fd",
    },
    error: {
      main: "#ffb400",
    },
  },
  status: {
    danger: "orange",
  },
});
