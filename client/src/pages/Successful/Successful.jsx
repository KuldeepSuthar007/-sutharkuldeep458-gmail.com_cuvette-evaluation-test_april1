import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Successful.module.css";
import Logo from "../../components/Logo/Logo";
import ppoper from "../../assets/confetti 1.png";
import Mobfooter from "../../components/Mobfooter/Mobfooter";

function Successful() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const checktoken = () => {
    let token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  useEffect(() => {
    checktoken();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Logo />
      </div>
      <div className={style.midcontainer}>
        <img src={ppoper} alt="" />
        <p className={style.h2}>Order is placed successfully!</p>
        <p className={style.h3}>
          You will be receiving a confirmation email with order details
        </p>
        <button className={style.goback_btn} onClick={() => navigate("/")}>
          Go back to Home page
        </button>
      </div>
      <div className={style.footer}>
        <p>Musicart | All rights reserved</p>
      </div>
      <Mobfooter login={login} setlogin={setLogin} />
    </div>
  );
}

export default Successful;
