import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Backdrop, AppBar, Box, Container, Typography } from '@material-ui/core';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2 ,
    color: 'black',
    fontSize: '20px',
    marginBottom: '50px',
    direction: 'column',
    justify: "space-around",
    alignItems: "center"
  },
  Paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    marginBottom: '50px',
    color: theme.palette.text.default,
    elevation: '0',
  },
}));

export default function ItemColumnRight() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Paper elevation={0} style={{fontSize: '35px', fontWeight: 'bold'}}>
              <Typography variant="h4" component="h2" style={{fontWeight: 'bold', textAlign: 'center'}}>Bay Area Homeless Crisis Tap-To-Donate T-Shirt</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={0} style={{marginBottom: '20px'}}>
              <Typography variant="h5" component="p" style={{ lineHeight: '50px', textAlign: 'center' }}>
              100% cotton, machine washable T-shirt, embedded with an NFC chip for tapable donations with your phone. <img src={'/noun_contactless phone_1588819 1.svg'} style={{paddingTop: '-30px'}} />

              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} style={{marginTop: '-20px', maxWidth: '90%', marginLeft: '30px'}}>
            <Paper elevation={0} >
              <Typography variant="h6" component="p" style={{ lineHeight: '30px', color: '#6A6767', textAlign: 'center' }}>
              There are an estimated 35,000 homelesss people in The Bay Area and the number is growing everyday. 
              The driving cause of this ever growing number is a lack of affordable housing in The Bay Area. 
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} style={{textAlign: 'center'}}>
            <Button style={{ borderWidth: 2, borderColor: 'black', borderRadius: 35, borderStyle:'solid', width: '60%', height: '150%',  }}>Select Size</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}