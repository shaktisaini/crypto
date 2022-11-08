import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomDivider } from "../CustomDivider";
import Main from "../Layout/Main";
import moment from "moment";
import { request, endpoints } from "./../../lib/request";
import { Custombutton } from "../Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data } = await request.get(
        `${endpoints.notifications.userNotification}?page=${page}&limit=${limit}`
      );
      setNotifications(data.notifications);
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
        <Box sx={{ pt: "2%", pr: "5%", pl: "5%" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
            NOTIFICATIONS
          </Typography>
          <CustomDivider sx={{}} />
          <Grid container sx={{ height: "10vh" }}>
            <Grid item xs={12} sm={12} md={4} sx={style}>
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                MESSAGE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={style}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#868694",
                  }}
                >
                  TIMESTAMP
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={style}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#000066",
                  }}
                >
                  STATUS
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <CustomDivider sx={{}} />

          {notifications.map((notify, index) => (
            <div key={index}>
              <Grid container sx={{ height: "10vh" }}>
                <Grid item xs={12} sm={12} md={4} sx={style}>
                  <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                    {`${index + 1}. ${notify.message}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={style}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#868694",
                      }}
                    >
                      {moment(notify.created_at).fromNow()}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={style}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#000066",
                      }}
                    >
                      <Custombutton>
                        {notify.unread ? `UnRead` : "Read"}{" "}
                      </Custombutton>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <CustomDivider sx={{}} />
            </div>
          ))}
        </Box>

        <Box
          sx={{ pt: "2%", pr: "5%", pl: "5%" }}
          style={{
            display: "flex",
            marginTop: "2%",
            justifyContent: "flex-end",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={Math.round(count / limit)}
              page={page}
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      </Box>
    </Main>
  );
};
export default Notifications;
