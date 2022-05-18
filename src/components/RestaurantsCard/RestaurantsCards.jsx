import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CardActionsSpace, CardMargin } from './Styled'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const RestaurantsCard = (props) => {
  const classes = useStyles();

  return (
    <CardMargin className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={props.onClick}
          className={classes.media}
          image={props.logoUrl}
          title="Contemplative Reptile"
        />
        <CardContent
        onClick={props.onClick}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionsSpace>
        <Typography variant="body1" color="textSecondary" component="p" >
            {props.deliveryTime - 10} - {props.deliveryTime} min
        </Typography> 
        <Typography variant="body1" color="textSecondary" component="p">
            Frete: R${props.shipping},00
        </Typography>
      </CardActionsSpace>
    </CardMargin>
  );
}

export default RestaurantsCard