import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Link, NavLink, withRouter } from "react-router-dom";
import im from "../../assests/images/hi.png";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import TelegramIcon from "@material-ui/icons/Telegram";
import HomeIcon from "@material-ui/icons/Home";
import Data from "../../utilites/data";
import CButton from "../button/button";
import PanToolIcon from "@material-ui/icons/PanTool";
import "./header.css";
function Header(props) {
  const pathname = props?.location?.pathname;
  return (
    //expand="lg" 
    <Navbar className="header" sticky="top">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand href="#home" className="header_home">
          <img src={im} className="im" />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathname == "/" ? "header_link_active" : "header_link"}
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={
              pathname == "/resume" ? "header_link_active" : "header_link"
            }
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathname == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Projects
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(Data.socials).map((key) => (
            <a href={Data.socials[key].Link} target="_blank">
              {Data.socials[key].icon}
            </a>
          ))}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(Header);
