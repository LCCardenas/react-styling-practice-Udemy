import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const date = new Date();
const hour = date.getHours();
var salutation = "";
const customStyle = {
  color: ""
};

if (hour >= 0 && hour <= 12) {
  salutation = "Good Morning";
  customStyle.color = "blue";
} else if (hour > 12 && hour <= 18) {
  salutation = "Good Afternoon";
  customStyle.color = "red";
} else {
  salutation = "Good Night";
  customStyle.color = "yellow";
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {salutation}
    </h1>
  </div>,
  rootElement
);
