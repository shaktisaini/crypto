import TableCustom from "../ActiveTable";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Toolbar,
  Avatar,
} from "@mui/material";
import Main from "./../components/Layout/Main";
import { CustomBox } from "../TokenDivs";
import bitcoin from "../../assets/Bitcoin.png";
import ethereum from "../../assets/ethereum.svg";
import ltokens from "../../assets/Ltoken.svg";
import ttokens from "../../assets/Ttoken.svg";
import moment from "moment";

import { UserContext } from "../context/user-context";
import { useContext } from "react";

const style = {
  height: "64px",
  width: "64px",
};

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Toolbar />
      <Box sx={{ pt: "5%", pr: "5%", pl: "5%" }}>
        {/* <Box
          sx={{
            backgroundColor: "#FFD0D0",
            padding: "2%",
            marginBottom: "9px",
          }}
        >
          <Typography sx={{}}>
            Your account is not secure please add 2FA authenitication
            immediately from profile
          </Typography>
        </Box> */}
        <Box
          sx={{
            backgroundColor: "rgba(43, 158, 179, 0.35)",
            padding: "2%",
            marginTop: "2%",
          }}
        >
          <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
            Last login{" "}
            {moment(
              user.lastLogin ? user.lastLogin : new Date(Date.now())
            ).format("LLL")}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ padding: "3% 0 3% 0" }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomBox sx={{ display: "flex", padding: "20px" }}>
            <Avatar sx={style}>
              <img src={bitcoin} alt="bitcoin" layout="fill" />
            </Avatar>
            {/* <img src={bitcoin} alt="bitcoin" /> */}
            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
              <Typography>
                <span style={{ fontWeight: 700 }}>BTC/NGN</span>
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
              </Typography>
            </Box>
          </CustomBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomBox sx={{ display: "flex", padding: "20px" }}>
            <Avatar sx={style}>
              <img src={ethereum} alt="bitcoin" layout="fill" />
            </Avatar>
            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
              <Typography>
                <span style={{ fontWeight: 700 }}>BTC/NGN</span>
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
              </Typography>
            </Box>
          </CustomBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomBox sx={{ display: "flex", padding: "20px" }}>
            <Avatar sx={style}>
              <img src={ltokens} alt="bitcoin" layout="fill" />
            </Avatar>
            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
              <Typography>
                <span style={{ fontWeight: 700 }}>BTC/NGN</span>
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
              </Typography>
            </Box>
          </CustomBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomBox sx={{ display: "flex", padding: "20px" }}>
            <Avatar sx={style}>
              <img src={ttokens} alt="bitcoin" layout="fill" />
            </Avatar>
            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
              <Typography>
                <span style={{ fontWeight: 700 }}>BTC/NGN</span>
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
              </Typography>
            </Box>
          </CustomBox>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 1, sm: 12 }}
      >
        <Box>
          <Typography sx={{ margin: "auto" }}>
            <span style={{ fontWeight: 600, alignItems: "center" }}>
              ACTIVE ORDERS
            </span>
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: "#000066",
              borderRadius: "11px",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 40px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000066",
              },
            }}
            href="/Buy"
          >
            {" "}
            CREATE ORDER
          </Button>
        </Box>
      </Stack>
      <TableCustom />
    </Box>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Main>{page}</Main>;
};
