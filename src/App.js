import React from "react";
import Myinfo from "./component/myinfo";
import "./index.css";
const places = ["Switzherlnad🌄", "japan 🏯", "canada ☃️", "Norway 🚵‍♂️"];

function App() {
  return (
    <div>
      <Myinfo places={places} name="ali" age="21" />
    </div>
  );
}

export default App;
