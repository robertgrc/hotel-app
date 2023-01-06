import { Grid } from "@mui/material";
import React from "react";
import Leftbar from "./Leftbar";
import Feed from "./Feed";
import Navbar from "./Navbar";
import RightBar from "./Rightbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
