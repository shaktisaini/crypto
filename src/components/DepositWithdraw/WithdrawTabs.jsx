import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";

import WithdrawLocal from "./WithdrawLocal";
import SendOther from "./SendOther";
import { CustomDivider } from "../CustomDivider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const WithdrawTabs = () => {
  const [value, setValue] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Tab
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000",
                mr: "",
              }}
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleRadio}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                }
                label={
                  <>
                    <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                      Withdraw to LOCAL BANK
                    </Typography>
                  </>
                }
              />
            </Box>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000",
                mr: "14%",
              }}
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleRadio}
                    value="b"
                    name="radio-buttons"
                  />
                }
                label={
                  <>
                    <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                      Send to Other USER
                    </Typography>
                  </>
                }
              />
            </Box>
          }
          {...a11yProps(1)}
        />
      </Tabs>
      <CustomDivider />
      <TabPanel value={value} index={0}>
        <WithdrawLocal />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SendOther />
      </TabPanel>
    </Box>
  );
};
