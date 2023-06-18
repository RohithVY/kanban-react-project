import React from "react";
import edit from "../assets/penciledit.svg";
import bodylink from "../assets/bodylink.svg";
import people from "../assets/people.svg";
import addblue from "../assets/addblue.svg";
import "./styles/kanban_styles.css";

const KanbanHeader = () => {
  return (
    <div className="kanban__top">
      <div className="kanban__title_container">
        <span className="kanban__title">Mobile App</span>
        <img src={edit} alt="edit" className="kanban__edit__title" />
        <img src={bodylink} alt="bodylink" className="kanban__link" />
      </div>
      <div className="kanban__users__container">
        <img src={addblue} alt="addblue" className="add__users" />
        <span className="invite__span">Invite</span>
        <img src={people} alt="people" className="users" />
      </div>
    </div>
  );
};

export default KanbanHeader;
