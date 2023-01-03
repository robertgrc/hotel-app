import * as React from "react";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";

export default function RowRadioButtonsGroup() {
  const [selectedValue, setSelectedValue] = React.useState("si");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div>
        <Typography>Tiene Equipaje? </Typography>
      </div>
      <div>
        <Radio
          checked={selectedValue === "si"}
          onChange={handleChange}
          value="si"
          name="radio-buttons"
          inputProps={{ "aria-label": "Si" }}
        />
        <Radio
          checked={selectedValue === "no"}
          onChange={handleChange}
          value="no"
          name="radio-buttons"
          inputProps={{ "aria-label": "No" }}
        />
      </div>
    </div>
  );
}

//RowRadioButtonsGroup
