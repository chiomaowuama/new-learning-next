import React from "react";
import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        <span>WebDev</span>News
      </h1>
      <h1 className={headerStyles.description}>
        <span>WebDev</span>News
      </h1>
      {/* <p className={headerStyles.title}>
        keep up to date with the latest web dev news
      </p> */}
    </div>
  );
}

export default Header;
