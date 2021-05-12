/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";
import TimelineIcon from "@material-ui/icons/Timeline";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";
import im from "../assests/images/Screenshot 2021-05-11 214142.png";
import im2 from "../assests/images/Screenshot 2021-05-11 221205.png";
import im3 from "../assests/images/Screenshot 2021-05-11 221908.png";
import im4 from "../assests/images/pic.png";
import im5 from "../assests/images/Screenshot 2021-05-12 020405.png";

export default {
  name: "Ali",
  title: "Front end web developer",
  birthday: "06th may 2000",
  email: "ali.00622274@gmail",
  address: "iraq/erbil",
  phone: "+96407804827065",
  facebook:
    "https://www.facebook.com/?stype=lo&jlou=Afd6Yjt9y0ae7nRXjNBaJcuqGCRfN_c1n9I-nAicCMp7cDGWmGrb1ZQ1TIl6bRusgBfhir8S9QUIvOYZdU-4zX6JGVxrzUXZ6lUg95iiAoAnoQ&smuh=35757&lh=Ac_sKEW59mXyOCZOtJ0",
  socials: {
    facebook: {
      link: "https://www.facebook.com/?stype=lo&jlou=Afd6Yjt9y0ae7nRXjNBaJcuqGCRfN_c1n9I-nAicCMp7cDGWmGrb1ZQ1TIl6bRusgBfhir8S9QUIvOYZdU-4zX6JGVxrzUXZ6lUg95iiAoAnoQ&smuh=35757&lh=Ac_sKEW59mXyOCZOtJ0",
      text: "Ali Mustafa",
      icon: <FacebookIcon />,
    },
    twiter: {
      link: "https://www.facebook.com/?stype=lo&jlou=Afd6Yjt9y0ae7nRXjNBaJcuqGCRfN_c1n9I-nAicCMp7cDGWmGrb1ZQ1TIl6bRusgBfhir8S9QUIvOYZdU-4zX6JGVxrzUXZ6lUg95iiAoAnoQ&smuh=35757&lh=Ac_sKEW59mXyOCZOtJ0",
      text: "twiiter",
      icon: <TwitterIcon />,
    },
    github: {
      link: "https://www.facebook.com/?stype=lo&jlou=Afd6Yjt9y0ae7nRXjNBaJcuqGCRfN_c1n9I-nAicCMp7cDGWmGrb1ZQ1TIl6bRusgBfhir8S9QUIvOYZdU-4zX6JGVxrzUXZ6lUg95iiAoAnoQ&smuh=35757&lh=Ac_sKEW59mXyOCZOtJ0",
      text: "github",
      icon: <GitHubIcon />,
    },
    Linkdin: {
      link: "https://www.facebook.com/?stype=lo&jlou=Afd6Yjt9y0ae7nRXjNBaJcuqGCRfN_c1n9I-nAicCMp7cDGWmGrb1ZQ1TIl6bRusgBfhir8S9QUIvOYZdU-4zX6JGVxrzUXZ6lUg95iiAoAnoQ&smuh=35757&lh=Ac_sKEW59mXyOCZOtJ0",
      text: "Linkdin",
      icon: <LinkedInIcon />,
    },
  },
  about:
    "I’m Ali Mustafa, undergraduate college student from koya university currently studying software engineering with big interest in software development to make impact on what I work on and always look for opportunities to take my skills to the next level.",
  experines: [
    {
      title: "Re:coded",
      desciption:
        "More than four months in studying react js and implementing all the concepts through a capstone project in agile environment.",
    },
    {
      title: "gaza sky for geeks",

      desciption:
        "Freelancer training for youth people and prepare them for digital economy.",
    },
    {
      title: "English languages translator. ",
      desciption:
        "Volunteer in an organization and was responsible for translation from English to Kurdish and opposite",
    },
  ],
  Education: [
    {
      title: "koya university",
      data: "2018-present",
      desciption: "Doing my bachelor’s degree in software engineering ",
    },
    {
      title: "bnari handren",
      data: "aka",
      desciption: "i was worked as an english translater for bnari handren",
    },
    {
      title: "sradam",
      data: "22-8-2012",
      desciption: "i was worked as an english translater for sardami bnrati",
    },
  ],
  services: [
    {
      title: "web dev",
      description: "i'm Excellent web developer",
      icon: <WebIcon />,
    },
    {
      title: "google analytics",
      description: "digital marketing",
      icon: <TimelineIcon />,
    },
    {
      title: "wordpress development",
      description: "wordpress developer",
      icon: <WebAssetIcon />,
    },
  ],
  skills: [
    {
      title: "Front-end",
      descroption: [
        "HTML",
        "CSS",
        "Bootstrap",
        "javascript",
        "React js",
        "material ui",
      ],
    },
    {
      title: "Database",
      descroption: ["sql", "mangodb", "mysql", "oracle"],
    },
    {
      title: "Source Control",
      descroption: ["Git", "Github"],
    },
  ],
  portfolio: [
    {
      tag: "React",
      image: im,
      title: "paw-five",
      description:
        "Paw-five which is an online, searchable database of pets who need homes in react js and firebase",
      caption:
        "Paw-five which is an online, searchable database of pets who need homes in react js and firebase",
      links: [
        {
          link: "https://paw-five.ml/ ",
          icon: <HttpIcon />,
        },
        {
          link: "https://github.com/ReCoded-Org/capstone-iraq-rct-paw-five",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "javascript",
      image: im2,
      title: "dyanmic clock in javascript",
      caption: "a very dynamic clack using vanilla javascript and easiljs   ",

      description: "a very dynamic clack using vanilla javascript and easiljs ",
      links: [
        { link: "https://dynamic-clockbyali.netlify.app/", icon: <HttpIcon /> },
        {
          link: "https://github.com/Ali-mustafa8/dynamiclock/blob/main/index.html",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "java",
      image: im3,

      title: "wordpress website",
      description:
        "developing user interface of etikmart webiste and fix some bugs",
      caption:
        "developing user interface of etikmart webiste and fix some bugs",

      links: [{ link: "https://etikmart.com/", icon: <HttpIcon /> }],
    },
    {
      tag: "java1",
      image: im5,
      title: "Hangman game",
      description: "Hangman game in react js, have a look and give a shot",
      caption: "Hangman game in react js, have a look and give a shot",

      links: [
        { link: "https://hangmangamebyali.netlify.app/", icon: <HttpIcon /> },
        {
          link: "https://github.com/Ali-mustafa8/Hangman",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "java1",
      image: im4,
      title: "swimming pool booking system",
      description:
        "koya university swimmng pool booking system in php and mysql",
      caption: "koya university swimmng pool booking system in php and mysql",

      links: [],
    },
  ],
};
