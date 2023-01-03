import { useState } from "react";
import FormInputReserva from "./FormInputReserva";
import "./FormInputReserva";
import ContactCheckbox from "../Contact/ContactCheckbox";

const FormReserva = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    phone: "",
    creditCard: "",
    numberCreditCard: "",
    company: "",
    phoneCompany: "",
    reservadoPor: "",
    reservationDate: "",
    observations: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
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
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "ingresa un email valido",
      label: "Email",
      pattern: "^[^s@]+@[^s@]+.[^s@]+$",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "number",
      placeholder: "Telefono - Celular",
      errorMessage: "ingresa un numero de telefono o celular de 8 caracteres",
      label: "Telefono - Celular",
      pattern: `^[0-9]{8}$`,
      required: true,
    },
    {
      id: 4,
      name: "creditCard",
      type: "number",
      placeholder: "Tarjeta de Credito",
      label: "Tarjeta de Credito",
    },
    {
      id: 5,
      name: "numberCreditCard",
      type: "number",
      placeholder: "Numero de Tarjeta de Credito",
      label: "Numero de Tarjeta de Credito",
    },
    {
      id: 6,
      name: "company",
      type: "text",
      placeholder: "Empresa/Institucion",
      label: "Empresa/Institucion",
    },
    {
      id: 7,
      name: "phoneCompany",
      type: "number",
      placeholder: "Telefono(Empresa/Institucion)",
      label: "telefono(Empresa/Institucion)",
    },
    {
      id: 8,
      name: "reservadoPor",
      type: "text",
      placeholder: "Nombre completo del reservante",
      errorMessage:
        "El nombre completo debe contener, minimo un nombre y dos apellidos, sin caracteres especiales, tampoco numeros!",
      label: "Reservado por:",
      pattern: `^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`,
      required: true,
    },
    {
      id: 9,
      name: "reservationDate",
      type: "date",
      placeholder: "Fecha de reserva",
      errorMessage: "ingresa una fecha valida",
      label: "Fecha de reserva",
      required: true,
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
    <div className="app-form-reservas">
      <div className="form-reserva">
        <form onSubmit={handleSubmit}>
          <div className="h2-reserva">
            <h2>FORMULARIO DE RESERVAS</h2>
          </div>
          {inputs.map((input) => (
            <div className="formInputReserva">
              <FormInputReserva
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            </div>
          ))}
          <div className="contactCheckbox">
            <ContactCheckbox />
          </div>
          <div className="submit-reserva">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormReserva;
