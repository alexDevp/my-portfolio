import React from 'react'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Autorenew } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
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
      heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
      },
      subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
      },
      body1: {
        color: "tomato",
      },
      subtitle1: {
        color: "tan",
      },
      dateYear: {
        color: "white",
      },     
      image: {      
        textAlign: "center"
      }

}));

function TimeLineItem(props) {
    const classes = useStyles();

    return (       
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {props.title}
              </Typography>
              <div className={classes.image}>
                <img src={require(`../images/${props.imageURL}.png`)} alt={props.imageURL} height="140px"/>
              </div>          
                                        
              <Typography
                variant="body1"
                align="center"
                className={classes.body1}
              >
                {props.company}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.subtitle1}
              >
                {props.description}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.dateYear}
              >
                {props.dates}
              </Typography>
            </Box>

    )
}

export default TimeLineItem
