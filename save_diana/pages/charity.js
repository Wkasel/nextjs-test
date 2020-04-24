import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import CharityNavBar from "../components/charityNavBar";
import GridTest from "../components/itemGrid";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import UserGrid from "../components/userGrid";
import Typography from "@material-ui/core/Typography";
import CharityGrid from "../components/charityGrid";

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
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Container);

export default function Profile() {
  return (
    <WrapperBox>
      <CharityNavBar />
      <StyledBoxBlue style={{ paddingTop: "30px", paddingBottom: "50px" }}>
        <CharityGrid />
      </StyledBoxBlue>
    </WrapperBox>
  );
}
