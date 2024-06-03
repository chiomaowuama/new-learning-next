// import React from "react";
import Nav from "./nav";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.main}>
        <main className={styles.description}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
