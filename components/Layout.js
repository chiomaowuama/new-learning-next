import React from "react";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.main}>
      <main className={styles.description}>{children}</main>
    </div>
  );
}

export default Layout;
