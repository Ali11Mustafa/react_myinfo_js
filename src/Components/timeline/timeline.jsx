import React from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Data from "../../utilites/data";
import Timeline from "@material-ui/lab/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import "../../App.css";
import "./timeline.css";
import { Typography } from "@material-ui/core";

const timeline = ({ title, icon, Children }) => {
  return (
    <div className="profile_information">
      <Timeline className="timelineself">
        <TimelineItem className="timeline_firstitem1">
          <TimelineSeparator>
            <TimelineDot className="timeline_dot_header1">😀</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className="timeline_header"></Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="timeline_firstitem">
          <TimelineSeparator className="seperater_padding">
            <TimelineDot variant="outlined" className="timeline_dot_footer" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="h6" className="timeline_header">
              <span className="sp1">{"Name: "}</span>
              <span className="sp2">{Data.name}</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="timeline_firstitem">
          <TimelineSeparator className="seperater_padding">
            <TimelineDot variant="outlined" className="timeline_dot_footer" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent className="TimelineContent">
            <Typography variant="h6" className="timeline_header">
              <span className="sp1">{"Title: "}</span>
              <span className="sp2">{Data.title}</span>
            </Typography>{" "}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="timeline_firstitem">
          <TimelineSeparator className="seperater_padding">
            <TimelineDot variant="outlined" className="timeline_dot_footer" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="h6" className="timeline_header">
              <span className="sp1">
                {"Email: "}
                <span className="sp2">{Data.email}</span>
              </span>
            </Typography>{" "}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="timeline_firstitem">
          <TimelineSeparator className="seperater_padding">
            <TimelineDot variant="outlined" className="timeline_dot_footer" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="h6" className="timeline_header">
              <span className="sp1">{"Phone: "}</span>
              <span className="sp2">{Data.phone}</span>
            </Typography>{" "}
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="timeline_firstitem">
          <TimelineSeparator className="seperater_padding">
            <TimelineDot variant="outlined" className="timeline_dot_footer" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="h6" className="timeline_header">
              <span className="sp1">{"Address: "}</span>
              <span className="sp2">{Data.address}</span>
            </Typography>{" "}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
export const CustomTimeline1 = () => {
  return (
    <TimelineSeparator className="seperater_padding">
      <TimelineDot variant="outlined" className="timeline" />

      <TimelineConnector />
    </TimelineSeparator>
  );
};
export const Custom = ({ title, icon }) => {
  return (
    <Timeline className="timelineself">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">💻</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline-header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="a">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h" className="timeline-header">
            <Typography>{Data.experines[0].title}</Typography>
          <Typography>{Data.experines[0].data}</Typography>  
            {Data.experines[0].desciption}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="a">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography> {Data.experines[1].title}</Typography>

          <Typography variant="h" className="timeline-header">
          <Typography>{Data.experines[1].data}</Typography>  

            {Data.experines[1].desciption}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="a">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="timeline-header">
            {Data.experines[2].title}
            <br/>
            {Data.experines[2].data}

          </Typography>

          <Typography variant="h" className="timeline-header">
            {Data.experines[2].data}
            {Data.experines[2].desciption}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="a">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="timeline-header">
            {Data.experines[3].title}
            <br/>
            {Data.experines[3].data}

          </Typography>

          <Typography variant="h" className="timeline-header">
            {Data.experines[3].data}
            {Data.experines[3].desciption}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
export const Custom1 = ({ title, icon }) => {
  return (
    <Timeline className="timelineself">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">🎓</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline-header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="a">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>{Data.Education[0].title}</Typography>

          <Typography variant="h">
            <br></br>
            {Data.Education[0].data}
            <br></br>
            {Data.Education[0].desciption}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default timeline;
