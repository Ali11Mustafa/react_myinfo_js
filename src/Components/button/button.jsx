import { Button } from "@material-ui/core";
import React from "react";
import "./button.css";
const button = ({ text, icon }) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className={"btn_icon_container"}>{icon}</div> : null}
      href="https://www.canva.com/design/DAEdHnRamMU/HULSYWV9S6y5GAwRe6lpqg/edit"
    >
      {" "}
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default button;
