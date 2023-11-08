import React from "react";
import style from "./Search.module.css";
import searchicon from "../../assets/search.png";

function Search({ setSearch }) {
  return (
    <>
      <div className={style.searchcontainer}>
        <div className={style.search}>
          <img src={searchicon} alt="" />
          <input
            type="text"
            placeholder="Search Product"
            className={style.serachinput}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
