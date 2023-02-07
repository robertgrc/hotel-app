import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DescriptionIcon from "@mui/icons-material/Description";
import AcordionButton from "./AcordionButton/AcordionButton";

const handleReservaClick = () => {
  console.log("click button reserva");
};

export const mainListItems = (
  <React.Fragment>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
    >
      <ListItemIcon>
        <DashboardIcon sx={{ color: " #f3e5f5" }} />
        {/* <HomeIcon color="primary" /> */}
      </ListItemIcon>
      <ListItemText primary="Panel de Control" />
    </ListItemButton>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
      onClick={handleReservaClick}
    >
      <ListItemIcon>
        <ShoppingCartIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Reservas" />
    </ListItemButton>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
    >
      <ListItemIcon>
        <PeopleIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItemButton>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
    >
      <ListItemIcon>
        <BarChartIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItemButton>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
    >
      <ListItemIcon>
        <DescriptionIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Pages" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader
      component="div"
      inset
      sx={{
        color: "rgba(231, 227, 252, 0.38)",
        backgroundColor: "#28243d",
        fontFamily: "Inter, sans-serif, apple-system, BlinkMacSystemFont",
      }}
    >
      Reportes Guardados
    </ListSubheader>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
    >
      <ListItemIcon>
        <AssignmentIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Ultimas Reservas" />
    </ListItemButton>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
    >
      <ListItemIcon>
        <AssignmentIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Lista reservas" />
    </ListItemButton>
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "#312d4b",
          transition: "0.25s ease-in-out 0s",
        },
      }}
    >
      <ListItemIcon>
        <AssignmentIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Usuarios Registrados" />
    </ListItemButton>

    {/* <AcordionButton>
      <ListItemText />
    </AcordionButton> */}
  </React.Fragment>
);
