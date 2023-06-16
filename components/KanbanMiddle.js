import React from "react";
import filter from "../assets/filter.svg";
import downarrow from "../assets/arrow-down.svg";
import calendar from "../assets/calendargray.svg"
import dots from "../assets/dotsfour.svg"
import profile from "../assets/profile.svg"

const KanbanMiddle = () => {
  return (
    <div className="kanban__middle">
      <div className="kanban__leftbtns">
        <div className="filter_btn_container">
          <img src={filter} alt="" className="kanban__filter" />
          <span className="filter__txt">Filter</span>
          <img src={downarrow} alt="" className="downarrow" />
        </div>
        <div className="date_btn_container">
          <img src={calendar} alt="" className="kanban__date" />
          <span className="date__txt">Today</span>
          <img src={downarrow} alt="" className="downarrow" />
        </div>
      </div>
      <div className="kanban__rightbtns">
        <div className="share__btn__container">
          <img src={profile} alt="profile" className="share__img" />
          <span className="share__txt">Share</span>
        </div>
        <div className="saperation__txt"></div>
        <img src={dots} alt="Following too.." />
      </div>
    </div>
  );
};

export default KanbanMiddle;
