import { Box, Typography } from "@mui/material";
import React from "react";
import { Custombutton } from "../Button";
import { CustomDivider } from "../CustomDivider";
import { CustomTextFieldTwo } from "../CustomTextBox";


const ConvertBalance = () => {
  return (
    <Box sx={{ mt: "2%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
          BALANCE (NGN) :{" "}
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
          0 NGN
        </Typography>
        <Custombutton sx={{ bgcolor: "#000066" }}>Convert to USD</Custombutton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "3%",
        }}
      >
        <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
          BALANCE (USD) :{" "}
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
          100 USD
        </Typography>
        <Custombutton sx={{ bgcolor: "#000066" }}>Convert to NGN</Custombutton>
      </Box>
      <Box sx={{ mt: "3%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "16px", mb: "3%" }}>
          Amount (NGN)
        </Typography>
        <CustomTextFieldTwo fullWidth />
      </Box>
      <Box sx={{ mt: "7%" }}>
        <CustomDivider />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            mt: "3%",
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
            BALANCE (NGN) :{" "}
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
            0 NGN
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            mt: "3%",
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
            BALANCE AFTER DEPOSIT :
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
            0 NGN
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: "5%" }}>
        <CustomDivider />
      </Box>
      <Box sx={{ mt: "5%", display: "flex", justifyContent: "flex-end" }}>
        <Custombutton>Deposit</Custombutton>
      </Box>
    </Box>
  );
};

export default ConvertBalance;
