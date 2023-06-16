import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css'
import NavigationHeader from "./components/NavigationHeader";

const App = () => {
    return(
        <div id="app">
            <NavigationHeader />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);