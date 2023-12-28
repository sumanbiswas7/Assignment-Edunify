import React from "react";
import classes from "./grid-container.module.css";

export function GridContainer({ children }: { children: React.ReactNode }) {
   return <div className={classes.grid_container}>{children}</div>;
}
