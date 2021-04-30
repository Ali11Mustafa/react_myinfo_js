import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../utilites/data";
import "./portfolio.css";
import Im from "../../utilites/49315071c23ba7aaa583bd787e78c9db-removebg-preview (1).png";

function Portfolio() {
  const [projectdialog, setprojectdialog] = useState(false);
  const [tabvalue, settabvalue] = useState("All");

  const projectdialog1 = () => {};
  return (
    <Grid container className="section pb-45 pt-45 mb-20" spacing={2}>
      <Grid item className="section_title mb-30">
        <span></span>
        <h6 className="section_title_text">About me</h6>
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={tabvalue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => {
            settabvalue(newValue);
          }}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabvalue == "All" ? "custom_item active" : "custom_tabs_item"
            }
          />
          {[...new Set(Data.portfolio.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={
                tabvalue == tag ? "custom_item active" : "custom_tabs_item"
              }
            ></Tab>
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {Data.portfolio.map((item) => (
            <div>
              {tabvalue === item.tag || tabvalue === "All" ? (
                <Grid item className="kk">
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      onClick={() => {
                        setprojectdialog(item);
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom_card_image"
                          image={item.image}
                          title={item.title}
                        />
                        <CardContent>
                          <Typography
                            className="custom_card-title"
                            varient="body2"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            className="custom_card-description"
                            variant="body2"
                          >
                            {item.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </div>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectdialog}
        onClose={() => {
          setprojectdialog(false);
        }}
        maxWidth={"lg"}
        fullWidth
        className="projectdialog"
      >
        <DialogTitle
          onClose={() => {
            setprojectdialog(false);
          }}
        >
          {projectdialog.title}
        </DialogTitle>
        <img src={projectdialog.image} className="projectdialog_image" />

        <DialogContent>
          <Typography className="projectdialog_description">
            {projectdialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectdialog_actions">
          {projectdialog?.links?.map((link) => (
            <a href={link.link} className="projectdialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Portfolio;
