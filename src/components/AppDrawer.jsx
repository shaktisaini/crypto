import {
  Box,
  Button,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./../context/user-context";

const drawerWidth = 240;

const style = {
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  height: "30%",
  width: "100%",
  color: "black",
};

const AppDrawer = () => {
  const navigate = useNavigate();
  const authContext = useContext(UserContext);
  const signOutUser = () => {
    authContext.setToken("");
    authContext.setUser(null);
    console.log("About To LOG OUT");
    return navigate("/");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", sm: "block", md: "block" },
          fontFamily: "lufgamedium-webfont",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#D9D9D9",
          },
        }}
        open
      >
        <Toolbar />
        <Box sx={{ mt: "7%" }}>
          <Box sx={style}></Box>
          <Link to="/Dashboard">
            <Button sx={style}>
              <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                DASHBOARD
              </Typography>
            </Button>
          </Link>

          {authContext?.user?.is_super_admin ? (
            <>
              <Link to="/UserManagement">
                <Button sx={style}>
                  <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                    MANAGE USERS
                  </Typography>
                </Button>
              </Link>
              <Link to="/Assets">
                <Button sx={style}>
                  <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                    MANAGE ASSETS/TOKENS
                  </Typography>
                </Button>
              </Link>
              <Link to="/AdminTransactions">
                <Button sx={style}>
                  <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                    MANAGE TRANSACTIONS
                  </Typography>
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/Sell">
                <Button sx={style}>
                  <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                    {/* BUY/SELL */}
                    SELL
                  </Typography>
                </Button>
              </Link>
              {/* <Link to="/DepositWithdraw">
            <Button sx={style}>
              <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                DEPOSIT / WITHDRAW
              </Typography>
            </Button>
          </Link> */}
              <Link to="/Notifications">
                <Button sx={style}>
                  <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                    NOTIFICATIONS
                  </Typography>
                  <Badge
                    badgeContent={4}
                    color="info"
                    sx={{
                      ml: "15px",
                      "& .MuiBadge-badge": {
                        backgroundColor: "#000066",
                      },
                    }}
                  />
                </Button>
              </Link>
              <Link to="/ExchangeTransfer">
                <Button sx={style}>
                  <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                    EXCHANGE / TRANSFER
                  </Typography>
                </Button>
              </Link>
            </>
          )}
          <Link to="/Settings">
            <Button sx={style}>
              <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                PROFILE
              </Typography>
            </Button>
          </Link>
          <Link to="/SupportClient">
            <Button sx={style}>
              <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                {authContext.user && authContext.user.is_super_admin
                  ? `CLIENT `
                  : ""}
                SUPPORT
              </Typography>
            </Button>
          </Link>

          <Button sx={style} onClick={() => signOutUser()}>
            <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
              SIGN OUT
            </Typography>
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
