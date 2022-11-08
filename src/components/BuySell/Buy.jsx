import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Main from "../Layout/Main";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CustomTextFieldTwo } from "../CustomTextBox";
import { Custombutton } from "../Button";
import { Link } from "react-router-dom";
import { request, endpoints } from "./../../lib/request";
import AssetCard from "../Assets/AssetCard";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { currencyFormat } from "../../lib/common";

const BuySell = () => {
  const [assets, setAssets] = useState([]);
  const [account_bank, setAccountBank] = useState("");
  const [banks, setBanks] = useState([]);
  const [amount, setAmount] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [assetValue, setAssetValue] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOpt] = useState("");
  const [reference, setReference] = useState("");

  const handleRadioChange = (event) => {
    setAssetValue(event.target.value);
  };

  useEffect(() => {
    getData();
    console.log(assets);
  }, []);

  const getData = async () => {
    try {
      const { data } = await request.get(`${endpoints.assets.main}?page=all`);
      const banks = await request.get(`${endpoints.settings.banks}?page=all`);
      setAssets(data.assets);
      setBanks(banks.data.banks);
    } catch (error) {}
  };

  const convertNewAmounts = async (amountValue) => {
    if (!assetValue) {
      toast.error(`Please your cryptocurrency asset to trade in`);
      return ``;
    }
    try {
      const { data } = await request.post(`${endpoints.assets.convert}`, {
        from: assetValue,
        to: "NGN",
        amount: amountValue ? amountValue : 1,
      });

      setConvertedAmount(data.amount);
    } catch (error) {}
  };

  const makeBuy = async () => {
    const newAssets = [...assets];

    if (!assetValue) {
      toast.error(`Please choose an asset to buy`);
      return;
    }
    try {
      const nAsset = newAssets.find((asset) => asset.symbol === assetValue);
      const { data } = await request.post(
        endpoints.transactions.createTransaction,
        {
          amount: convertedAmount,
          account_bank,
          account_number,
          description: `Buy ${nAsset.symbol}`,
          asset: nAsset.id,
          transaction_type: `buy`,
        }
      );

      toast.success(
        `${data.message}. Please proceed to verify you transaction`
      );

      if (!data.transaction.complete_message) {
        setReference(data.transaction.reference);
      }
      setMessage(data.transaction.narration);
    } catch (error) {
      const { response } = error;
      response?.data?.errors?.forEach((err) => {
        toast.error(`Please choose an asset to buy`);
      });
      console.log(error);
    }
  };

  const verifyPayment = async () => {
    try {
      const { data } = await request.post(
        endpoints.transactions.verifyPayment,
        {
          otp: otp,
          reference,
        }
      );

      toast.success(`${data.message}. Processing verification`);

      setMessage(data.transaction.narration);
      setReference("");
    } catch (error) {
      const { response } = error;
      response?.data?.errors?.forEach((err) => {
        toast.error(`Error verifying your payment`);
      });
    }
  };

  const onTagsChange = (event, option) => {
    setAccountBank(option.value);
    console.log("AC", account_bank);
    setAccountBank(option.value);
    console.log("AC", account_bank);
  };

  return (
    <Main>
      <Box sx={{ padding: "0 2% 0 2%" }}>
        <Toolbar />
        <Toolbar />
        <Box sx={{ pt: "3%", pr: "5%", pl: "5%" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
            BUY BITCOIN IN USD
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} xl={5}>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "38px",
                  border: "1px solid #868694",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    mt: "2%",
                    ml: "4%",
                    mr: "4%",
                    mb: "2%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Link to="/Buy" sx={{ width: "30%" }}>
                    <Custombutton
                      sx={{
                        borderRadius: "45px",
                      }}
                    >
                      BUY
                    </Custombutton>
                  </Link>

                  <Link to="/Sell">
                    <Custombutton
                      sx={{
                        backgroundColor: "transparent !important",
                        border: "1px solid #000066",
                        color: "#000066 !important",
                        borderRadius: "45px",
                        width: "30%",
                        fontFamily: "lufgablack-webfont",
                        fontsize: "1.2em",
                        "&:active ": {
                          backgroundColor: "#000066 !important",
                          color: "white",
                        },
                      }}
                    >
                      SELL
                    </Custombutton>
                  </Link>
                </Box>
                <Box sx={{ m: "2%" }}>
                  <Divider sx={{ border: "2px solid #868694" }} />
                </Box>
                <Box sx={{ m: "2%" }}>
                  <Typography sx={{ fontWeight: 400, fontSize: "20px" }}>
                    Choose your CryptoCurrency
                  </Typography>
                </Box>
                <Box
                  sx={{
                    ml: "4%",
                    pr: "13%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl sx={{ m: 3 }} variant="standard">
                    <RadioGroup
                      aria-labelledby="demo-error-radios"
                      name="Asset"
                      value={assetValue}
                      onChange={handleRadioChange}
                    >
                      {assets.map((asset, index) => (
                        <FormControlLabel
                          value={asset.symbol}
                          control={<Radio />}
                          label={`${asset.name ? asset.name : ``} (${
                            asset.symbol
                          })`}
                          key={index}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
                {/* <Box sx={{ ml: "2%" }}>
                  <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                    Which currency would you like PAY?
                  </Typography>
                </Box> */}
                <Box sx={{ width: "90%", ml: "2%" }}>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: "3%" }}
                  ></Grid>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                        {assetValue?.toUpperCase()} Amount
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CustomTextFieldTwo
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value);
                          convertNewAmounts(e.target.value);
                        }}
                        size="small"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={2}
                    sx={{ mt: "3%" }}
                    alignItems="center"
                  >
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                        Choose Bank
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Autocomplete
                        disablePortal
                        isOptionEqualToValue={(option) => option.value}
                        onChange={onTagsChange}
                        id="combo-box-demo"
                        options={banks.map((item) => {
                          return { label: item.name, value: item.code };
                        })}
                        renderInput={(params) => (
                          <TextField {...params} label="Banks" />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={2}
                    sx={{ mt: "3%" }}
                    alignItems="center"
                  >
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                        Account Number
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CustomTextFieldTwo
                        value={account_number}
                        onChange={(e) => {
                          setAccountNumber(e.target.value);
                        }}
                        size="small"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ m: "2%" }}>
                  <Divider sx={{ border: "2px solid #868694" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    m: "2%",
                    justifyContent: "space-between",
                    mb: "4%",
                  }}
                >
                  {convertedAmount ? (
                    <Typography>
                      Total : {currencyFormat(convertedAmount)}
                      {` ` + "NGN".toUpperCase()}
                    </Typography>
                  ) : (
                    <Typography></Typography>
                  )}
                  {/* <Link to="/BuyCheckout"> */}
                  <Custombutton
                    sx={{
                      backgroundColor: "transparent !important",
                      border: "1px solid #000066",
                      color: "#000066",
                      width: "40%",
                    }}
                    onClick={() => makeBuy()}
                  >
                    SUBMIT
                  </Custombutton>
                  {/* </Link> */}
                </Box>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {reference ? (
                    <Box
                      sx={{
                        pt: "3%",
                        pr: "5%",
                        pl: "5%",
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <Typography>
                        <p style={{ textAlign: "center" }}>{message}</p>
                      </Typography>
                      <Grid
                        container
                        spacing={2}
                        sx={{ mt: "3%" }}
                        alignItems="center"
                      >
                        <Grid item xs={12} md={2}>
                          <Typography
                            sx={{ fontWeight: 600, fontSize: "20px" }}
                          >
                            OTP
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <CustomTextFieldTwo
                            value={otp}
                            onChange={(e) => {
                              setOpt(e.target.value);
                            }}
                            size="small"
                            sx={{ width: "100%" }}
                          />
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <Custombutton
                            sx={{
                              backgroundColor: "transparent !important",
                              border: "1px solid #000066",
                              color: "#000066",
                              width: "40%",
                            }}
                            onClick={() => verifyPayment()}
                          >
                            VERIFY
                          </Custombutton>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : (
                    <></>
                  )}
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
              <Grid container spacing={2}>
                {assets.map((asset, index) => (
                  <AssetCard asset={asset} key={index} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Main>
  );
};

export default BuySell;
