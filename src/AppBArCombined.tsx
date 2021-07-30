import React from "react";
import { Grid } from "@material-ui/core";
import AppBarLeft from "./AppBarLeft";
import AppBarRight from "./AppBarRight";

function AppBarsCombined() {
  return (
    <Grid container justifyContent="space-between">
      <Grid>
        <AppBarLeft></AppBarLeft>
      </Grid>
      {/* <div style={{ backgroundColor: "red", float: "right" }}> */}
      <Grid justify="flex-end">
        <AppBarRight></AppBarRight>
      </Grid>
      {/* </div> */}
    </Grid>
  );
}

export default AppBarsCombined;
