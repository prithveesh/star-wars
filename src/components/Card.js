import React, { useEffect, useState, useCallback, memo } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

let oldRef;

function RecipeReviewCard(props) {

  const [headline] = useState(props.headline.toUpperCase());
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(
    () => {
      setExpanded(true);
      return () => {
        // console.log('before unmount');
      }
    }, []
  );

  useEffect(
    () => {
      // console.log('after upadte isFavorite');
    }, [isFavorite]
  );

  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleFavoriteIcon = useCallback(() => {
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  oldRef = handleFavoriteIcon;

  const classes = props;

  const { title = 'title',
    // headline = 'headline',
    content = 'content', avatar = 'A' } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {headline}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteIcon}>
          <FavoriteIcon color={`${isFavorite ? 'error' : 'disabled'}`} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card >
  );
}

const componentWithStyles = withStyles(useStyles)(RecipeReviewCard);

export default memo(componentWithStyles, (prevProps, nextProps) => {
  // console.log("prevProps", prevProps);
  // console.log("nextProps", nextProps);
  // return false; // component will render
  return true; // component wont render again
});