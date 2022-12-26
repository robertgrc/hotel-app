import { Box, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box my={3} sx={{ width: 500 }} borderBottom={0}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label="Nombre Completo"
                  type="text"
                  name="nombreCompleto"
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
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
                  name="SWB"
                  margin="SUITE"
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
                  name="SWB"
                  margin="SIMPLE"
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
                  name="SWB"
                  margin="DOBLE"
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
                  margin="dense"
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
