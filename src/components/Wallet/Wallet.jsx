import { Box, Stack, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDivider } from "../CustomDivider";
import Main from "../Layout/Main";
import ExchangeRatesTable from "./ExchangeRatesTable"

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Wallet = () => {
  return (
    <Main>
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Toolbar />
      <Toolbar />
      <Box sx={{ pr: "5%", pl: "5%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "20px" , marginBottom:"2%"}}>
          BojaPay Wallet
        </Typography>
        <CustomDivider />      
        <Typography sx={{ fontWeight: 600, fontSize: "20px", margin:"2% 0" }}>
          Your Account Balance
        </Typography>  
        <CustomDivider sx={{}} />  
        <Stack direction={{xs:'column', md:'row'}} spacing={{ xs: 1, md: 4 }} sx={{padding:" 2% 0"}} >
           <Typography sx={{ fontWeight: 600, fontSize: "16px", margin:"auto 0"}}>BALANCE (NGN) : <span style={{fontFamily: 'lufgamedium-webfont'}}>0 NGN</span></Typography>
           <Button 
            sx={{
              backgroundColor: "#000066",
              borderRadius: "0px",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 40px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000066"
              }
            }}
            >
            {" "}
            CONVERT TO USD
          </Button>
          <Button 
            sx={{
              backgroundColor: "#000066",
              borderRadius: "0px",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 40px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000066"
              }
            }}
            >
            {" "}
            DEPOSIT
          </Button>
          <Button 
            sx={{
              backgroundColor: "#000066",
              borderRadius: "0px",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 40px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000066"
              }
            }}
            >
            {" "}
            WITHDRAW
          </Button>
        </Stack>
        <Stack direction={{xs:'column', md:'row'}} spacing={{ xs: 1,  md: 4 }}>
           <Typography sx={{ fontWeight: 600, fontSize: "16px" , margin:"auto 0"}}>BALANCE (USD) : <span style={{fontFamily: 'lufgamedium-webfont'}}>100 USD</span></Typography>
           <Button 
            sx={{
              backgroundColor: "#000066",
              borderRadius: "0px",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 40px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000066"
              }
            }}
            >
            {" "}
            CONVERT TO USD
          </Button>
          <Button 
            sx={{
              backgroundColor: "#000066",
              borderRadius: "0px",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 40px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000066"
              }
            }}
            >
            {" "}
            DEPOSIT
          </Button>
          <Button 
            sx={{
              backgroundColor: "#000066",
              borderRadius: "0px",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 40px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000066"
              }
            }}
            >
            {" "}
            WITHDRAW
          </Button>
        </Stack>
        <Stack direction={{xs:'column', md:'row'}} spacing={{ xs: 1, md: 2 }} sx={{padding:" 2% 0"}}>
           <Typography sx={{ fontWeight: 600, fontSize: "16px" , margin:"auto 0"}}>BALANCE (BTC) : <span style={{fontFamily: 'lufgamedium-webfont'}}>0.0025 BTC</span></Typography>         
        </Stack>
        <ExchangeRatesTable/>
      </Box>
    </Box>
    </Main>
  );
};
export default Wallet;


