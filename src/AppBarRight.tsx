import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import EqualizerSharpIcon from "@material-ui/icons/EqualizerSharp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    justify: "flex-end",
  },
}));

function AppBarRight() {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item>
        <Button
          size="medium"
          className={classes.button}
          endIcon={<ShareIcon />}
        ></Button>
      </Grid>
      <Grid item>
        <Button
          size="medium"
          className={classes.button}
          endIcon={<RemoveCircleIcon />}
        ></Button>
      </Grid>
      <Grid item>
        <Button
          size="medium"
          className={classes.button}
          endIcon={<EqualizerSharpIcon />}
        ></Button>
      </Grid>
    </Grid>
  );
}

export default AppBarRight;
