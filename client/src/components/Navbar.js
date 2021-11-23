import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../redux/actions/actions";
import { getAllCountry } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchByName(search));
    if (search) {
      setSearch("");
    }
  };

  const reset = () => {
    dispatch(getAllCountry());
  };
  return (
    <div className="navbar">
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="search"
          placeholder="Search Countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="links">
        <Link to="/home">
          <button onClick={() => reset()} className="button">
            Home
          </button>
        </Link>
        <Link to="/Create">
          <button>Create Activity</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
