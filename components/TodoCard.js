import React from "react";
import "./styles/card_styles.css";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import person4 from "../assets/person4.svg";
import person5 from "../assets/person5.svg";
import comments from "../assets/comments.svg";
import files from "../assets/files.svg";

// Feature for more users
const getRandomImages = (count) => {
  const images = [person1, person2, person3, person4, person5];
  const selectedImages = [];
  let iterateOver = 3;
  count > 3 ? (iterateOver = 2) : (iterateOver = count);
  for (let i = 0; i < iterateOver; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex];
    selectedImages.push(image);
  }
  return selectedImages;
};

const TodoCard = ({ task, draggableProvided, draggableSnapshot }) => {
  const selectedImages = getRandomImages(task.teamcount);
  return (
    <>
      <div
        className="card__wrapper"
        ref={draggableProvided.innerRef}
        {...draggableProvided.draggableProps}
        {...draggableProvided.dragHandleProps}
      >
        <div className={`card__header`}>
          <div className={`card__${task.priority} card__priority`}>
            {task.priority}
          </div>
          <img
            src="https://www.svgrepo.com/show/124304/three-dots.svg"
            alt="..."
            className="dots"
          />
        </div>
        <div className="card__title">{task.tasktitle}</div>
        {task.image && <img src={task.image} className="card__image" />}
        {task.description && (
          <div className="card__description">{task.description}</div>
        )}
        <div className="card__footer">
          <span className="card__team">
            {selectedImages.map((image, index) => (
              <img
                src={image}
                className="card__teammember"
                style={{ left: `${index * 20}px` }}
                key={index}
                alt={`Team Member ${index + 1}`}
              />
            ))}
          </span>
          <span className="card__convers">
            <span className="comments__wrapper">
              <img src={comments} alt="" className="card__comments" />
              <span className="card__comments__count">{`${
                2 * task.teamcount
              } comments`}</span>
            </span>
            <span className="files__wrapper">
              <img src={files} alt="" className="card__files" />
              <span className="card__files__count">{`${task.teamcount} files`}</span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
