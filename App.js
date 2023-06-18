import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import NavigationHeader from "./components/NavigationHeader";
import SideMenuBar from "./components/SideMenuBar";
import KanbanHeader from "./components/KanbanHeader";
import KanbanMiddle from "./components/KanbanMiddle";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div id="App">
      <SideMenuBar />
      <div className="body__container">
        <NavigationHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <KanbanHeader />
        <KanbanMiddle />
        <TodoContainer searchTerm={searchTerm}/>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
