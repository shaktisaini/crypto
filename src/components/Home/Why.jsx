import { Box, Container, Typography } from "@mui/material";
import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    body1: {
      fontFamily: "lufgalight-webfont",
      textAlign: "center",
      fontSize: "1em",
    },
    h1: {
      fontWeight: 600,
      textAlign: "center",
      fontSize: "1.5em",
      fontFamily: "lufgalight-webfont",
    },
  },
});
theme = responsiveFontSizes(theme);

const Why = () => {
  return (
    <Box
      sx={{ backgroundColor: "#000066", marginBottom: "75px", padding: "5%" }}
    >
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <Typography
            color="white"
            variant="h1"
            sx={{
              marginBottom: "26px",
            }}
          >
            {" "}
            Why BOJAPAY?{" "}
          </Typography>
          <Typography
            color="white"
            style={{ fontSize: "15px", lineHeight: "23px" }}
          >
            Protected login <br />
            multi-cryptocurrency support <br />
            Multi fiat currency support (Naira and USD) <br />
            List own coin <br />
            API integration <br />
            Wallet integration <br />
            Fiat support <br />
            perceiving current status <br />
            Perceiving and displaying the current coin price in real time <br />
          </Typography>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export default Why;
