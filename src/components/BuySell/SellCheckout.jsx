import { Avatar, Box, Divider, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Main from "../Layout/Main";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Custombutton } from "../Button";
import { CustomTextFieldTwo } from "../CustomTextBox";


const style = {
  height: "64px",
  width: "64px",
};

const BuySell = () => {
  const [state, setState] = React.useState({
    BITCOIN: false,
    ETHEREUM: false,
    LITECOIN: false,
    NAIRATOKEN: false,
    TRON: false,
    TETHER: false,
    PERFECTMONEY: false,
    NAIRA: false,
    USD: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    BITCOIN,
    ETHEREUM,
    LITECOIN,
    NAIRATOKEN,
    TRON,
    TETHER,
    PERFECTMONEY,
    NAIRA,
    USD,
  } = state;

  return (
    <Main>
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Toolbar />
      <Toolbar />
      <Box sx={{ pt: "3%", pr: "5%", pl: "5%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
          Confirm Order
        </Typography>
        <Grid container spacing={4} sx={{  paddingTop:"2%"}}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "38px",
                border: "1px solid #868694",
                padding: "5%",
              }}>
             <Typography sx={{ fontWeight: 600, fontSize: "25px", marginBottom:"46px" }}>
                ORDER DETAILS
             </Typography>
             <Typography sx={{fontSize: "1.5em", marginTop: "10px"}}>ORDER NUMBER: 10122314</Typography> 
             <Typography sx={{fontSize: "1.5em", marginTop: "10px"}}>CURRENCY: BITCOIN</Typography> 
             <Typography sx={{fontSize: "1.5em", marginTop: "10px"}}>BTC AMOUNT: 0.01BTC</Typography> 
             <Typography sx={{fontSize: "1.5em", marginTop: "10px"}}>NAIRA AMOUNT : 17189736.62 NGN</Typography> 
             <Typography sx={{fontSize: "1.5em", marginTop: "10px"}}>DATE & TIME :JULY 06,2022; 13:11:00</Typography>   
              <Box sx={{ mt: "258px", mb: "2%"}}>
                <Divider sx={{ border: "1px solid #868694" }} />
              </Box>
              <Box
                sx={{
                  textAlign: "right",
                }}
              >
               
                <Custombutton href="/Sell" sx={{
                  backgroundColor:"transparent !important",
                    border: "1px solid #000066",
                    color:"#000066",
                    width:"40%",
                    }}>Edit</Custombutton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
          <Box
              sx={{
                width: "100%",
                borderRadius: "38px",
                border: "1px solid #868694",
                padding: "5%",
              }}
            >
                <Typography sx={{ fontWeight: 600, fontSize: "25px", marginBottom:"46px" }}>
                   BUY BITCOIN IN NAIRA
                </Typography>
                
                <FormControl
                  component="fieldset"
                  variant="standard"
                   >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={NAIRA}
                          onChange={handleChange}
                          name="NAIRA"
                        />
                      }
                      label="Deposit into my BojaPAY wallet"
                    />
                  </FormGroup>
                </FormControl>
                <Typography sx={{fontSize: "1.5em", marginTop: "44px"}}>BITCOIN ADDRESS:</Typography>
                <CustomTextFieldTwo  sx={{ width: "100%", marginTop: "10px"}} />
                <Typography sx={{fontSize: ".9em", marginTop: "15px"}}> Your bitcoin address where BojaPAY will send the bitcoins to. </Typography>
                <Box sx={{ mt: "258px", mb: "2%"}}>
                <Divider sx={{ border: "1px solid #868694" }} />
              </Box>
              <Box
                sx={{
                  textAlign: "right",
                }}
              >
               
                <Custombutton sx={{
                  backgroundColor:"transparent !important",
                    border: "1px solid #000066",
                    color:"#000066",
                    width:"40%",
                    }}>Complete</Custombutton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </Main>
  );
};

export default BuySell;


