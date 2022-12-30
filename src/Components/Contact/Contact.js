import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import AuthLayout from "../../auth/layout/AuthLayout";
import ContactCheckbox from "./ContactCheckbox";

const Contact = () => {
  const [nameContact, setNameContact] = useState("");
  const [email, setEmail] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [numberCreditCard, setNumberCreditCard] = useState("");
  const [company, setCompany] = useState("");
  const [phoneCompany, setPhoneCompany] = useState("");
  const [reserved, setReserved] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [observations, setObservations] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  console.log(nameContact);

  const getReserva = async () => {
    try {
      const url = "http://localhost:4000/api/reserva";
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createReserva = async () => {
    console.log(nameContact);
    try {
      const url = "http://localhost:4000/api/reserva";

      const body = {
        nombreCompleto: nameContact,
        email: email,
        telefono: phoneContact,
        tarjetaCredito: creditCard,
        numeroTarjeta: numberCreditCard,
        empresa: company,
        telefonoEmpresa: phoneCompany,
        reservadoPor: reserved,
        fechaReserva: 123123,
        tipoHabitacion: "123456",
        observaciones: observations,
      };

      const response = await axios.post(url, body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title="FORMULARIO DE RESERVAS">
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sx={{ mt: 2, mr: 2, ml: 2 }}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                onChange={(e) => setNameContact(e.target.value)}
                value={nameContact}
                error={false}
                label="Nombre Completo"
                type="text"
                name="nombreCompleto"
                fullWidth
                variant="outlined"
                helperText="Campo obligatorio"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6} xl={6} my={1}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={false}
                label="E-mail"
                type="text"
                name="email"
                fullWidth
                variant="outlined"
                helperText="Campo obligatorio"
              />
            </Grid>
            <Grid item xs={6} xl={6} my={1}>
              <TextField
                onChange={(e) => setPhoneContact(e.target.value)}
                value={phoneContact}
                error={false}
                label="Telefono-Celular"
                type="number"
                name="phone"
                fullWidth
                variant="outlined"
                helperText="Campo obligatorio"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6} xl={6} my={1}>
              <TextField
                onChange={(e) => setCreditCard(e.target.value)}
                value={creditCard}
                error={false}
                label="Tarjeta de Credito"
                type="text"
                name="targetaCredito"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} xl={6} my={1}>
              <TextField
                onChange={(e) => setNumberCreditCard(e.target.value)}
                value={numberCreditCard}
                error={false}
                label="Numero Tarjeta"
                type="number"
                name="numeroTarjeta"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6} xl={6} my={1}>
              <TextField
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                error={false}
                label="Empresa/Institucion"
                type="text"
                name="empresa"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} xl={6} my={1}>
              <TextField
                onChange={(e) => setPhoneCompany(e.target.value)}
                value={phoneCompany}
                error={false}
                label="Telefono"
                type="number"
                name="telefonoEmpresa"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                onChange={(e) => setReserved(e.target.value)}
                value={reserved}
                error={false}
                label="Reservado por:"
                type="text"
                name="nombreReservante"
                fullWidth
                variant="outlined"
                helperText="Campo obligatorio"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                onChange={(e) => setReservationDate(e.target.value)}
                value={reservationDate}
                error={false}
                label=""
                type="date"
                name="fechaReserva"
                fullWidth
                variant="outlined"
                helperText="fecha y hora de la reserva(Campo obligatorio)"
              />
            </Grid>
          </Grid>

          <Grid>
            <ContactCheckbox />
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                onChange={(e) => setObservations(e.target.value)}
                value={observations}
                error={false}
                label="Observaciones"
                type="text"
                name="Observaciones"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={createReserva} fullWidth>
                Crear Reserva
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={getReserva} fullWidth>
                Obtener Reservas
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default Contact;
