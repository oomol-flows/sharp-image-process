import styles from "./App.module.css";

import React from "react";

import empty from "./empty.svg";

export interface AppProps {
  contextProps: any;
}

export const App = ({ contextProps }: AppProps) => {
  if (contextProps === "Empty") {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <img className={styles.empty} src={empty} />
        </div>
      </div>
    );
  }

  if (contextProps.type === "image") {
    return (
      <div className={styles.container}>
        <img src={contextProps.data} className={styles.image} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {JSON.stringify(contextProps)}
        <div className={styles.inner}>
          Go to this block's oo-render for custom rendering
        </div>
      </div>
    </div>
  );
};
