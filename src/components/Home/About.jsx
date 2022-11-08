import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import "../../app.scss";
import Logochain from "../../assets/Logochain.svg";
import AboutLogo from "../../assets/AboutLogo.svg";
import Aboutcircle1 from "../../assets/Aboutcircle1.svg";
import Aboutcircle2 from "../../assets/Aboutcircle2.svg";

let theme = createTheme({
  typography: {
    h2: {
      fontWeight: 600,
      fontSize: "1.8em",
    },
    body1: {
      fontWeight: 400,
      fontSize: ".95em",
      fontFamily: "lufgalight-webfont",
    },
  },
});
theme = responsiveFontSizes(theme);
const About = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container maxWidth="xxl" disableGutters={true}>
        <span>
          <img
            src={Logochain}
            width="2000"
            height="100"
            alt="Chained logo"
          ></img>
        </span>
      </Container>
      <Container
        maxWidth="xl"
        sx={{ overflow: "hidden", paddingTop: "4%", paddingBottom: "4%" }}
      >
        <Box>
          <Grid container spacing={0} justifyContent="space-between">
            <Grid
              item
              xs={4}
              sm={2.5}
              lg={3}
              xl={1.5}
              sx={{ margin: "auto" }}
              className="About"
            >
              <img src={AboutLogo} alt="Logo" />
            </Grid>
            <Grid
              item
              xs={8}
              sm={5}
              lg={4}
              xl={4.5}
              sx={{ margin: "auto" }}
              className="margintop"
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h2">ABOUT US</Typography>
                <Typography>
                  BojaPay is a cryptocurrency exchange that will enable users to
                  buy and sell cryptocurrencies in minutes (bitcoin, ethereum,
                  usdt, etc.), and assist local businesses to accept
                  cryptocurrencies.
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={4.5} lg={5} xl={6}>
              <Box className="aboutimages">
                <span className="imagesizes">
                  <img src={Aboutcircle1} alt="Crypto"></img>
                </span>
                <span className="topcircle">
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="21.5" cy="21.5" r="21.5" fill="#000066" />
                  </svg>
                </span>
                <br />
                <svg
                  width="81"
                  height="81"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40.5" cy="40.5" r="40.5" fill="#2B9EB3" />
                </svg>
                <span className="pad imagesizes">
                  <img src={Aboutcircle2} alt="Crypto"></img>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
