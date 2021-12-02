import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Project from "./Project";
import ProjectsPT from "../data/ProjectsPT";
import ProjectsEN from "../data/ProjectsEN";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
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

const Portfolio = () => {
  const classes = useStyles();
  const language = setupCookie();
  let projects = [];
  if(language === "PT"){
    projects = ProjectsPT;
  }else{
    projects = ProjectsEN;
  }

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">

      {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
          <Project
              name={project.name}
              tag={project.tag}
              description={project.description}
              folder={project.folder}
              link={project.link}
              imagesNumber={project.imagesNumber}
              filename={project.filename}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
