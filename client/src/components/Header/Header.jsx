import React from "react";
import style from "./Header.module.css";
import phone from "../../assets/ph_phone-call-light.png";
import { useNavigate } from "react-router-dom";

function Header({ login, setlogin }) {
  const navigate = useNavigate();
  function handlelogout() {
    localStorage.clear();
    setlogin(false);
    navigate("/");
  }
  return (
    <div className={style.header}>
      <div className={style.top}>
        <img src={phone} alt="" />
        <p>912121131313</p>
      </div>
      <p>Get 50% off on selected items | Shop Now</p>
      <div className={style.bottom}>
        {!login && (
          <>
            <button
              className={style.login_btn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            |{" "}
            <button
              className={style.sign_btn}
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
        {login && (
          <button className={style.logout_btn} onClick={handlelogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
