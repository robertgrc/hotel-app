import * as React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ContactCheckbox() {
  const [state, setState] = React.useState({
    SWB: true,
    MAT: false,
    DWB: false,
    TWB: false,
    Suite: false,
    Simple: false,
    Doble: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { SWB, MAT, DWB, TWB, Suite, Simple, Doble } = state;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <FormLabel component="legend">Tipo de Habitación</FormLabel> */}

      <div className="label-form">Tipo de Habitacion</div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={SWB}
              onChange={handleChange}
              name="SWB"
              sx={{
                color: "secondary",
                "&.Mui-checked": {
                  color: "secondary",
                },
              }}
            />
          }
          label="SWB"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={MAT}
              onChange={handleChange}
              name="MAT"
              sx={{ color: "white" }}
            />
          }
          label="MAT"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={DWB}
              onChange={handleChange}
              name="DWB"
              sx={{ color: "white" }}
            />
          }
          label="DWB"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={TWB}
              onChange={handleChange}
              name="TWB"
              sx={{ color: "white" }}
            />
          }
          label="TWB"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Suite}
              onChange={handleChange}
              name="Suite"
              sx={{ color: "white" }}
            />
          }
          label="Suite"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Simple}
              onChange={handleChange}
              name="Simple"
              sx={{ color: "white" }}
            />
          }
          label="Simple"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Doble}
              onChange={handleChange}
              name="Doble"
              sx={{ color: "white" }}
            />
          }
          label="Doble"
        />
      </FormGroup>
    </Box>
  );
}
