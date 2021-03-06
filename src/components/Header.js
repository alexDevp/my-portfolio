import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.jpg";
import pdf from "./cv.pdf";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Alexandre Pereira" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Alexandre Pereira"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Android App Developer",
            "Software Developer"
          ]}
          typeSpeed={30}
          backSpeed={30}
          loop
        />
      </Typography>
      <Button href={pdf} download  style={{borderColor: "tomato", textTransform: "none", backgroundColor: "#511" ,color: "tan", textDecoration: "none", fontSize: "1rem", margin: "10px"}} variant="outlined">Download CV</Button>
      
    </Box>
  );
};

export default Header;
