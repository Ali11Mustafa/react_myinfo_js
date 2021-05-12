import { Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import Data from "../../utilites/data";
import "./footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer_name">
          {Data.name + " mustafa"}
        </Typography>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="footer-right">
        <a href="https://github.com/Ali-mustafa8">
          {" "}
          <GitHubIcon className="icon" />
        </a>
        <a href="https://www.linkedin.com/notifications/">
          {" "}
          <LinkedInIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
