import { Box, Typography } from "@mui/material";
import React from "react";
import { Custombutton } from "../Button";
import { CustomDivider } from "../CustomDivider";
import { CustomTextFieldTwo } from "../CustomTextBox";
const DepositOther = () => {
  return (
    <Box sx={{ mt: "2%" }}>
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "16px", mb: "2%" }}>
          Enter Valid UserName available on BojaPay
        </Typography>
        <CustomTextFieldTwo sx={{ width: "100%" }} />
      </Box>
      <Box sx={{ mt: "2%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "16px", mb: "2%" }}>
          Amount (NGN)
        </Typography>
        <CustomTextFieldTwo sx={{ width: "100%" }} />
      </Box>
      <Box sx={{ mt: "7%" }}>
        <CustomDivider />
      </Box>
      <Box sx={{ mt: "2%" }}>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
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
      <Box sx={{ mt: "4%" }}>
        <CustomDivider />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "2%" }}>
        <Custombutton>Deposit</Custombutton>
      </Box>
    </Box>
  );
};

export default DepositOther;
