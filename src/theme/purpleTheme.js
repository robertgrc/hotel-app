import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#312d4b",
    },
    secondary: {
      main: "#56ca00",
      light: "#0066ff",
    },
    error: {
      main: "#9155fd",
    },
  },
  status: {
    danger: "#f5f5f5",
  },
  custom: {
    light: "#ffa726",
    main: "#f57c00",
    dark: "#ef6c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  neutral: {
    main: "orange",
    contrastText: "#fff",
  },
});
