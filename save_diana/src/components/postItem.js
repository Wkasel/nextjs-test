import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";

export default function Post() {
  return (
    <Paper elevation={0}>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Paper elevation={0} style={{ display: "flex", paddingLeft: "20px" }}>
            <img
              src="/Shape.png"
              style={{ width: ".8em", height: "auto", borderRadius: 400 / 2 }}
            />
            <Typography
              variant="body2"
              component="p"
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              trevorofarrell
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            component="p"
            style={{
              textAlign: "left",
              paddingLeft: "20px",
              borderBottom: "1px solid rgb(212, 212, 212)",
              borderWidth: "30%",
              paddingBottom: "15px",
              marginTop: "-25px",
            }}
          >
            events coming up soon
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
