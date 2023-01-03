import { useState } from "react";
import FormInputTarjetaRegistro from "./FormInputTarjetaRegistro";
import "./FormInputTarjetaRegistro";
import ContactCheckbox from "../Contact/ContactCheckbox";

import RowRadioButtonsGroup from "../RowRadioButtonsGroup/RowRadioButtonsGroup";

const FormTarjetaRegistro = () => {
  const [values, setValues] = useState({
    nombreCompleto: "",
    nacionalidad: "",
    profesion: "",
    procedencia: "",
    edad: "",
    estadoCivil: "",
    direccion: "",
    motivoViaje: "",
    observations: "",
  });

  const inputs = [
    {
      id: 1,
      name: "nombreCompleto",
      type: "text",
      placeholder: "Nombres y Apellidos",
      errorMessage:
        "El nombre completo debe contener, minimo un nombre y dos apellidos",
      label: "Nombres y Apellidos",
      pattern: `^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`,
      required: true,
    },
    {
      id: 2,
      name: "nacionalidad",
      type: "text",
      placeholder: "Nacionalidad",
      errorMessage: "ingresa una nacionalidad",
      label: "Nacionalidad",
    },
    {
      id: 3,
      name: "profesion",
      type: "text",
      placeholder: "Profesion",
      errorMessage: "ingresa la profesion",
      label: "Profesion",
    },
    {
      id: 4,
      name: "procedencia",
      type: "texto",
      placeholder: "Procedencia",
      label: "Procedencia",
    },
    {
      id: 5,
      name: "edad",
      type: "number",
      placeholder: "Edad",
      label: "Edad",
    },
    {
      id: 6,
      name: "estadoCivil",
      type: "text",
      placeholder: "Estado Civil",
      label: "Estado Civil",
    },
    {
      id: 7,
      name: "direccion",
      type: "text",
      placeholder: "Direccion",
      label: "Direccion:",
    },
    {
      id: 8,
      name: "motivoViaje",
      type: "text",
      placeholder: "Motivo del Viaje",
      label: "Motivo del Viaje",
    },
    {
      id: 10,
      name: "observations",
      type: "text",
      placeholder: "observaciones",
      label: "observaciones",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="app-form-tarjeta-registro">
      <form onSubmit={handleSubmit}>
        <h2>TARJETA DE REGISTRO</h2>
        {inputs.map((input) => (
          <FormInputTarjetaRegistro
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <ContactCheckbox />
        <RowRadioButtonsGroup />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormTarjetaRegistro;
