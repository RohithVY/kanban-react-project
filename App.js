import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import NavigationHeader from "./components/NavigationHeader";
import SideMenuBar from "./components/SideMenuBar";
import KanbanHeader from "./components/KanbanHeader";
import KanbanMiddle from "./components/KanbanMiddle";

const App = () => {
  return (
    <span id="app">
      <SideMenuBar />
      <div className="body__container">
        <NavigationHeader />
        <KanbanHeader />
        <KanbanMiddle />
      </div>
    </span>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
