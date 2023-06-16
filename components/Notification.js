import React from "react";
import lamp from "../assets/lamp.png";

const Notification = () => {
  return (
    <div className="notice__container">
      <div className="lamp">
        <img src={lamp} alt="lamp" className="lampimage"/>
      </div>
      <div className="notice__box">
        <h3 className="notice_header">Thoughts Time</h3>
        <p className="notice__para">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <input type="text" className="notice__input" placeholder="Write a message"/>
      </div>
    </div>
  );
};

export default Notification;
