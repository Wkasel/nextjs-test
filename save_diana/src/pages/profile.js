import React from "react";

import {
  //   Button,
  //   Backdrop,
  //   AppBar,
  Box,
  Container,
  //   Typography,
} from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";

import ProfileNavBar from "../components/profileNavBar";
// import GridTest from "../components/itemGrid";
import UserGrid from "../components/userGrid";
import Footer from "../components/footer";

const WrapperBox = withStyles({
  root: {
    background: "#9dd8f4",
    width: "100%",
    height: "100%",
    display: "table",
    zIndex: "unset",
  },
})(Box);

const StyledBoxBlue = withStyles({
  root: {
    background: "#9dd8f4",
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    display: "flex",
    color: "white",
    fontSize: "60px",
  },
})(Container);

export default function Profile() {
  return (
    <WrapperBox>
      <ProfileNavBar />
      <StyledBoxBlue
        maxWidth="fixed"
        style={{ paddingTop: "30px", paddingBottom: "50px" }}
      >
        <UserGrid />
      </StyledBoxBlue>
      <Footer />
    </WrapperBox>
  );
}
