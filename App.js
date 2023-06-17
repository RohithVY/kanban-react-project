import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import NavigationHeader from "./components/NavigationHeader";
import SideMenuBar from "./components/SideMenuBar";
import KanbanHeader from "./components/KanbanHeader";
import KanbanMiddle from "./components/KanbanMiddle";
import TodoColumn from "./components/TodoColumn";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <div id="App">
      <SideMenuBar />
      <div className="body__container">
        <NavigationHeader />
        <KanbanHeader />
        <KanbanMiddle />
        <TodoContainer />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
