import { useState } from "react";
import { TypeOfRoomData } from "./TypeOfRoomData";

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(TypeOfRoomData.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  console.log(checkedState);

  return (
    <div className="CheckboxContainer">
      <h3 className="titleCheckbox">Selecciona Tipo de Habitación</h3>

      {TypeOfRoomData.map(({ name }, index) => {
        return (
          <div key={index}>
            <div className="Checkboxes">
              <div className="MultipleCheckBox">
                <label className="labelCheckbox">{name}</label>
                <input
                  className="inputCheckbox"
                  type="checkbox"
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
