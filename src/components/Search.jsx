import style from "../css/Search.module.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchText, setsearchText] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/?search=${searchText}`);
    setsearchText("");
  };

  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          className={style.searchInput}
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setsearchText(value);
            history.push("/?search=" + value);
          }}
          placeholder="Search Movie"
          type="text"
        />
        <button className={style.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
