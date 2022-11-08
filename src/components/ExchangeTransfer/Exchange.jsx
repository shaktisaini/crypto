import * as React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Toolbar,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Main from "../Layout/Main";
import Tab, { tabClasses } from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import TableCustom from "../ActiveTable";
import AllorderTable from "../AllorderTable";
import { useState, useEffect } from "react";
import { request, endpoints } from "./../../lib/request";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";

const StyledTab = styled(Tab)({
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#D9D9D9",
});
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
        <Box sx={{ mt: 5 }}>
          <Typography>{children}</Typography>
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

export default function ExchangeTabs() {
  const [value, setValue] = React.useState(0);
  const [transactions, setTransactions] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [transaction_type, setTransactionType] = useState("");
  const authContext = useContext(UserContext);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let buildQuery = `page=${page}&limit=${limit}`;
    if (transaction_type) {
      buildQuery = `page=${page}&limit=${limit}&transaction_type=${transaction_type}`;
    }
    try {
      const { data } = await request.get(
        `${endpoints.transactions.user}?${buildQuery}`
      );
      console.log(data);
      setTransactions(data.transactions);
      const tx = transactions
        .map((item) => {
          if (item.status === "pending") {
            return item;
          }
          return null;
        })
        .filter((i) => i);
      console.log(tx);
      setCount(data.count);
      setLimit(data.page.limit);
    } catch (error) {}
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    getData();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) {
      setTransactionType("");
    } else if (newValue === 1) {
      setTransactionType("sell");
    } else {
      setTransactionType("buy");
    }
    console.log("newValue", transaction_type);
    getData();
  };

  return (
    <Main>
      <Box sx={{ padding: "0 2% 0 2%" }}>
        <Toolbar />
        <Toolbar />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, sm: 12 }}
          borderBottom="2px solid #868694"
          paddingBottom="15px"
        >
          <Box>
            <Typography
              sx={{ margin: "auto", fontFamily: "lufgamedium-webfont" }}
            >
              <span>EXCHANGE</span>
            </Typography>
          </Box>
          <Box>
            <Link to="/Sell">
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
              >
                {" "}
                CREATE ORDER
              </Button>
            </Link>
          </Box>
        </Stack>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="#000000"
          indicatorColor="#D9D9D9"
          sx={{ marginTop: "12px" }}
        >
          <StyledTab label="All" {...a11yProps(0)} />
          <StyledTab label="Sell" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box>
            <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
              ACTIVE ORDERS
            </Typography>
            <TableCustom
              count={count}
              limit={limit}
              page={page}
              transactions={transactions
                .map((item) => {
                  if (item.status === "pending") {
                    return item;
                  }
                  return null;
                })
                .filter((i) => i)}
              handlePageChange={handlePageChange}
            />
            <br /> <br />
            <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
              {transaction_type === "" ? "All" : transaction_type.toUpperCase()}{" "}
              ORDERS
            </Typography>
            <AllorderTable
              count={count}
              limit={limit}
              page={page}
              transactions={transactions}
              handlePageChange={handlePageChange}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box>
            <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
              {transaction_type === "" ? "All" : transaction_type.toUpperCase()}{" "}
              ORDERS
            </Typography>
            <AllorderTable
              count={count}
              limit={limit}
              page={page}
              transactions={transactions}
              handlePageChange={handlePageChange}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box>
            <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
              {transaction_type === "" ? "All" : transaction_type.toUpperCase()}{" "}
              ORDERS
            </Typography>
            <AllorderTable
              count={count}
              limit={limit}
              page={page}
              transactions={transactions}
              handlePageChange={handlePageChange}
            />
          </Box>
        </TabPanel>
      </Box>
    </Main>
  );
}
