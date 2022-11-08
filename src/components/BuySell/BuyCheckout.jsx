import {
  Avatar,
  Box,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Main from "../Layout/Main";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Custombutton } from "../Button";
import { CustomTextFieldTwo } from "../CustomTextBox";
import { UserContext } from "../../context/user-context";

const style = {
  height: "64px",
  width: "64px",
};

const BuySell = () => {
  const userContext = useContext(UserContext);
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

  return (
    <Main>
      <Box sx={{ padding: "0 2% 0 2%" }}>
        <Toolbar />
        <Toolbar />

        {userContext.order.asset ? (
          <Box sx={{ pt: "3%", pr: "5%", pl: "5%" }}>
            <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
              Confirm Order
            </Typography>
            <Grid container spacing={4} sx={{ paddingTop: "2%" }}>
              <Grid xs={12} md={8} xl={5}>
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "38px",
                    border: "1px solid #868694",
                    padding: "5%",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "25px",
                      marginBottom: "40px",
                    }}
                  >
                    ORDER DETAILS
                  </Typography>
                  <Typography sx={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ORDER NUMBER: {userContext.order.txRef}
                  </Typography>
                  <Typography sx={{ fontSize: "1.5em", marginTop: "10px" }}>
                    CURRENCY: {userContext.order.asset.name}
                  </Typography>
                  <Typography sx={{ fontSize: "1.5em", marginTop: "10px" }}>
                    BTC AMOUNT:{" "}
                    {`${userContext.order.assetAmount} ${userContext.order.asset.symbol}`}
                  </Typography>
                  <Typography sx={{ fontSize: "1.5em", marginTop: "10px" }}>
                    NAIRA AMOUNT :{" "}
                    {`${userContext.order.ngnAmount} ${userContext.order.asset.symbol}`}
                  </Typography>
                  <Typography sx={{ fontSize: "1.5em", marginTop: "10px" }}>
                    DATE & TIME : {userContext.order.date}
                  </Typography>
                  <Box sx={{ mt: "258px", mb: "2%" }}>
                    <Divider sx={{ border: "1px solid #868694" }} />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "right",
                    }}
                  >
                    {/* <Custombutton
                    href="/Buy"
                    sx={{
                      backgroundColor: "transparent !important",
                      border: "1px solid #000066",
                      color: "#000066 !important",
                      width: "40%",
                    }}
                  >
                    
                  </Custombutton> */}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Typography>NO ORDER</Typography>
        )}
      </Box>
    </Main>
  );
};

export default BuySell;
