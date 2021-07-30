import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ShortTextIcon from "@material-ui/icons/ShortText";
import PublishIcon from "@material-ui/icons/Publish";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function AppBarLeft() {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item>
        <Button className={classes.button} startIcon={<ShortTextIcon />}>
          What if Scenerio
        </Button>
      </Grid>
      <Grid item>
        <Button className={classes.button} startIcon={<VisibilityIcon />}>
          Back Testing
        </Button>
      </Grid>
      <Grid item>
        <Button className={classes.button} startIcon={<PublishIcon />}>
          Publish
        </Button>
      </Grid>
    </Grid>
  );
}
