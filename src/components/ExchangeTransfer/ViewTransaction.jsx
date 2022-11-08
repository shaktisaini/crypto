import * as React from "react";
import { Box, Stack, Typography, Toolbar, Grid, Button } from "@mui/material";
import Main from "../Layout/Main";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { request, endpoints } from "./../../lib/request";
import { useParams } from "react-router-dom";
import { currencyFormat } from "../../lib/common";
import { Custombutton } from "../Button";
import toast from "react-hot-toast";

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

export default function ExchangeTabs() {
  const [transaction, setTransaction] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData();
    console.log(id);
  }, [id]);
  const getData = async () => {
    try {
      const { data } = await request.get(
        `${endpoints.transactions.singleTransaction(id)}`
      );

      console.log(data);
      setTransaction(data.transaction);
      console.log(transaction);
    } catch (error) {}
  };

  const updateTransactionByAdmin = async () => {
    try {
      const { data } = await request.patch(
        `${endpoints.transactions.singleTransaction(id)}`,
        { ...transaction }
      );
      if (data.status === "success") {
        toast.success(data.message);
      }
    } catch ({ response }) {
      response?.data?.errors?.forEach((err) => {
        toast.error(err.message);
      });
    }
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
              <span>VIEW Transaction ${transaction?.transactionRef}</span>
            </Typography>
          </Box>
          <Box></Box>
        </Stack>
        <Box sx={{ marginTop: "12px !important" }}>
          <Box sx={{ mb: "3%" }}>
            <Grid container spacing={2}>
              <Grid item xs={8} md={6} sm={12}>
                <Typography
                  sx={{ mb: "2%", fontFamily: "lufgamedium-webfont" }}
                >
                  Transaction Ref: {` ` + transaction?.transactionRef}
                </Typography>

                <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                  Amount: {currencyFormat(transaction?.amount)}
                </Typography>

                <Grid
                  container
                  spacing={2}
                  sx={{
                    mt: "3%",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "space-between",
                  }}
                >
                  <Grid item>
                    <Typography>Payment Status</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          transaction?.payment_status === "paid"
                            ? "green"
                            : "#ccc"
                        }`,
                        color: `${
                          transaction?.payment_status === "paid"
                            ? "#fff"
                            : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setTransaction({
                          ...transaction,
                          payment_status: "paid",
                        });
                      }}
                    >
                      Paid
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          transaction?.payment_status === "unpaid"
                            ? "#4d874a"
                            : "#ccc"
                        }`,
                        color: `${
                          transaction?.payment_status === "unpaid"
                            ? "#fff"
                            : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setTransaction({
                          ...transaction,
                          payment_status: "unpaid",
                        });
                      }}
                    >
                      UnPaid
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          transaction?.payment_status === "partially paid"
                            ? "#6f786e"
                            : "#ccc"
                        }`,
                        color: `${
                          transaction?.payment_status === "partially paid"
                            ? "#fff"
                            : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setTransaction({
                          ...transaction,
                          payment_status: "partially paid",
                        });
                      }}
                    >
                      Partialy Paid
                    </Button>
                  </Grid>
                </Grid>

                {/*  Status */}

                <Grid
                  container
                  spacing={2}
                  sx={{
                    mt: "3%",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "space-between",
                  }}
                >
                  <Grid item>
                    <Typography>Transaction Status</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          transaction?.status === "success" ? "green" : "#ccc"
                        }`,
                        color: `${
                          transaction?.status === "success" ? "#fff" : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setTransaction({
                          ...transaction,
                          status: "success",
                        });
                      }}
                    >
                      Success
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          transaction?.status === "pending" ? "#4d874a" : "#ccc"
                        }`,
                        color: `${
                          transaction?.status === "pending" ? "#fff" : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setTransaction({
                          ...transaction,
                          status: "pending",
                        });
                      }}
                    >
                      Pending
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          transaction?.status === "failed" ? "#6f786e" : "#ccc"
                        }`,
                        color: `${
                          transaction?.status === "failed" ? "#fff" : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setTransaction({
                          ...transaction,
                          status: "failed",
                        });
                      }}
                    >
                      Failed
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={6} sm={12}>
                <Typography sx={{ mt: "4%" }}>
                  Name:{" "}
                  {transaction?.user?.first_name
                    ? transaction?.user?.first_name +
                      " " +
                      transaction?.user?.last_name
                    : transaction?.user?.phone}
                </Typography>

                <Typography sx={{ mt: "4%" }}>
                  Email:{" "}
                  {transaction?.user?.email ? transaction.user.email : ""}
                </Typography>

                {/*  Bank Information */}

                <Typography sx={{ mt: "4%" }}>
                  Bank Code:{" "}
                  {transaction?.user.bank?.code
                    ? transaction?.user.bank?.code
                    : ""}
                </Typography>

                <Typography sx={{ mt: "4%" }}>
                  Bank Code:{" "}
                  {transaction?.user.bank?.accountNumber
                    ? transaction?.user.bank?.accountNumber
                    : ""}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {/* update transactions */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "flex-start",
              mt: "10%",
            }}
          >
            <Custombutton onClick={(e) => updateTransactionByAdmin()}>
              Update Transaction
            </Custombutton>
          </Box>
        </Box>
      </Box>
    </Main>
  );
}
