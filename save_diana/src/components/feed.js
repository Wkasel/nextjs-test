import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostItem from './postItem'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: '532px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Feed() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ marginTop: '25px', borderBottom: "2px solid rgb(212, 212, 212)",  paddingBottom: '25px', fontWeight: 'bold', marginLeft: '15px' }}>
          Feed
        </Typography>
        <PostItem />
        <PostItem />
        <PostItem />
        </CardContent> 
    </Card>
  );
}