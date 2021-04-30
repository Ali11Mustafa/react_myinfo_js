import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {} from "react-router-dom";
import "./App.css";
import Header from "./Components/header/header.jsx";
import Resume from "./pages/resume/resume";
import Footer from "./Components/footer/footer";
import Portfolio from "./pages/portfolio/portfolio";
import Profile from "./Components/profile/profile";
import { BrowserRouter } from "react-router-dom";
import Video from "./Components/video/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container className="top_60 main">
      <Grid container sapcing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          {/***profile */}
        </Grid>
        <Grid item className="main1" lg={12}>
          <BrowserRouter>
            <Router data-aos="flip-up">
              <Header />
              <div className="main-content container_shadow">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio data-aos="flip-up" />
                  </Route>
                  <Route path="/resume">
                    <Resume />
                  </Route>
                  <Route path="/">
                    <Profile />
                  </Route>
                </Switch>
              </div>
            </Router>
          </BrowserRouter>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
