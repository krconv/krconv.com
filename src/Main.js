import React from "react";

import { makeStyles } from "@material-ui/core";

import us from "./us.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default
  },
  picture: {
    width: "60%",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  }
}))

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.picture} src={us} alt="Maddy and Kodey" />
    </div>
  )
}
