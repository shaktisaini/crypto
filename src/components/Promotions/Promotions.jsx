import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDivider } from "../CustomDivider";
import AuthLayout from "../Layout/AuthLayout";

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Promotions = () => {
  return (
    <AuthLayout>
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Toolbar />
      <Toolbar />
      <Box sx={{ pt: "2%", pr: "5%", pl: "5%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
          PROMOTIONS
        </Typography>
        <CustomDivider sx={{}} />      
            <Typography sx={{ fontWeight: 600, fontSize: "1em", textAlign: "center", marginTop: "10px" }}>
                NO PROMOTIONS RIGHT NOW!
            </Typography> 
      </Box>
    </Box>
  </AuthLayout>
  );
};
export default Promotions;

