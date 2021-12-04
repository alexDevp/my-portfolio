import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

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

 function populate(props, length) {
   let imageNames = [];
   for (let index = 1; index < length; index++) {
     imageNames.push(
       require(`../images/${props.folder}/${props.filename}${index}.png`)
     );
   }
   return imageNames;
 }

function Project(props) {
  const classes = useStyles();
  const length = props.imagesNumber + 1;
  const images = populate(props, length)

  let [photoIndex, changeIndex] = useState(0);
  const [isOpen, move] = useState(false);

  function next(){
    changeIndex(photoIndex = (photoIndex + 1) % images.length)
  }

  function previous(){
    changeIndex((photoIndex + images.length - 1) % images.length)
  }

  function reset(){
    changeIndex(0)
  }

  function Open(){
    move(isOpen ? true : true)
  }

  function Close(){
    move(isOpen ? false : false)
    reset()
  }


  return (
    <div>
      <Card className={classes.cardContainer} onClick={Open} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="100%"
            image={require(`../images/${props.folder}/${props.filename}1.png`)}
          />
          {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={Close}
            onMovePrevRequest={previous}
            onMoveNextRequest={next}
            clickOutsideToClose="true"            
          />
        )}
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
