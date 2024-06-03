import React from "react";
import styles from "../styles/Layout.module.css";

function Layout(children) {
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
    </div>
  );
}

export default Layout;
