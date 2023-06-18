import React, { memo } from "react";
import addblue from "../assets/addblue.svg";
import "./styles/todo_styles.css";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

const TodoCardMemo = memo(TodoCard);

const TodoColumn = ({ column, tasks }) => {
  return (
    <div className="todo__container">
      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <>
            <div className="todo__top__fixed">
              <div className="todo__top">
                <span className="todo__titlewrap">
                  <span className={`project__dot ${column.name}`}>&bull;</span>
                  <span className="c">{column.title}</span>
                  <div className="todo__length">{column.taskIds.length}</div>
                </span>
                {column.btn && (
                  <img src={addblue} className="todo__addbtn" alt="" />
                )}
              </div>
              <div className={`${column.name}__saperation`}></div>
            </div>
            <div
              className="todo__dropwrapper"
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <TodoCardMemo
                      task={task}
                      draggableProvided={draggableProvided}
                      draggableSnapshot={draggableSnapshot}
                    />
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          </>
        )}
      </Droppable>
    </div>
  );
};

export default memo(TodoColumn);
