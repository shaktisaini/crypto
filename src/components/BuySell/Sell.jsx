import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Main from "../Layout/Main";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CustomTextFieldTwo } from "../CustomTextBox";
import { Custombutton } from "../Button";
import { Link } from "react-router-dom";
import { request, endpoints } from "./../../lib/request";
import AssetCard from "../Assets/AssetCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useEffect } from "react";
import { formatAddress } from "../../lib/common";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import CountdownTimer from "../Timer/CountDownTimer";
import QRCode from "react-qr-code";

const BuySell = () => {
  const [assets, setAssets] = useState([]);
  const [value, setValue] = useState(null);
  const [isTimer, setIsTimer] = useState(false);
  const [assetAmount, setAssetAmount] = useState("");
  const [nairaAmount, setNairaAmount] = useState("");
  const [assetValue, setAssetValue] = useState(null);

  const [timer, setTimer] = useState(0);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    const newAssets = [...assets];
    setAssetValue(newAssets.find((item) => item.symbol === event.target.value));
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await request.get(
        `${endpoints.assets.main}?page=all&is_active=true`
      );
      setAssets(data.assets);
    } catch (error) {}
  };

  const convertAssetToNairaAmount = async (amountValue) => {
    if (!assetValue) {
      toast.error(`Please your cryptocurrency asset to trade in`);
      return ``;
    }
    try {
      const { data } = await request.post(`${endpoints.assets.convert}`, {
        from: assetValue.symbol,
        to: "NGN",
        amount: amountValue ? amountValue : 1,
      });

      setNairaAmount(data.amount);
    } catch (error) {}
  };

  const convertNairaToAssetAmount = async (amountValue) => {
    if (!assetValue) {
      toast.error(`Please your cryptocurrency asset to trade in`);
      return ``;
    }
    try {
      const { data } = await request.post(`${endpoints.assets.convert}`, {
        from: "NGN",
        to: assetValue.symbol,
        amount: amountValue ? amountValue : 1,
      });

      setAssetAmount(data.amount);
    } catch (error) {}
  };

  const makeBuy = async () => {
    const newAssets = [...assets];

    if (!assetValue) {
      toast.error(`Please choose an asset to buy`);
      return;
    }
    try {
      const nAsset = newAssets.find(
        (asset) => asset.symbol === assetValue.symbol
      );

      setTimer(30 * 60 * 1000 + new Date().getTime());
      const { data } = await request.post(
        `${endpoints.transactions.createTransaction}/sell`,
        {
          amount: nairaAmount,
          description: `Buy ${nAsset.symbol}`,
          timer: 30 * 60 * 1000 + new Date().getTime(),
          asset: nAsset.id,
          transaction_type: `sell`,
        }
      );

      setIsTimer(true);

      toast.success(`${data.message}. Please wait`);
    } catch (error) {
      const { response } = error;
      response?.data?.errors?.forEach((err) => {
        toast.error(`Please choose an asset to buy`);
      });
      console.log(error);
    }
  };

  return (
    <Main>
      <Box sx={{ padding: "0 2% 0 2%" }}>
        <Toolbar />
        <Toolbar />
        <Box sx={{ pt: "3%", pr: "5%", pl: "5%" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
            SELL BITCOIN IN NAIRA
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
                  <Link to="/Sell" sx={{ width: "30%" }}>
                    <Custombutton
                      sx={{
                        backgroundColor: "transparent !important",
                        // border: "1px solid #2B9EB3",
                        color: "#2B9EB3 !important",
                        borderRadius: "4px",
                        width: "30%",
                        fontFamily: "lufgablack-webfont",
                      }}
                    >
                      Selling
                    </Custombutton>
                  </Link>
                  {/* <Link to="/Sell" sx={{ width: "30%" }}>
                    <Custombutton
                      sx={{
                        backgroundColor: "#000066 !important",
                        border: "1px solid #000066",
                        color: "white",
                        borderRadius: "45px",
                        width: "30%",
                        fontFamily: "lufgablack-webfont",
                        fontsize: "1.2em",
                      }}
                    >
                      SELL
                    </Custombutton>
                  </Link> */}
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
                      value={value}
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
                {assetValue ? (
                  <>
                    <Box sx={{ ml: "2%" }}>
                      <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                        {/* Send your asset to the address below; */}
                      </Typography>
                    </Box>

                    <Box sx={{ width: "90%", ml: "2%" }}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: "3%" }}
                      >
                        {!isTimer ? (
                          <>
                            <Grid
                              container
                              spacing={2}
                              sx={{ mt: "3%", p: "3.8%" }}
                              alignItems="center"
                            >
                              <Grid item xs={12} md={6}>
                                <Typography
                                  sx={{ fontWeight: 600, fontSize: "20px" }}
                                >
                                  {`Amount of ${assetValue?.symbol}  to Sell`}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <CustomTextFieldTwo
                                  value={assetAmount}
                                  onChange={(e) => {
                                    setAssetAmount(e.target.value);
                                    convertAssetToNairaAmount(e.target.value);
                                  }}
                                  size="small"
                                  sx={{ width: "100%" }}
                                />
                              </Grid>
                            </Grid>

                            <Grid
                              container
                              spacing={2}
                              sx={{ mt: "3%", p: "3.8%" }}
                              alignItems="center"
                            >
                              <Grid item xs={12} md={6}>
                                <Typography
                                  sx={{ fontWeight: 600, fontSize: "20px" }}
                                >
                                  Amount to Recieve in (NAIRA)
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <CustomTextFieldTwo
                                  value={nairaAmount}
                                  size="small"
                                  onChange={(e) => {
                                    setNairaAmount(e.target.value);
                                    convertNairaToAssetAmount(e.target.value);
                                  }}
                                  sx={{ width: "100%" }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              spacing={2}
                              sx={{
                                mt: "3%",
                                p: "1.2%",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                              }}
                              alignItems="center"
                            >
                              <Typography
                                sx={{ textAlign: "center", mb: "1%" }}
                              >
                                RECIEVING WALLET
                              </Typography>
                              <Typography>{assetValue?.address}</Typography>
                            </Grid>

                            <Grid
                              container
                              spacing={2}
                              sx={{ mt: "3%", p: "3.8%" }}
                              alignItems="center"
                            >
                              <Grid item xs={12} md={6}>
                                <Typography
                                  sx={{ fontWeight: 600, fontSize: "20px" }}
                                >
                                  <div
                                    title="Copy to clipboard"
                                    style={{
                                      display: "flex",
                                      justifyItems: "center",
                                      justifyContent: "space-around",
                                    }}
                                  >
                                    <span>
                                      {assetValue?.address
                                        ? formatAddress(assetValue?.address)
                                        : ``}
                                    </span>
                                    <CopyToClipboard
                                      text={assetValue?.address}
                                      onCopy={() =>
                                        toast.success(
                                          "copied address to clipboard"
                                        )
                                      }
                                    >
                                      <span>
                                        <ContentCopyIcon />
                                      </span>
                                    </CopyToClipboard>
                                  </div>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <div
                                  style={{
                                    background: "white",
                                    padding: "16px",
                                    width: "60px",
                                  }}
                                >
                                  <QRCode
                                    size={150}
                                    title={assetValue?.address}
                                    value={assetValue?.address}
                                  />
                                </div>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              spacing={2}
                              sx={{
                                mt: "3%",
                                p: "3.8%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                              }}
                              alignItems="center"
                            >
                              <Custombutton
                                style={{ margin: "1%" }}
                                onClick={() => makeBuy()}
                              >
                                {" "}
                                SUBMIT{" "}
                              </Custombutton>
                            </Grid>
                          </>
                        ) : (
                          <></>
                        )}

                        {/* timer */}
                        {isTimer ? (
                          <div>
                            <Grid
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Grid item xs={12} md={7}>
                                <Typography sx={{ fontSize: "20px" }}>
                                  Send your{" "}
                                  <b>
                                    {assetAmount} {assetValue?.symbol}
                                  </b>{" "}
                                  to Address:
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                spacing={2}
                                sx={{
                                  p: "1.2%",
                                  display: "flex",
                                  justifyContent: "center",
                                  flexDirection: "column",
                                }}
                                alignItems="center"
                              >
                                <Typography
                                  sx={{ textAlign: "center", mb: "1%" }}
                                >
                                  RECIEVING WALLET
                                </Typography>
                                <div
                                  style={{
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "space-between",
                                    gap: "3%",
                                  }}
                                >
                                  <Typography>{assetValue?.address}</Typography>
                                  <CopyToClipboard
                                    text={assetValue?.address}
                                    onCopy={() =>
                                      toast.success(
                                        "copied address to clipboard"
                                      )
                                    }
                                  >
                                    <span>
                                      <ContentCopyIcon />
                                    </span>
                                  </CopyToClipboard>
                                </div>
                                <Grid item xs={12} md={6}>
                                  <div
                                    style={{
                                      background: "white",
                                      padding: "16px",
                                      width: "60px",
                                    }}
                                  >
                                    <QRCode
                                      size={150}
                                      title={assetValue?.address}
                                      value={assetValue?.address}
                                    />
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              spacing={2}
                              sx={{
                                mt: "3%",
                                mb: "2%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              alignItems="center"
                            >
                              <CountdownTimer targetDate={timer} />
                            </Grid>
                          </div>
                        ) : (
                          <></>
                        )}

                        {/* end of timer */}
                      </Grid>
                    </Box>
                    <Box sx={{ m: "2%" }}>
                      <Divider sx={{ border: "2px solid #868694" }} />
                    </Box>
                  </>
                ) : (
                  <></>
                )}

                <Box
                  sx={{
                    display: "flex",
                    m: "2%",
                    justifyContent: "space-between",
                    mb: "4%",
                  }}
                >
                  {/* <Typography>Total : 17189736.62 NGN</Typography> */}
                  {/* <Custombutton
                    sx={{
                      backgroundColor: "transparent !important",
                      border: "1px solid #000066",
                      color: "#000066",
                      width: "40%",
                    }}
                  >
                    Next
                  </Custombutton> */}
                </Box>
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
