import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Typography from "@material-ui/core/Typography";
import UserInfo from "./userInfo";
import Post from "./posts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    display: 'column'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={9} xs={12} style={{ maxHeight: "100%", height: "100%" }}>
          <Paper elevation={0}>
            <Grid container spacing={0}>
              <Grid
                item
                xs={6}
                elevation={0}
                style={{ marginLeft: "20px", marginTop: "15px" }}
              >
                <UserInfo />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={3} xs={12} style={{ maxHeight: "100%", height: "100%" }}>
          <Card elevation={0} style={{ textAlign: "center" }}>
            <MonetizationOnIcon
              fontSize="large"
              style={{ marginTop: "50px", marginBottom: "20px" }}
            />
            <Typography
              variant="h3"
              component="h2"
              style={{ paddingBottom: "12px", fontWeight: "bold" }}
            >
              500$
            </Typography>
            <Typography
              variant="h6"
              comnponent="h3"
              style={{ paddingBottom: "26px" }}
            >
              Money Raised
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Post />
        </Grid>
      </Grid>
    </Container>
  );
}
