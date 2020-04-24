import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Globe from './video'


const StyledBoxBlueBottom = withStyles({
  root: {
    background: "#A4D8EF",
    width: "100%",
    minWidth: "100%",
    height: "800px",
    display: "block",
    textAlign: "center",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: 'bold'
  },
})(Container);

export default function MissionStatement() {
  return (
    <StyledBoxBlueBottom
      id="statement"
      style={{ paddingBottom: "6em", paddingTop: "3em" }}
    >
      <Container
        style={{
          display: "inline-block",
          paddingTop: "-1500px",
          maxWidth: "75%",
          zIndex: "2",
          position: "relative",
          textAlign: "center",
          lineHeight: "30px",
          whiteSpace: "pre-line",
        }}
      >
        <Typography variant="h2" component="h2" style={{ 
            paddingBottom: '10px',
            fontWeight: "bold",
            fontWeight: 'Bold',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '60px',
            lineHeight: '65px',
          }}>
          MISSION
        </Typography>
        <br />
        <Typography variant="h5" component="h2" style={{ fontWeight: 'bold'}}>
          We hide the uncomfortable. Silence the chaos. Conceal dissaray. But how do we fix something that often goes unseen?
        </Typography>
        <br />
        <Typography variant="h5" component="p" style={{ fontWeight: 'bold'}}>
          {" "}
          Wave asks that you instead unveil unsettling truths and help shed light on critical issues, just by getting dressed.
        </Typography>
        <br />
        <Typography variant="h5" component="p" style={{ fontWeight: 'bold'}}>
          Raise funds and awareness for causes you care about through your t-shirt. Inspire change through your interactive wardrobe.
        </Typography>
      </Container>
    </StyledBoxBlueBottom>
  );
}
