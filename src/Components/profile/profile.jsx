import React from "react";
import { Typography } from "@material-ui/core";
import "./profile.css";
import im from "./e0c8b93f-c246-46e8-9db2-ec0cb01ec9eb-ea635e36-37b0-43cb-82a4-bf7459ae81fa-v1.png";
import CustomTimeline, { CustomTimeline1 } from "../timeline/timeline";
import Data from "../../utilites/data";
import PersonIcon from "@material-ui/icons/EmojiEmotionsSharp";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Button from "../button/button";
import GetAppIcon from "@material-ui/icons/GetApp";

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
      <div className="profile_name">
        <Typography className="name">{"I am Ali✋"}</Typography>
        <Typography className="title">{"web devloper💻"}</Typography>
      </div>
      <figure className="profile_image">
        <img src={im} alt=""></img>
      </figure>

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
        <div className="btn1" style={{ display: "flex" }}>
          <Button text={"download cv"} icon={<GetAppIcon></GetAppIcon>} />
        </div>
      </div>
      <div />
    </div>
  );
}

export default profile;
