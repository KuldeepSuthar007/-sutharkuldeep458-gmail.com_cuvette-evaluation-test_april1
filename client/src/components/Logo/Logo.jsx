import React from "react";
import style from "./Logo.module.css";
import musiclogo from "../../assets/image 4.png";
function Logo() {
  return (
    <div className={style.top}>
      <img className={style.logo} src={musiclogo} alt="" />
      <p className={style.logoname}>Musicart</p>
    </div>
  );
}

export default Logo;
