import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Mobfooter.module.css";
import homeicon from "../../assets/Vector (7).png";
import carticon from "../../assets/Vector (8).png";
import loginicon from "../../assets/Vector (11).png";
import logouticon from "../../assets/Vector (9).png";
import lineicon from "../../assets/Line 14.png";

function Mobfooter({ login, setlogin }) {
  const navigate = useNavigate();
  function handlelogout() {
    localStorage.clear();
    setlogin(false);
    navigate("/");
  }
  return (
    <>
      <div className={style.footercontainer}>
        <div className={style.top}>
          <img src={lineicon} alt="" />
          <img src={homeicon} alt="" onClick={() => navigate("/")} />
          <p>Home</p>
        </div>
        {login && (
          <div className={style.mid}>
            <img src={carticon} alt="" onClick={() => navigate("/cart")} />
            <p>Cart</p>
          </div>
        )}

        <div className={style.bottom}>
          {!login && (
            <>
              <img src={loginicon} alt="" onClick={() => navigate("/login")} />
              <p>Login</p>
            </>
          )}
          {login && (
            <>
              <img src={logouticon} alt="" onClick={() => handlelogout()} />
              <p>Logout</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Mobfooter;
