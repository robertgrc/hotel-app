import { useState } from "react";
import FormInputReserva from "./FormInputReserva";
import "./FormInputReserva";

const FormReserva = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username debe tener 3-16 caracteres y no incluye caracteres especiales!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
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
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "ingresa una fecha correctamente",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password debe tener 6-20 caracteres, debe incluir una letra, un numero y un caracter especial",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Los passwords no estan coincidiendo",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        {inputs.map((input) => (
          <FormInputReserva
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormReserva;
