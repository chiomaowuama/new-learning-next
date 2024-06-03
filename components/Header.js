import React from "react";
import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={headerStyles.tittle}>
        <span>WebDev</span>News{" "}
      </h1>
    </div>
  );
}

export default Header;
