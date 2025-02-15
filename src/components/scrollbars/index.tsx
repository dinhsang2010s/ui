import React, { ReactNode } from "react";
import styles from "./scrollbars.module.css";

function Scrollbars(props: { height?: number | string; children: ReactNode }) {
  return (
    <div className={styles.scroller} style={{ height: props.height }}>
      {props.children}
    </div>
  );
}

export default Scrollbars;
