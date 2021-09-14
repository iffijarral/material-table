import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import RingLoader from "react-spinners/RingLoader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      },
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RingLoader  />
    </div>
  );
}
