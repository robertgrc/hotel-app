import { useState } from "react";
import TypeCheckbox from "./TypeCheckbox";
import { TypeOfRoomData } from "./TypeOfRoomData";

export default function App() {
  const [typeRoomChecked, setTypeRoomChecked] = useState(
    new Array(TypeOfRoomData.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = typeRoomChecked.map((item, index) =>
      index === position ? !item : item
    );

    setTypeRoomChecked(updatedCheckedState);
  };
  console.log(typeRoomChecked);

  return (
    <div className="CheckboxContainer">
      <h3 className="titleCheckbox">Selecciona Tipo de Habitación</h3>

      {TypeOfRoomData.map(({ name }, index) => {
        return (
          <div key={index}>
            <TypeCheckbox
              index={index}
              name={name}
              typeRoomChecked={typeRoomChecked}
              handleOnChange={handleOnChange}
            />
          </div>
        );
      })}
    </div>
  );
}
