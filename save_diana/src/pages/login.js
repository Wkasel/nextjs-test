import { Grid, Typography } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import LoginForm from '../components/loginForm'


const StyledBoxBlue = withStyles({
    root: {
      background: "#a4d8ef",
      width: "100%",
      minWidth: "100%",
      height: "100%",
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

  
export default function Login() {

  return(

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
          paddingTop: '200px',
          paddingBottom: '200px',
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
      ></h2>
      <LoginForm />
    </StyledBoxBlue>

  )

}