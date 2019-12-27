import React from "react";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

import CopyToClipboardIconButton from "./CopyToClipboardIconButton";
import logo from "./logo.svg";
import GitHubIcon from "./GitHub.svg";
import LinkedInIcon from "./LinkedIn.svg";
import MailIcon from "./Mail.svg";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    }
  },
  content: {
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    }
  },
  logo: {
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  caption: {
    width: "350px",
    padding: theme.spacing(2),
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius
  },
  social: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center"
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img className={classes.logo} src={logo} alt="Site Logo" />
        <div className={classes.caption}>
          <Typography variant="h1">Kodey Converse</Typography>
          <Typography variant="subtitle1">Engineer</Typography>

          <div className={classes.social}>
            <IconButton
              href="https://github.com/krconv"
              size="small"
              target="_blank"
            >
              <img src={GitHubIcon} alt="GitHub" />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/krconv"
              size="small"
              target="_blank"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />
            </IconButton>
            <CopyToClipboardIconButton
              value="kodey@conve.rs"
              tooltip="Email copied to clipboard!"
              size="small"
            >
              <img src={MailIcon} alt="Mail" />
            </CopyToClipboardIconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
