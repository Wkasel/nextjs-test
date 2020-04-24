import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../components/buttonAppBar';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { Button, Backdrop, AppBar, Box, Container } from '@material-ui/core';
import Feed from '../components/feed'
import Card from '@material-ui/core/Card';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Followers from '../components/followers'
import UserPanel from '../components/userInfo';
import Donations from '../components/donations';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
         <Paper elevation={0}>
         <Grid container spacing={0}>
          <Grid item sm={6} xs={12} style={{ marginLeft: '20px', marginTop: '15px' }}>
            <UserPanel />
          </Grid>
          <Grid item sm={5} xs={12}>
            <Card elevation={0} style={{ marginTop: '50px', marginLeft: '120px',  overflow: 'hidden' }}>
                <Followers />
            </Card>
           </Grid>
          </Grid>
          </Paper>
        </Grid>
        <Grid item sm={2} xs={6}>
          <Card elevation={0} style={{ textAlign: 'center' }}>
            <MonetizationOnIcon fontSize="large" style={{ marginTop: '50px', marginBottom: '20px' }}/>
            <Typography variant="h3" component="h2" style={{ paddingBottom: '5px', fontWeight: 'bold' }}>
                500$
            </Typography>
            <p style={{ fontSize: '20px' }}>Money Raised</p>
          </Card>
        </Grid>
        <Grid item sm={2} xs={6}>
          <Card elevation={0} style={{ textAlign: 'center' }}>
            <FavoriteIcon fontSize="large" style={{ marginTop: '50px', marginBottom: '20px' }}/>
            <Typography variant="h3" component="h2" style={{ paddingBottom: '5px', fontWeight: 'bold' }}>
                50$
            </Typography>
            <p style={{ fontSize: '20px' }}>Money Donated</p>
          </Card>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Feed/>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Donations />
        </Grid>
      </Grid>
    </Container>
  );
}