import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { SRLWrapper } from "simple-react-lightbox";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  tags: {
    color: "tan",
  },
  title: {
    color: "tomato",
  },
}));

// function populate(props, length) {
//   let imageNames = [];
//   for (let index = 2; index < length; index++) {
//     imageNames.push(
//       require(`../images/${props.folder}/${props.filename}${index}.png`)
//     );
//   }
//   return imageNames;
// }

// function map(imageNames) {
//   imageNames.map(function (image) {
//     return <img src={image} hidden />;
//   });
// }

function Project(props) {
  const classes = useStyles();
  const length = props.imagesNumber;

  return (
    <div>
      <Card className={classes.cardContainer} data-lightbox={props.filename}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="100%"
            image={require(`../images/${props.folder}/${props.filename}1.png`)}
          />
          <CardContent>
            <Typography variant="h7" className={classes.tags}>
              {props.tag}
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.title}>
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            size="small"
            className={classes.root}
            href={props.link}
            target="_blank"
          >
            <GitHub />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Project;
