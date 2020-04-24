import React from "react";
import { Button, Backdrop, AppBar, Box, Container, Typography } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Globe from '../components/video'
import HomeCta from "../components/homeCta";


const StyledBoxBlue = withStyles({
    root: {
      background: "#A4D8EF",
      width: "100%",
      minWidth: "100%",
      height: "600px",
      display: "block",
      textAlign: "center",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "0px",
      color: "white",
      overflowY: 'hidden',
      fontSize: "60px",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
})(Container);

const HomeOptions = withStyles({
root: {
    background: "#A4D8EF",
    width: "100%",
    minWidth: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "25px",
    fontFamily: "Archivo Black, sans-serif",
    overflowY: 'hidden'

    },
})(Box);

const title = ["\t" + "WAVE", "WEARABLE CHANGE"];

export default function homeGlobe() {

    return(
            <div style={{overflowY: 'hidden'}}>
                <StyledBoxBlue maxWidth="fixed">
                    <Globe style={{overflowY: 'hidden'}} />
                    <Typography variant="h1" component="h1"
                        style={{
                            whiteSpace: "pre-line",
                            marginTop: "-480px",
                            zIndex: "2",
                            position: "relative",
                            fontFamily: 'Archivo Black, sans-serif',
                            fontWeight: 'Bold',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '80px',
                            lineHeight: '124.9%',
                        }}
                    >
                        {title.join("\n")}
                    </Typography>
                </StyledBoxBlue>
                <HomeOptions>
                    <HomeCta/>
                </HomeOptions>
            </div>
    )

}