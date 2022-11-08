import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";

export default function How() {
  return (
    <Box sx={{ backgroundColor: "#2B9EB3", pb: "3%", mb: "3%" }}>
      <Container maxWidth="xl">
        <Grid container sx={{ mb: "3%" }}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "white",
              pt: "7%",
            }}
          >
            <Box>
              <Stack sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "normal" }}>
                  BOJA PAY MAKES TRADING BITC OIN IN MINUTES!
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "normal" }}>
                  {" "}
                  How To Buy Or Sell Bitcoins In BOJAPAY
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "white",
              pt: "4%",
            }}
          >
            <List sx={{ bgcolor: "white", borderRadius: "23px" }}>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "white",
                      mr: "2%",
                    }}
                  >
                    <img src={one} height="36px" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        color="text.primary"
                        sx={{ fontSize: "normal", fontWeight: 600 }}
                      >
                        Register And Verify Your ID
                      </Typography>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inline",
                          fontSize: "normal",
                        }}
                        component="span"
                        color="text.primary"
                      >
                        Bojapay will require your Bank Verification Number
                        (BVN), Government-Issued Photo ID Card, and Selfie
                        holding Photo ID Card documents to validate your
                        account.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "white",
              pt: "4%",
            }}
          >
            <List sx={{ bgcolor: "white", borderRadius: "23px", pt: "4%" }}>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "white",
                      mr: "2%",
                    }}
                  >
                    <img src={two} height="36px" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        color="text.primary"
                        sx={{ fontSize: "normal", fontWeight: 600 }}
                      >
                        Direct BUY/SELL in MINUTES!
                      </Typography>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inline",
                          fontSize: "normal",
                        }}
                        component="span"
                        color="text.primary"
                      >
                        Login to your BOJAPAY account, Select Buy or Sell, and
                        fill the amount. Complete your transaction using NAIRA
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "white",
              pt: "4%",
            }}
          >
            <List sx={{ bgcolor: "white", borderRadius: "23px" }}>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "white",
                      mr: "2%",
                    }}
                  >
                    <img src={three} height="36px" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        color="text.primary"
                        sx={{ fontSize: "normal", fontWeight: 600 }}
                      >
                        Get Funded Instantly!
                      </Typography>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inline",
                          fontSize: "normal",
                        }}
                        component="span"
                        color="text.primary"
                      >
                        Processing time is instant and automated 24/7. Once our
                        system confirms your transaction, it will be marked as
                        “completed” and money sent immediately.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
