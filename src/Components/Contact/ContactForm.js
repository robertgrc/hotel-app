import { Box, Grid } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box border={1}>nombres</Box>
        </Grid>
        <Grid item xs={6}>
          <Box border={1}>nombres</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
