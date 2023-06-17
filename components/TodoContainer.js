import React, { useState } from "react";
import TodoColumn from "./TodoColumn";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../data/intial-data";

const TodoContainer = () => {
  const [state, setState] = useState(initialData);

    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      const sourceCol = state.columns[source.droppableId];
      const destinationCol = state.columns[destination.droppableId];

      if (sourceCol.id === destinationCol.id) {
        const newTaskIds = Array.from(sourceCol.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...sourceCol,
          taskIds: newTaskIds,
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn,
          },
        };
        setState(newState);
        return;
      }

      const startTaskIds = Array.from(sourceCol.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartCol = {
        ...sourceCol,
        taskIds: startTaskIds,
      };

      const endTaskIds = Array.from(destinationCol.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEndCol = {
        ...destinationCol,
        taskIds: endTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStartCol.id]: newStartCol,
          [newEndCol.id]: newEndCol,
        },
      };

      setState(newState);
    };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="todo__wrapper">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return <TodoColumn key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default TodoContainer;
