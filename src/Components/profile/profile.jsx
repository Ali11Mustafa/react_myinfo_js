import React from "react";
import { Typography } from "@material-ui/core";
import "./profile.css";
import im from "./undraw_startup_life_2du2.svg";
import CustomTimeline, { CustomTimeline1 } from "../timeline/timeline";
import Data from "../../utilites/data";
import PersonIcon from "@material-ui/icons/EmojiEmotionsSharp";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Button from "../button/button";
import GetAppIcon from "@material-ui/icons/GetApp";
// Some random colors

function CustomTimelineitems({ title, text, link }) {
  <TimelineItem>
    <CustomTimeline1 />

    <TimelineContent>
      {link ? (
        <Typography>
          <span> {title}:</span>
          {""}
          <a href={link}>{text}</a>
        </Typography>
      ) : (
        <Typography>
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>;
}
function profile() {
  return (
    <div className="profile-container-shadow">
      {/** <div className="profile_name">
        <Typography className="name">{"I am Ali✋"}</Typography>
        <Typography className="title">{"web devloper💻"}</Typography>
      </div>*/}

      <img className="profile_image img-fluid" src={im} alt=""></img>

      <div className="profile_informati">
        <CustomTimeline
          className="a"
          icon={<PersonIcon className="PersonIcon" />}
          title={Data.title}
        >
          <CustomTimelineitems title="name" text={Data.name} />
          <CustomTimelineitems title="title" text={Data.title} />
          <CustomTimelineitems title="Email" text={Data.email} />
        </CustomTimeline>

        <br />
        <div className="btn1">
          <Button text={"download cv"} icon={<GetAppIcon></GetAppIcon>} />
        </div>
      </div>
      <div />
    </div>
  );
}

export default profile;
