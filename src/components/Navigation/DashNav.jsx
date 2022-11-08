import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import "../../app.scss";
import React from "react";
import AppDrawer from "../AppDrawer";
import { Link } from "react-router-dom";
import { Custombutton } from "../Button";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import DashAvatar from "./DashAvatar";
import logo from "../../assets/mainLogo.svg";

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
      fontSize: "1em",
      fontFamily: "lufgalight-webfont",
    },
  },
});
theme = responsiveFontSizes(theme);

const DashNav = () => {
  return (
    <Box>
      <AppBar
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#000066" }}
      >
        <Toolbar>
          <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{ padding: "1%" }}>
              <Box sx={{ display: "flex", alignItems: "center" , justifyContent:"space-between"}}>
                <Box>
                  {" "}
                  <img src={logo} height="66px" width="46" />
                </Box>
                <Box display={{ xs: "none", sm: "none", md: "none", lg:"flex" }}>
                  <Stack marginLeft="5%">
                    <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
                      BALANCE : 0 ₦
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
                      BALANCE : 100$
                    </Typography>
                  </Stack>
                  <Stack marginLeft="5%">
                    <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
                      PENDING ORDER : 0
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
                      BITCOIN BALANCE : 0.0025 BTC
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "50%",
                    ml: "15%",
                  }}
                  display={{ xs: "none", sm: "none", md: "none", lg:"flex" }}
                >
                  <Link to="/Wallet">
                    <Box sx={{ cursor: "pointer" }}>
                      <Typography variant="h1">WALLET</Typography>
                    </Box>
                  </Link>
                  <Link to="/ExchangeTransfer">
                    <Box>
                      <Typography variant="h1">EXCHANGE</Typography>
                      
                    </Box>
                  </Link>
                  {/* <Link to="/Buy">
                    <Box>
                      <Custombutton>Buy</Custombutton>
                    </Box>
                  </Link> */}
                  <Link to="/Sell">
                    <Box>
                      <Custombutton>Sell</Custombutton>
                    </Box>
                  </Link>
                </Box>
                <Box
                  sx={{ ml: "5%" }}
                  display={{ xs: "none", sm: "none", md: "flex" }}
                >
                  <DashAvatar />
                </Box>
                <Box
                  
                  display={{ xs: "flex", sm: "flex", md: "none" }}
                >
                  <DashAvatar />
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      <AppDrawer />
    </Box>
  );
};

export default DashNav;
