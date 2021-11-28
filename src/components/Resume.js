import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CoursesPT from "../data/CoursesPT";
import CoursesEN from "../data/CoursesEN";
import JobPT from "../data/JobPT";
import JobEN from "../data/JobEN";
import TimeLineItem from "./TimeLineItem";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  
}));

function setupCookie() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  let languageCookie = "EN";

  ca.forEach((cookie) => {
    if (cookie.includes("language")) {
      languageCookie = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    }
  });
  return languageCookie;
}



const Resume = () => {
  const classes = useStyles();

  const language = setupCookie();
  let courses = [];
  let jobs = [];
  if(language === "PT"){
    courses = CoursesPT;
    jobs = JobPT;
  }else{
    courses = CoursesEN;
    jobs = JobEN;
  }

  return (
    <Box component="header" className={classes.mainContainer}>
      <Grid container>
        <Grid item xs={12} md={6} bg={6}>
          <Typography variant="h4" align="center" className={classes.heading}>
            {language === "PT" ? "Percurso Académico" : "Academic Background"}
          </Typography>
          <Box component="div" className={classes.timeLine}>
          <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >2021</Typography>

            <TimeLineItem
              id={courses[5].id}
              title={courses[5].title}
              dates={courses[5].dates}
              company={courses[5].company}
              description={courses[5].description}
              imageURL={courses[5].imageURL}
            />

            <TimeLineItem
              id={courses[4].id}
              title={courses[4].title}
              dates={courses[4].dates}
              company={courses[4].company}
              description={courses[4].description}
              imageURL={courses[4].imageURL}
            />

            <TimeLineItem
              id={courses[3].id}
              title={courses[3].title}
              dates={courses[3].dates}
              company={courses[3].company}
              description={courses[3].description}
              imageURL={courses[3].imageURL}
            />

            <TimeLineItem
              id={courses[2].id}
              title={courses[2].title}
              dates={courses[2].dates}
              company={courses[2].company}
              description={courses[2].description}
              imageURL={courses[2].imageURL}
            />

            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >2020</Typography>
            <TimeLineItem
              id={courses[1].id}
              title={courses[1].title}
              dates={courses[1].dates}
              company={courses[1].company}
              description={courses[1].description}
              imageURL={courses[1].imageURL}
            />

            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >2017</Typography>
            <TimeLineItem
              id={courses[0].id}
              title={courses[0].title}
              dates={courses[0].dates}
              company={courses[0].company}
              description={courses[0].description}
              imageURL={courses[0].imageURL}
            />
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >2014</Typography> 
          </Box>
        </Grid>
        <Grid item xs={12} md={6} bg={6}>
          <Typography variant="h4" align="center" className={classes.heading}>
            {language === "PT"
              ? "Experiência Profissional"
              : "Working Experience"}
          </Typography>
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >2019</Typography>
            <TimeLineItem
              id={jobs[1].id}
              title={jobs[1].title}
              dates={jobs[1].dates}
              company={jobs[1].company}
              description={jobs[1].description}
              imageURL={jobs[1].imageURL}
            />

            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >2017</Typography>
            <TimeLineItem
              id={jobs[0].id}
              title={jobs[0].title}
              dates={jobs[0].dates}
              company={jobs[0].company}
              description={jobs[0].description}
              imageURL={jobs[0].imageURL}
            />

            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >2016</Typography> 
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
