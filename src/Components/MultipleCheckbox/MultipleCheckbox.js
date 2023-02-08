import React, { useState } from "react";

const MultipleCheckbox = () => {
  const [SWB, setSWB] = useState(true);
  const [MAT, setMAT] = useState(true);
  const [DWB, setDWB] = useState(true);
  const [TWB, setTWB] = useState(true);
  const [SUITE, setSUITE] = useState(true);
  const [SIMPLE, setSIMPLE] = useState(true);
  const [DOBLE, setDOBLE] = useState(true);

  const handleChange = (data) => {
    if (data === "SWB") {
      if (SWB === true) {
        console.log(data, "our value");
      }
      setSWB(!SWB);
    }
    if (data === "MAT") {
      if (MAT === true) {
        console.log(data, "our value");
      }
      setMAT(!MAT);
    }
    if (data === "DWB") {
      if (DWB === true) {
        console.log(data, "our value");
      }
      setDWB(!DWB);
    }
    if (data === "TWB") {
      if (TWB === true) {
        console.log(data, "our value");
      }
      setTWB(!TWB);
    }
    if (data === "SUITE") {
      if (SUITE === true) {
        console.log(data, "our value");
      }
      setSUITE(!SUITE);
    }
    if (data === "SIMPLE") {
      if (SIMPLE === true) {
        console.log(data, "our value");
      }
      setSIMPLE(!SIMPLE);
    }
    if (data === "DOBLE") {
      if (DOBLE === true) {
        console.log(data, "our value");
      }
      setDOBLE(!DOBLE);
    }
  };

  return (
    <div className="CheckboxContainer">
      <div>
        <h3 className="titleCheckbox">Tipo de Habitación</h3>
      </div>
      <div className="Checkboxes">
        <div className="MultipleCheckBox">
          <h5>SWB</h5>
          <input
            className="inputCheckbox"
            type="checkbox"
            value={SWB}
            onChange={() => handleChange("SWB")}
          />
          <h5>MAT</h5>
          <input
            className="inputCheckbox"
            type="checkbox"
            value={MAT}
            onChange={() => handleChange("MAT")}
          />
          <h5>DWB</h5>
          <input
            className="inputCheckbox"
            type="checkbox"
            value={DWB}
            onChange={() => handleChange("DWB")}
          />
          <h5>TWB</h5>
          <input
            className="inputCheckbox"
            type="checkbox"
            value={TWB}
            onChange={() => handleChange("TWB")}
          />
          <h5>SUITE</h5>
          <input
            className="inputCheckbox"
            type="checkbox"
            value={SUITE}
            onChange={() => handleChange("SUITE")}
          />
          <h5>SIMPLE</h5>
          <input
            className="inputCheckbox"
            type="checkbox"
            value={SIMPLE}
            onChange={() => handleChange("SIMPLE")}
          />
          <h5>DOBLE</h5>
          <input
            className="inputCheckbox"
            type="checkbox"
            value={DOBLE}
            onChange={() => handleChange("DOBLE")}
          />
        </div>
      </div>
    </div>
  );
};

export default MultipleCheckbox;
