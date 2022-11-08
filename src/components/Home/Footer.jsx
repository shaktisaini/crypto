import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import BannerLogo from "../../assets/BannerLogo.svg";
import "../../app.scss";
import { Link } from "react-router-dom";
import { SignInButton } from "../Authentication/SignInButton";
import { SignupButton } from "../Authentication/SignupButton";

let theme = createTheme({
  typography: {
    body1: {
      fontWeight: 400,
      fontSize: "1em",
      color: "white",
      fontFamily: "lufgalight-webfont",
    },
    h1: {
      fontWeight: 600,
      textAlign: "center",
      fontSize: "1.3em",
      fontFamily: "lufgalight-webfont",
    },
  },
});
theme = responsiveFontSizes(theme);

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000066", p: "6%" }}>
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.0rem",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} md={4}>
                <SignInButton
                  label="Sign In"
                  style={{
                    padding: "0 !important",
                    fontWeight: 400,
                    padding: "0 !important",
                    lineHeight: "18px",
                    marginBottom: "10px",
                    fontSize: "14px",
                    marginLeft: "-5px",
                    border: "none",
                    "&:hover ": {
                      border: "none !important",
                    },
                    fontFamily: "Lufga !important",
                  }}
                ></SignInButton>
                <SignupButton
                  label="Sign Up"
                  style={{
                    padding: "0 !important",
                    fontWeight: 400,
                    padding: "0 !important",
                    lineHeight: "18px",
                    marginBottom: "10px",
                    marginLeft: "-4px",
                    fontSize: "14px",
                    border: "none",
                    "&:hover ": {
                      border: "none !important",
                    },
                    fontFamily: "Lufga !important",
                  }}
                ></SignupButton>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 400,
                    lineHeight: "18px",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontFamily: "Lufga",
                  }}
                >
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 400,
                    lineHeight: "18px",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontFamily: "Lufga",
                  }}
                >
                  About Us
                </Typography>
                <Link to="/Privacy">
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 400,
                      lineHeight: "18px",
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontFamily: "Lufga",
                    }}
                  >
                    Privacy & Policy
                  </Typography>
                </Link>
                <Link to="/FAQS">
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 400,
                      lineHeight: "18px",
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontFamily: "Lufga",
                    }}
                  >
                    FAQS
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 400,
                    lineHeight: "18px",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontFamily: "Lufga",
                  }}
                >
                  Price Tickers
                </Typography>
                <Link to="/Promotions">
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 400,
                      lineHeight: "18px",
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontFamily: "Lufga",
                    }}
                  >
                    Promotions
                  </Typography>
                </Link>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 400,
                    lineHeight: "18px",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontFamily: "Lufga",
                  }}
                >
                  Our Blog
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                className="rights"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  justifyContent: "center",
                }}
              >
                <img style={{ width: "120px" }} src={BannerLogo} alt="Banner" />
                <Typography
                  color="white"
                  variant="body2"
                  style={{ fontSize: "normal", fontSize: "14px" }}
                >
                  © All rights reserved by - BojaPAY {new Date().getFullYear()}{" "}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export default Footer;
