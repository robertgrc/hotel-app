import{Link as RouterLink} from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import AuthLayout from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">

        <form>
          <Grid container>
            {/* <Grid item xs={12} md={5} sx={{mt:2 , mr:2, ml:2}}> */}
            <Grid item xs={12} sx={{mt:2 , mr:2, ml:2}}>
              <TextField 
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              variant="outlined"
              fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2 , mr:2, ml:2}}>
              <TextField 
              label="Correo"
              type="text"
              placeholder="Correo"
              variant="outlined"
              fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2 , mr:2, ml:2}}>
              <TextField 
              label="Password"
              type="password"
              placeholder="password"
              variant="outlined"
              fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2 , mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
              <Link component={RouterLink} to="/auth/login" >

                Ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
      
      </AuthLayout>
  )
}
