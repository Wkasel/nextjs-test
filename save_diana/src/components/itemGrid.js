import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Backdrop,
  AppBar,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import ItemColumnRight from "./itemColumnRight";
import { Card } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    color: "black",
    fontSize: "25px",
    width: "70%",
    maxWidth: "70%",
    maxheight: "70%",
    marginTop: "0px",
    marginBottom: "100px",
    direction: "column",
    justify: "space-around",
    alignItems: "center",
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: "center",
    justify: "space-around",
    alignItems: "center",
    color: theme.palette.text.default,
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Archivo Black, sans-serif',
  },
});

export default function ItemGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.root} id="shop">
      <Grid container spacing={12}>
        <Grid item xs={12} sm={12}>
          <Paper elevation={0} className={classes.paper}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h3"
                component="h2"
                style={{ 
                  fontWeight: "bold",
                  marginBottom: "-20px",
                  fontWeight: 'Bold',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '41px',
                  lineHeight: '45px',
                }}
              >
                CAUSES
              </Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={0} style={{ textAlign: "center" }}>
            <img
              src={"/Rectangle 304.jpg"}
              style={{ 
                position: "relative",
                maxWidth: "100%",
                height: "auto",
                width: 'auto',
                marginRight: "0px",
                marginTop: '50px',
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ItemColumnRight />
        </Grid>
      </Grid>
    </Container>
  );
}
