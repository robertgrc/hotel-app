import React, { useState } from "react";
import TypeCheckbox from "./TypeCheckbox";

const MultipleCheckbox = () => {
  const [state, setState] = useState({
    SWB: true,
    MAT: false,
    DWB: false,
    TWB: false,
    SUITE: false,
    SIMPLE: false,
    DOBLE: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  console.log(state);

  const { SWB, MAT, DWB, TWB, SUITE, SIMPLE, DOBLE } = state;

  return (
    <div className="CheckboxContainer">
      <div>
        <h3 className="titleCheckbox">Tipo de Habitación</h3>
      </div>
      <div>
        <TypeCheckbox checked={state} handleChange={handleChange} />
      </div>
      <div className="Checkboxes">
        <div className="MultipleCheckBox">
          <h5>SWB</h5>
          <input
            checked={SWB}
            className="inputCheckbox"
            type="checkbox"
            value={SWB}
            name="SWB"
            // onChange={() => handleChange("SWB")}
            onChange={handleChange}
          />
          <h5>MAT</h5>
          <input
            checked={MAT}
            className="inputCheckbox"
            type="checkbox"
            value={MAT}
            name="MAT"
            // onChange={() => handleChange("MAT")}
            onChange={handleChange}
          />
          <h5>DWB</h5>
          <input
            checked={DWB}
            className="inputCheckbox"
            type="checkbox"
            value={DWB}
            name="DWB"
            // onChange={() => handleChange("DWB")}
            onChange={handleChange}
          />
          <h5>TWB</h5>
          <input
            checked={TWB}
            className="inputCheckbox"
            type="checkbox"
            value={TWB}
            name="TWB"
            // onChange={() => handleChange("TWB")}
            onChange={handleChange}
          />
          <h5>SUITE</h5>
          <input
            checked={SUITE}
            className="inputCheckbox"
            type="checkbox"
            value={SUITE}
            name="SUITE"
            // onChange={() => handleChange("SUITE")}
            onChange={handleChange}
          />
          <h5>SIMPLE</h5>
          <input
            checked={SIMPLE}
            className="inputCheckbox"
            type="checkbox"
            value={SIMPLE}
            name="SIMPLE"
            // onChange={() => handleChange("SIMPLE")}
            onChange={handleChange}
          />
          <h5>DOBLE</h5>
          <input
            checked={DOBLE}
            className="inputCheckbox"
            type="checkbox"
            value={DOBLE}
            name="DOBLE"
            // onChange={() => handleChange("DOBLE")}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MultipleCheckbox;
