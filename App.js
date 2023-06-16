import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import NavigationHeader from "./components/NavigationHeader";
import SideMenuBar from "./components/SideMenuBar";

const App = () => {
  return (
    <span id="app">
      <SideMenuBar />
      <div className="body__container">
        <NavigationHeader />
      </div>
    </span>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
