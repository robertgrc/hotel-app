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

import { green, yellow } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: green }} />
      <DashboardIcon sx={{ color: yellow }} />
      <PeopleIcon sx={{ color: "#f3e5f5" }} />
    </Box>
  );
}

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon sx={{ color: " #f3e5f5" }} />
        {/* <HomeIcon color="primary" /> */}
      </ListItemIcon>
      <ListItemText primary="Panel de Control" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Reservas" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DescriptionIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Pages" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Reportes Guardados
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Ultimas Reservas" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Lista reservas" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon sx={{ color: " #f3e5f5" }} />
      </ListItemIcon>
      <ListItemText primary="Usuarios Registrados" />
    </ListItemButton>
  </React.Fragment>
);
