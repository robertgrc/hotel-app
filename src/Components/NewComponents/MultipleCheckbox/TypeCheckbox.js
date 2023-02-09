import React from "react";

const TypeCheckbox = ({ state, handleChange }) => {
  return (
    <div>
      <input
        checked={state}
        className="MultipleCheckBox"
        type="checkbox"
        name="SWB"
        onChange={handleChange}
      />
    </div>
  );
};

export default TypeCheckbox;
