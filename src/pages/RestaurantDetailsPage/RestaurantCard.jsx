import { Card, CardContent, CardMedia, Typography, useTheme, makeStyles, Button } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

const RestaurantCard = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.cover}
          component="img"
          height="140"
          image={props.photoUrl}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              {props.name}
            </Typography>
            <Typography variant="subtitle3" color="textSecondary">
              {props.description}
            </Typography>
            <div>
              <Typography variant="subtitle1" color="textSecondary">
                R${props.price}
              </Typography>
            </div>
          </CardContent>
        </div>
        <div  style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          <Button variant="outlined" color="primary" size="small" style={{ width: 20}}>
            +
          </Button>
          <Typography variant="subtitle1"> '' </Typography>
          <Button variant="outlined" color="primary" size="small" style={{ width: 20}}>
            -
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default RestaurantCard