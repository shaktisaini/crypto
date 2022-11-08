import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Custombutton } from "../Button";
import { CustomTextField } from "../CustomTextBox";
import { request, endpoints } from "../../lib/request";
import { useState } from "react";
import { useEffect } from "react";
import { currencyFormat } from "../../lib/common";

const Swap = () => {
  const [amount, setAmount] = useState(1);
  const [newAmount, setNewAmount] = useState("");

  useEffect(() => {
    convertAssets(amount);
  }, []);

  const convertAssets = async (amountEntered) => {
    try {
      const { data } = await request.post(endpoints.assets.convert, {
        from: "BTC",
        to: "NGN",
        amount: amountEntered,
      });
      if (data.amount) {
        setNewAmount(data.amount);
      }
    } catch (error) {}
  };
  return (
    <Box
      className="swap"
      sx={{ backgroundColor: "#000066", marginBottom: "21px" }}
    >
      <Container className="swap-content" maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ pt: "10%", pb: "10%" }}>
            <Box sx={{ color: "white" }}>
              <Typography
                className="swap-content__title"
                sx={{
                  fontWeight: 600,
                  fontSize: "25px",
                  fontStyle: "normal",
                }}
              >
                PRICE TICKERS
              </Typography>
              <Typography
                className="swap-content__paragraph"
                sx={{ fontWeight: "14px", fontWeight: 400 }}
              >
                Calculate the price to buy or sell Bitcoin & Perfect Money in
                Naira.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              pt: "4%",
              pb: "4%",
            }}
          >
            <Box sx={{ border: "1px solid white", borderRadius: "34px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  mt: "5%",
                }}
              >
                <Custombutton
                  sx={{
                    backgroundColor: "transparent !important",
                    "&:hover ": {
                      border: "1px solid white",
                    },
                    borderRadius: "23px",
                    width: "20%",
                  }}
                >
                  Buy
                </Custombutton>
                <Custombutton
                  sx={{
                    borderRadius: "23px",
                    width: "20%",
                    backgroundColor: "#000066",
                    "&:hover ": {
                      backgroundColor: "#000066",
                      border: "1px solid white",
                    },
                  }}
                >
                  Sell
                </Custombutton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  color: "white",

                  justifyContent: "space-between",
                  mt: "5%",
                }}
              >
                <Box sx={{ width: "50%" }}>
                  <Typography sx={{ ml: "15%", fontWeight: 600 }}>
                    BTC
                  </Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Typography sx={{ ml: "15%", fontWeight: 600 }}>
                    NGN
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  m: "5%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <CustomTextField
                  sx={{ width: "45%" }}
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    convertAssets(e.target.value);
                  }}
                />
                <Typography sx={{ fontWeight: 600, fontSize: "28px" }}>
                  =
                </Typography>
                <CustomTextField
                  sx={{ width: "45%" }}
                  disabled={true}
                  value={newAmount ? currencyFormat(newAmount) : ``}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Swap;
