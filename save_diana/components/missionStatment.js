import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const StyledBoxBlueBottom = withStyles({
  root: {
    background: "#a4d8ef",
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
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Box);

export default function MissionStatement() {
  return (
    <StyledBoxBlueBottom
      id="mishstate"
      style={{ paddingBottom: "6em", paddingTop: "3em" }}
    >
      <div
        style={{
          display: "inline-block",
          marginTop: "240px",
          maxWidth: "30%",
          zIndex: "2",
          position: "relative",
          textAlign: "center",
          lineHeight: "30px",
          whiteSpace: "pre-line",
        }}
      >
        <Typography variant="h3" component="h2">
          SAVE STATEMENT
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
          WHAT IF WE COULD USE THE FORGOTTEN MOMENTS OF OUR DAY TO HELP SAVE OUR
          WORLD?
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {" "}
          IF THE SECONDS WE SPENT WAITING AND SCROLLING, WE COULD USE TO SAVE
          LIVES.
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          WHAT IF WE COULD DO THIS BY JUST GETTING DRESSED.{" "}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          SAVE ASKS THAT YOU ACKNOWLEDGE THE UNSETTLING TRUTH THAT OUR PLANET
          NEEDS HELP TO TAKE THE FIRST STEP. FOR IF SOMETHING IS TO BE SAVED, IT
          MUST FIRST BE SEEN.
        </Typography>
      </div>
      <img
        src="/Ellipse 47.png"
        style={{
          position: "relative",
          height: "100%",
          maxHeight: "100%",
          maxWidth: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: "1",
          marginTop: "-8.5em",
        }}
      />
    </StyledBoxBlueBottom>
  );
}
