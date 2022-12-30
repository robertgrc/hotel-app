
import {  Grid,  Typography } from "@mui/material"



const AuthLayout = ({children, title=""}) => {
  return (
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding:4}}
    >
      <Grid item 
      className="box-shadow"
      xs={3}
      //sx={{width:{xs:350, sm:400, md:450, xl:700  }, backgroundColor: "whitesmoke", padding:3, borderRadius:2}}
      sx={{width:{xs:400, md:450, xl:550  }, backgroundColor: "whitesmoke", padding:3, borderRadius:2}}
      >
        <Typography variant="h5" sx={{mb:1}}>{title}</Typography>

        {children}
        </Grid>

    </Grid> 
  )
}

export default AuthLayout





    
   