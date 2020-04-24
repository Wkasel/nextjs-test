import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import ProfileNavBar from "../components/profileNavBar";
import GridTest from "../components/itemGrid";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import UserGrid from "../components/userGrid";
import Typography from "@material-ui/core/Typography";

const WrapperBox = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    maxHeight: "100%",
    minHeight: "100%",
    display: "table",
    zIndex: "unset",
  },
})(Box);

const StyledBoxBlue = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Roboto",
  },
})(Container);

export default function Profile() {
  return (
    <WrapperBox>
      <ProfileNavBar />
      <StyledBoxBlue style={{ paddingTop: "30px", paddingBottom: "50px" }}>
        <UserGrid />
      </StyledBoxBlue>
    </WrapperBox>
  );
}
