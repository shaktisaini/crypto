import { Box, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Custombutton } from "../Button";
import { CustomDivider } from "../CustomDivider";
import { CustomTextFieldTwo } from "../CustomTextBox";

const WithdrawLocal = () => {
  return (
    <Box sx={{ mt: "4%" }}>
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
          Select your BANK
        </Typography>
        <CustomTextFieldTwo
          select
          fullWidth
          sx={{ mt: "2%" }}
          placeholder="select bank"
        >
          <MenuItem> Bank 1</MenuItem>
          <MenuItem> Bank 2</MenuItem>
        </CustomTextFieldTwo>
      </Box>
      <Box sx={{ mt: "2%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
          Amount (NGN)
        </Typography>
        <CustomTextFieldTwo fullWidth sx={{ mt: "2%" }} />
      </Box>
      <Box sx={{ mt: "5%" }}>
        <CustomDivider />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            mt: "3%",
          }}
        >
          <Typography>BALANCE (NGN) : </Typography>
          <Typography>0 NGN</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Typography>TRANSACTION FEES : </Typography>
          <Typography>150 NGN</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Typography>BALANCE AFTER DEPOSIT : </Typography>
          <Typography>0 NGN</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: "3%" }}>
        <CustomDivider />
      </Box>
      <Box sx={{ mt: "3%", display: "flex", justifyContent: "flex-end" }}>
        <Custombutton>Withdraw</Custombutton>
      </Box>
    </Box>
  );
};

export default WithdrawLocal;
