import * as React from "react";
import { Box, Stack, Typography, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import Main from "../Layout/Main";
import { useState, useEffect } from "react";
import { request, endpoints } from "./../../lib/request";
import UserTable from "../UserTable";

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

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [transaction_type, setTransactionType] = useState("");
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
        `${endpoints.auth.adminUsersList}?${buildQuery}`
      );
      console.log(data);
      setUsers(data.users);
      setCount(data.count);
      setLimit(data.page.limit);
    } catch (error) {}
  };

  const handlePageChange = (event, value) => {
    setPage(value);
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
              <span>USER MANAGEMENT</span>
            </Typography>
          </Box>
          <Box></Box>
        </Stack>
        <Box sx={{ marginTop: "12px !important" }}>
          <Box>
            <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
              All USERS
            </Typography>
            <UserTable
              count={count}
              limit={limit}
              page={page}
              users={users}
              handlePageChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>
    </Main>
  );
}
