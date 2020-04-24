import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import ButtonAppBar from "../components/buttonAppBar";
import ItemGrid from "../components/itemGrid";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import HomeCta from "../components/homeCta";
import MissionStatement from "../components/missionStatment";

const WrapperBox = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    height: "100%",
    display: "table",
    zIndex: "unset",
  },
})(Box);

const StyledBoxBlue = withStyles({
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

const StyledBoxWhite = withStyles({
  root: {
    background: "#FFFFFF",
    width: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Roboto",
  },
})(Container);

const HomeOptions = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "25px",
    fontFamily: "Roboto",
  },
})(Box);

const title = ["\t" + "Save", "Wearable Charity"];

const styles = {
  root: {
    flexGrow: 1,
    lineHeight: "20px",
  },
  br: {
    lineHeight: "20px",
  },
  typography: {
    flexGrow: 1,
    textAlign: "center",
    paddingBottom: "20px",
  },
};

const App = () => (
  <WrapperBox>
    <ButtonAppBar />
    <StyledBoxBlue>
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
        }}
      />
      <h2
        style={{
          whiteSpace: "pre-line",
          marginTop: "-420px",
          zIndex: "2",
          position: "relative",
        }}
      >
        {title.join("\n")}
      </h2>
    </StyledBoxBlue>
    <HomeOptions>
      <HomeCta />
    </HomeOptions>
    <StyledBoxWhite>
      <ItemGrid />
    </StyledBoxWhite>
    <MissionStatement />
  </WrapperBox>
);

export default withStyles(styles)(App);
