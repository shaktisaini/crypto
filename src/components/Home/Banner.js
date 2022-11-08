import React, { useState } from "react";
import { Box, Container, List, ListItem, Toolbar } from "@mui/material";
import BannerLogo from "../../assets/BannerLogo.svg";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import "../../app.scss";
import { Custombutton } from "../Button";
import banner from "../../assets/banner.png";
import { SignUp } from "./../Authentication/SignUp";
let theme = createTheme({
  typography: {
    h2: {
      fontWeight: 600,
      textAlign: "right",
      fontSize: "1.8em",
    },
  },
});
theme = responsiveFontSizes(theme);

const Banner = () => {
  const [open, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  return (
    <Box
      className="banner"
      sx={{
        p: 2,
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.77)",
        backgroundBlendMode: "darken",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ overflow: "hidden", paddingTop: "4%", paddingBottom: "4%" }}
      >
        <Toolbar />
        <Box className="right">
          <img style={{ height: "123px" }} src={BannerLogo} alt="Banner" />
          <ThemeProvider theme={theme}>
            <Typography
              className="right__title"
              color="white"
              fontFamily="lufgalight-webfont"
              style={{ fontSize: "30px", fontWeight: 600 }}
            >
              Trade Bitcoin In Minutes
            </Typography>
          </ThemeProvider>
        </Box>
        <Box className="left">
          <List
            sx={{
              listStyle: "disc",
              fontSize: "normal",
              fontWeight: "600",
            }}
          >
            <ListItem
              sx={{
                display: "list-item",
                color: "white",
              }}
            >
              Buy and Sell Bitcoin Instantly
            </ListItem>
            <ListItem sx={{ display: "list-item", color: "white" }}>
              Trade Crypto with Confidence
            </ListItem>
            <ListItem sx={{ display: "list-item", color: "white" }}>
              Real-time Trading & Automated Instant Payments
            </ListItem>
          </List>
          <Custombutton
            sx={{
              ml: "4%",
              mt: "2%",
              whiteSpace: "nowrap",
            }}
            onClick={handleOpen}
          >
            Create Account
          </Custombutton>
          <SignUp open={open} setOpenModal={setOpenModal} />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
