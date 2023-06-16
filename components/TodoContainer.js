import React from "react";
import addblue from "../assets/addblue.svg";
import "./styles/todo_styles.css";
const TodoContainer = ({ name, title, btn }) => {
  return (
    <div className="todo__container">
      <div className="todo__top">
        <span className="todo__titlewrap">
          <span className={`project__dot ${name}`}>&bull;</span>
          <span className="todo__title">{title}</span>
        </span>
        {btn && <img src={addblue} className="todo__addbtn" alt="" />}
      </div>
      <span className={`${name}__saperation`}></span>
    </div>
  );
};

export default TodoContainer;
