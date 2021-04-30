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
<div className="div"></div>;
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});

export default App;
