import { useState } from "react";
import "./component.css";
import Logo from "../assets/logo.png";
import UserImage from "../assets/user.png";
import Search from "../assets/search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState(" ");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(" ");
  }

  return (
    <form className="navbar" onSubmit={handleSubmit}>
      <ul className="nav-list">
        <li className="start">
          <img src={Logo} alt="logo of flybook" />
        </li>
        <li className="end ">
          <input
            className=" searchBox"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <button>
            <img src={Search} />
          </button>
        </li>
        <li className="end">
          <Link to="/profile">
            <img src={UserImage} alt="profile of user" />
          </Link>
        </li>
      </ul>
    </form>
  );
};

export default Navbar;
