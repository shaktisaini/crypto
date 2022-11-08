import { AppBar } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { Custombutton } from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Hambuger } from "./Hambuger";
import { SignupButton } from "../Authentication/SignupButton";
import { SignInButton } from "../Authentication/SignInButton";
import logo from "../../assets/mainLogo.svg";
import { request, endpoints } from "./../../lib/request";
import { currencyFormat } from "./../../lib/common";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user-context";

const HomeNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [amount, setAmount] = useState(1);
  const [newAmount, setNewAmount] = useState("");

  const authContext = useContext(UserContext);

  useEffect(() => {
    convertAssets();
  }, []);

  const convertAssets = async () => {
    try {
      const { data } = await request.post(endpoints.assets.convert, {
        from: "BTC",
        to: "NGN",
        amount: amount,
      });
      if (data.amount) {
        setNewAmount(data.amount);
      }
    } catch (error) {
      console.log(`Error`, error.message);
    }
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <AppBar
        sx={{ backgroundColor: "#000066", fontFamily: "lufgalight-webfont" }}
      >
        <Toolbar>
          <Container
            maxWidth="xl"
            disableGutters={true}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box
              sx={{
                width: "35%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link to="/">
                <img src={logo} width="32.38px" height="46.58px" />
              </Link>
              <Typography
                className="nav-currency"
                sx={{ fontFamily: "lufgalight-webfont" }}
              >
                BTC PRICE : {newAmount ? currencyFormat(newAmount) : ``}
              </Typography>
              {/* <Typography sx={{ fontFamily: "lufgalight-webfont" }}>
                Sell : 12345
              </Typography> */}
            </Box>
            <Box
              sx={{
                width: "30%",
                justifyContent: "space-between",
              }}
              display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
            >
              {authContext.user ? (
                <>
                  <Link to="/Dashboard">
                    <Custombutton
                      sx={{
                        backgroundColor: "transparent !important",
                        "&:hover ": {
                          border: "1px solid white",
                        },
                        borderRadius: "23px",
                      }}
                    >
                      Dashboard
                    </Custombutton>
                  </Link>

                  <Link to="/Settings">
                    <Custombutton
                      sx={{
                        backgroundColor: "transparent !important",
                        "&:hover ": {
                          border: "1px solid white",
                        },
                        borderRadius: "23px",
                      }}
                    >
                      Profile
                    </Custombutton>
                  </Link>
                </>
              ) : (
                <>
                  <SignupButton label="Sign Up" />

                  <SignInButton label="Sign In" />
                </>
              )}

              <Link to="/Promotions">
                <Custombutton
                  sx={{
                    backgroundColor: "transparent !important",
                    "&:hover ": {
                      border: "1px solid white",
                    },
                    borderRadius: "23px",
                  }}
                >
                  PROMOTIONS
                </Custombutton>
              </Link>
            </Box>
            <Box display={{ md: "none", xs: "flex", alignItems: "center" }}>
              <MenuIcon onClick={handleClick} />
              <Hambuger
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
              />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomeNavbar;
