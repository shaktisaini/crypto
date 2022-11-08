import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    body1: {
      fontWeight: 400,
      textAlign: "center",
      fontSize: "2em",
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

const Why = () => {
  return (
    <Box sx={{ padding: "5%" }}>
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <Typography
            variant="h1"
            style={{ fontWeight: 600, lineHeight: "33px", fontStyle: "normal" }}
          >
            NUMBERS ARE EVERYTHING
          </Typography>
          <br />
          <Grid container spacing={2} sx={{ paddingTop: "5%" }}>
            <Grid item xs={4}>
              <Typography variant="body1">101k+</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">599k+</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">24/7</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography color="#2B9EB3" variant="h1">
                Users
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="#2B9EB3" variant="h1">
                Transactions
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="#2B9EB3" variant="h1">
                Instant Funding!
              </Typography>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export default Why;
