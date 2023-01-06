import React from "react";
import { Button, styled, Stack } from "@mui/material";
import { Person } from "@mui/icons-material";
import { AccessAlarm } from "@mui/icons-material";
import { yellow, pink } from "@mui/material/colors";
import { purpleTheme } from "../theme/purpleTheme";
import Navbar from "./Navbar";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  //backgroundColor: "red",
  backgroundColor: purpleTheme.palette.secondary.main,
  borderColor: "#0063cc",
  color: "yellow",
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[900],
  },
}));

const Componente1 = () => {
  //const classes = useStyles();
  return (
    <div>
      <Navbar />

      <h1>Componentes</h1>

      <Button
        variant="contained"
        size="large"
        color="primary"
        // style={{ backgroundColor: "red", color: "white" }}
        startIcon={<Person />}
      >
        Contained
      </Button>
      <Button variant="contained" color="primary" startIcon={<AccessAlarm />}>
        alarma
      </Button>

      <Stack spacing={2} direction="row">
        <ColorButton variant="contained">Custom CSS</ColorButton>
        <BootstrapButton variant="contained" disableRipple>
          Nuevo Boton
        </BootstrapButton>
      </Stack>
    </div>
  );
};

export default Componente1;
