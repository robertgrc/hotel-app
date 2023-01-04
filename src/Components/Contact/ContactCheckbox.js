import * as React from "react";
import Box from "@mui/material/Box";
//import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
//import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

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

  console.log(SWB, MAT, DWB, TWB, Suite, Simple, Doble);
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <FormLabel component="legend">Tipo de Habitación</FormLabel> */}
      <div className="label-form">Tipo de Habitacion</div>
      <FormControl
        sx={{ ml: 7, mr: 7 }}
        component="fieldset"
        variant="standard"
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={SWB}
                onChange={handleChange}
                name="SWB"
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "primary",
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
        </FormGroup>

        {/* <FormHelperText>
          Seleccione el tipo de habitacion que desea (Campo obligatorio)
        </FormHelperText> */}
      </FormControl>
      <FormControl sx={{}} component="fieldset" variant="standard">
        <FormGroup>
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
      </FormControl>
    </Box>
  );
}
