import React from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import navicons from "../assets/navicons.svg";
import user from "../assets/user.svg";
import downarrow from "../assets/downarrow.svg";
import './styles/nav_styles.css'

const NavigationHeader = () => {
  return (
    <div className="nav__wrapper">
      {/* <span className="logo__wrapper">
        <img src={logo} alt="logo" />
        <h1>Project M.</h1>
      </span> */}
      <span className="nav__searchwrapper">
        <img src={search} alt="search__icon" />
        <input
          type="search"
          className="nav__searchinput"
          placeholder="Search for anything..."
        />
      </span>
      <span className="nav__rightsection">
        <img src={navicons} alt="" className="nav__icons" />
          <span className="nav__user">
            <h3 className="nav__username">Anima Agarwal</h3>
            <div className="nav__userlocation">U.P, India</div>
          </span>
          <img src={user} alt="user" className="user__image" />
          <img src={downarrow} alt="downarrow" className="nav__downarrow" />
        </span>
    </div>
  );
};

export default NavigationHeader;
