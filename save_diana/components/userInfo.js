import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '238px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserPanel() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <img 
            src='../static/Shape.png'  
            style={{width: '1em', height: 'auto', borderRadius: 400/ 2}} 
        />
        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
          Diana Panich
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          San Francisco
        </Typography>
        <Typography variant="body2" component="p">
          Working in tech. Looking to save the whales.
        </Typography>
      </CardContent> 
    </Card>
  );
}