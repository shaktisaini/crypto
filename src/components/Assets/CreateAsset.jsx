import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CustomTextFieldTwo } from "../CustomTextBox";
import { useState } from "react";
import { Custombutton } from "../Button";
import { endpoints, request } from "../../lib/request";
import { Grid } from "@mui/material";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default function CreateAsset({ open, setOpen, getData }) {
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [selling_price, setSellingPrice] = useState("");
  const [buying_price, setBuyingPrice] = useState("");
  const [total_liquidity, setTotalLiquidity] = useState("");
  const [image_url, setImageURL] = useState("");
  const [address, setAddress] = useState("");
  const [symbol, setSymbol] = useState("");

  const createNewAsset = async () => {
    try {
      const { data } = await request.post(endpoints.assets.main, {
        name,
        symbol,
        address,
        image_url,
        selling_price,
        buying_price,
        total_liquidity,
      });

      if (data) {
        console.log("Asset", data);
        getData();
        toast.success(`Successfully create a new toke/asset`);
      }
    } catch (error) {
      error?.response?.data?.errors.forEach((err) => {
        toast.error(err.message);
      });
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ marginBottom: "4%" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                ASSET/TOKEN BASIC INFORMATION
              </Typography>
            </Box>
            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    NAME
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    SYMBOL
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    placeholder="Symbol e.g BTC"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    ADDRESS
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                    }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    IMAGE
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    value={image_url}
                    onChange={(e) => setImageURL(e.target.value)}
                    placeholder="https://image.png"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ marginBottom: "4%" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                TRANSACTION SETUP
              </Typography>
            </Box>

            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    BUYING PRRICE
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                    }}
                    type="number"
                    value={buying_price}
                    onChange={(e) => setBuyingPrice(e.target.value)}
                    placeholder="0.00"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    SELLING PRICE
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    value={selling_price}
                    type="number"
                    onChange={(e) => setSellingPrice(e.target.value)}
                    placeholder="0.00"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ marginBottom: "4%" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                MANAGE LIQUIDITY
              </Typography>
            </Box>
            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    {symbol} Liquidity
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    type="number"
                    value={total_liquidity}
                    onChange={(e) => setTotalLiquidity(e.target.value)}
                    placeholder="0.00"
                    size="small"
                  />
                </Box>
              </Grid>

              <Grid item sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    mb: "1%",
                    mt: "7.5%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Custombutton onClick={() => createNewAsset()}>
                    Submit
                  </Custombutton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
