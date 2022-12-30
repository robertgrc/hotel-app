import axios from "axios";
import Contact from "../Components/Contact/Contact";

const hotelApi = () => {
  //   const datosEnviados = () => {
  //     console.log();
  //   };

  const crearReserva = async () => {
    try {
      const url = "http://localhost:4000/api/reserva";
      //   const body = {
      //     nombreCompleto: nameContact,
      //     email: email,
      //     telefono: phoneContact,
      //     tarjetaCredito: creditCard,
      //     numeroTarjeta: numberCreditCard,
      //     empresa: company,
      //     telefonoEmpresa: phoneCompany,
      //     reservadoPor: reserved,
      //     fechaReserva: 123123,
      //     tipoHabitacion: "123456",
      //     observaciones: observations,
      //   };
      const body = {
        nombreCompleto: "robi",
        email: "robi@gmail.com",
        telefono: 70784004,
        tarjetaCredito: 332323,
        numeroTarjeta: 33111,
        empresa: "company",
        telefonoEmpresa: 1223123,
        reservadoPor: "julio",
        fechaReserva: 12313,
        tipoHabitacion: "123456",
        observaciones: "sin obs",
      };

      const response = await axios.post(url, body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Contact crearReserva={crearReserva} />
    </div>
  );
};

export default hotelApi;
