import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Backdrop, AppBar, Box, Container, Typography } from '@material-ui/core';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';
import ItemColumnRight from './itemColumnRight';
import { Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    color: 'black',
    fontSize: '25px',
    width: '70%',
    maxWidth: '70%',
    maxheight: '70%',
    marginTop: '0px',
    marginBottom: '100px',
    direction: 'column',
    justify: "space-around",
    alignItems: "center",
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: 'center',
    justify: "space-around",
    alignItems: "center",
    color: theme.palette.text.default,
  },
}));

export default function ItemGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>  
       <Grid container spacing={10}>
          <Grid item sm={12}>
            <Paper elevation={0} className={classes.paper} >
              <Typography variant="h3" component="h2" style={{fontWeight: 'bold', marginBottom: '-80px'}}>Shop</Typography>
            </Paper>
          </Grid> 
          <Grid item sm={6}>
          <Card elevation={0} style={{textAlign: 'center'}}>
            <img src={"/static/savemodel.png"} style={{position: 'relative'}} width='460px' maxwidth='50%' height='auto' marginright='100px'/>
          </Card>
          </Grid>
          <Grid item sm={6}>
            <ItemColumnRight />
          </Grid>
        </Grid>
    </div>
  );
}
