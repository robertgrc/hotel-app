import { Box, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box my={3} sx={{ width: 500 }}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Nombre Completo"
                  type="text"
                  name="nombreCompleto"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6} xl={6} my={1}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="E-mail"
                  type="text"
                  name="email"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} xl={6} my={1}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Telefono-Celular"
                  type="number"
                  name="phone"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6} xl={6} my={1}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Tarjeta de Credito"
                  type="text"
                  name="targetaCredito"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} xl={6} my={1}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Numero Targeta"
                  type="number"
                  name="numeroTarjeta"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6} xl={6} my={1}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Empresa/Institucion"
                  type="text"
                  name="empresa"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} xl={6} my={1}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Telefono"
                  type="number"
                  name="telefonoEmpresa"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Reservado por:"
                  type="text"
                  name="nombreReservante"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Fecha y hora de la reserva:"
                  type="text"
                  name="fechaReserva"
                  fullWidth
                  variant="outlined"
                  helperText="Campo obligatorio"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={1.7}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="SWB"
                  type="text"
                  name="SWB"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1.7}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="MAT"
                  type="text"
                  name="MAT"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1.7}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="DWB"
                  type="text"
                  name="DWB"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1.7}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="TWB"
                  type="text"
                  name="TWB"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1.7}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="SUITE"
                  type="text"
                  name="Suite"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1.7}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="SIMPLE"
                  type="text"
                  name="Simple"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1.7}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="DOBLE"
                  type="text"
                  name="Doble"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Observaciones"
                  type="text"
                  name="Observaciones"
                  fullWidth
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
