import React from "react";
import "./styles/menustyles.css";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import leftarrow from "../assets/leftarrow.svg";
import tasks from "../assets/tasks.svg";
import message from "../assets/message.svg";
import profile from "../assets/profile.svg";
import setting from "../assets/setting.svg";
import addsquare from "../assets/addsquare.svg";
import threedots from "../assets/threedots.svg";
import Notification from "./Notification.js";

const SideMenuBar = () => {
  return (
    <aside className="menu__container">
      <span className="logo__wrapper">
        <img src={logo} alt="logo" />
        <h1>Project M.</h1>
        <img src={leftarrow} alt="leftarrow" className="menu__leftarrow" />
      </span>
      <div className="toggle__menu">
        <span className="menu__item">
          <img src={home} alt="home" className="each__icon" />
          <span className="each__itemname">home</span>
        </span>
        <span className="menu__item">
          <img src={message} alt="message" className="each__icon" />
          <span className="each__itemname">messages</span>
        </span>
        <span className="menu__item">
          <img src={tasks} alt="tasks" className="each__icon" />
          <span className="each__itemname">tasks</span>
        </span>
        <span className="menu__item">
          <img src={profile} alt="user" className="each__icon" />
          <span className="each__itemname">Members</span>
        </span>
        <span className="menu__item">
          <img src={setting} alt="setting" className="each__icon" />
          <span className="each__itemname">settings</span>
        </span>
        <span className="menu__border"></span>
      </div>
      <div className="menu__projects">
        <div className="project__header">
          <h3 className="project__title">My Projects</h3>
          <img src={addsquare} alt="addsquare" />
        </div>
        <div className="project__items">
          <span className="project__dot green">&bull;</span>
          <span className="project__type">Mobile App</span>
          <img src={threedots} alt="threedots" className="threedots" />
        </div>
        <div className="project__items">
          <span className="project__dot orange">&bull;</span>
          <span className="project__type">Website Redesign</span>
          <img src={threedots} alt="threedots" className="threedots" />
        </div>
        <div className="project__items">
          <span className="project__dot lightpurple">&bull;</span>
          <span className="project__type">Design Systems</span>
          <img src={threedots} alt="threedots" className="threedots" />
        </div>
        <div className="project__items">
          <span className="project__dot blue">&bull;</span>
          <span className="project__type">Wire Frames</span>
          <img src={threedots} alt="threedots" className="threedots" />
        </div>
      </div>
      <Notification />
    </aside>
  );
};

export default SideMenuBar;
