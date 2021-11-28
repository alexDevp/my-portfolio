import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/icons/Menu";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.jpg";
import { Switch } from "@material-ui/core";
import Footer from "../components/Footer";
import ReactCountryFlag from "react-country-flag";
import { withStyles } from "@material-ui/core/styles";
import Pdf from "./Pdf";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  languageChanger:{
    position: 'center',
    anchor: "rigth",
    marginLeft: 'auto',
    padding: '0.25rem',
  },
}));

const TomatoSwitch = withStyles({
  switchBase: {
    color: "tan",
    "&$checked": {
      color: "tan",
    },
    "&$checked + $track": {
      backgroundColor:"tomato",
    },
  },
  checked: {},
  track: {
    backgroundColor:"tomato"
  },
})(Switch);

function setupCookie(){
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let languageCookie = setupCookie();
  const [language, setLanguage] = useState(languageCookie);
  let SliderState = language === "EN" ? false : true;
  
  const [checked, setChecked] = useState(SliderState);
  const switchHandler = (event) => {

    setChecked(checked ? false : true);
    if(checked === true){
      languageChange("EN")
    }else{
      languageChange("PT")
    }
    window.location.reload(false)
  };

  function languageChange(newLanguage) {
    if (newLanguage === "PT") {
      document.cookie = "language=PT; path=/";
    } else {
      document.cookie = "language=EN; path=/";
    }

    setLanguage(newLanguage);
  }

  const classes = useStyles();
  let MenuItems = [];

  if(language === "PT"){
    MenuItems =[
      { listIcon: <Home />, listText: "Página Principal", listPath: "/my-portfolio/" },
      { listIcon: <AssignmentInd />, listText: "Curriculo", listPath: "/my-portfolio/resume" },
      { listIcon: <Apps />, listText: "Portfólio", listPath: "/my-portfolio/portfolio" },
      { listIcon: <ContactMail />, listText: "Contacto", listPath: "/my-portfolio/contact" },
    ];
  }else{
    MenuItems = [
      { listIcon: <Home />, listText: "Home", listPath: "/my-portfolio/" },
      { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/my-portfolio/resume" },
      { listIcon: <Apps />, listText: "Portfolio", listPath: "/my-portfolio/portfolio" },
      { listIcon: <ContactMail />, listText: "Contact", listPath: "/my-portfolio/contact" },
    ];
  }

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Alexandre Pereira" />
      <Divider />
      <List>
        {MenuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <Menu className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Portfolio
            </Typography>
            <Box className={classes.languageChanger}>
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                  width: "3em",
                  height: "3em",
                }}
              />
              <TomatoSwitch
                checked={SliderState}
                onChange={switchHandler}
                size="medium"
              />
              <ReactCountryFlag
                countryCode="PT"
                svg
                style={{
                  width: "3em",
                  height: "3em",
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Pdf language={languageCookie}/>       
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
