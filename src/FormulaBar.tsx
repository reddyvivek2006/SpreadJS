import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  border: {
    border: "2px solid black",
  },
}));
function FormulaBar() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.border}
      container
      direction="row"
      justifyContent="space-between"
    >
      <Grid>Fx:</Grid>
      <Grid justify-xs-flex-end="true">Expand Formula</Grid>
    </Grid>
  );
}

export default FormulaBar;
