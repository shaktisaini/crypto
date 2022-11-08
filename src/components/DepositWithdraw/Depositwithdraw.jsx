import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import Main from "../Layout/Main";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CustomDivider } from "../CustomDivider";
import { DepositTabs } from "./DepositTabs";
import { WithdrawTabs } from "./WithdrawTabs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DepositWithdraw = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Main>
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Toolbar />
      <Toolbar />
      <Box sx={{ pt: "2%", pr: "5%", pl: "5%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "25px", mb: "1%" }}>
          Deposit / Withdraw
        </Typography>
        <Box sx={{ mb: "2%" }}>
          <CustomDivider />
        </Box>

        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              minHeight: "70vh",
              bgcolor: " #EFEEEE",
              borderRadius: "27px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    sx={{ display: "flex", flex: 1 }}
                    label={
                      <>
                        <Button sx={{ width: "100%" }}>Deposit</Button>
                      </>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{ display: "flex", flex: 1 }}
                    label={
                      <>
                        <Button sx={{ width: "100%" }}>Withdraw</Button>
                      </>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <DepositTabs />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <WithdrawTabs />
              </TabPanel>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Box>
    </Box>
    </Main>
  );
};

export default DepositWithdraw;


