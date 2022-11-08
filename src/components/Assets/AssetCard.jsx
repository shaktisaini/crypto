import React, { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { CustomBox } from "../TokenDivs";
import "react-multi-carousel/lib/styles.css";
import { request, endpoints } from "./../../lib/request";
import { currencyFormat } from "./../../lib/common";
import { useEffect } from "react";
const style = {
  height: "64px",
  width: "64px",
};
function AssetCard({ asset }) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await request.post(endpoints.assets.convert, {
        from: asset.symbol,
        to: "NGN",
        amount: 1,
      });
      if (data.amount) {
        setAmount(data.amount);
      }
    } catch (error) {}
  };
  return amount ? (
    <CustomBox
      sx={{ display: "flex", margin: "1%", padding: "20px", marginRight: "3%" }}
    >
      <div>
        <Avatar sx={style}>
          <img width={70} src={asset.image_url} alt="bitcoin" layout="fill" />
        </Avatar>
        <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
          <Typography>
            <span style={{ fontWeight: 700 }}>{asset.symbol}/NGN</span>
          </Typography>
        </Box>
      </div>
      <Box>
        <Typography>SELL: {currencyFormat(asset.selling_price)}</Typography>
        <Typography>BUY:{currencyFormat(asset.buying_price)}</Typography>
      </Box>
    </CustomBox>
  ) : (
    <></>
  );
}

export default AssetCard;
