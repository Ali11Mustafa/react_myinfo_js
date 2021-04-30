import { Typography } from "@material-ui/core";
import React from "react";
import Data from "../../utilites/data";
import "./footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer_name">{Data.name}</Typography>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="footer-right">
        <Typography className="footer-copyright">
          Design and development{" "}
          <a href="www.facebook.com" target="_blank">
            ali
          </a>
          <br></br>
          ide from{" "}
          <a href="www.facebook.com" target="_blank">
            Facebook
          </a>
        </Typography>
      </div>
    </div>
  );
}
