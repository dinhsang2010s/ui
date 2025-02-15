import React, { ReactNode } from "react";
import styles from "./background.module.css";

function BackgroundContainer(props: { children: ReactNode }) {
  return <div className={styles.container}>{props.children}</div>;
}

export default BackgroundContainer;
