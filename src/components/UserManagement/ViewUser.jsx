/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { Box, Stack, Typography, Toolbar, Grid, Button } from "@mui/material";
import Main from "../Layout/Main";
import { useState, useEffect } from "react";
import { request, endpoints } from "./../../lib/request";
import { useParams } from "react-router-dom";
import { Custombutton } from "../Button";
import toast from "react-hot-toast";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
export default function ViewUser() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData();
    console.log(id);
  }, [id]);
  const getData = async () => {
    try {
      const { data } = await request.get(
        `${endpoints.auth.adminUsersList}/${id}`
      );

      console.log(data);
      setUser(data.user);
      console.log(user);
    } catch (error) {}
  };

  const updateUserByAdmin = async () => {
    try {
      const { data } = await request.patch(
        `${endpoints.auth.adminUsersList}/${id}`,
        { ...user }
      );
      if (data.status === "success") {
        setUser(data.user);
        toast.success(data.message);
      }
    } catch ({ response }) {
      response?.data?.errors?.forEach((err) => {
        toast.error(err.message);
      });
    }
  };

  return user ? (
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
              <span>
                VIEW: {` ` + user?.first_name} {user.last_name}
              </span>
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
                  User Phone: {` +` + user?.phone}
                </Typography>

                <Typography
                  sx={{ fontFamily: "lufgamedium-webfont", marginBottom: "5%" }}
                >
                  ID/Passport Number: {user.identity.passportOrIdNumber}
                </Typography>

                <Box sx={{ marginBottom: "5%" }}>
                  <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                    PHOTO
                  </Typography>
                  <Box>
                    <a
                      download={user?.photo}
                      target="_blank"
                      rel="noreferrer"
                      href={user?.photo}
                      style={{
                        justifyItems: "flex-start",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        width={120}
                        style={{ borderRadius: "5px" }}
                        height={70}
                        src={user?.photo}
                        alt="PHOTO"
                      />
                      <span
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          alignContent: "center",
                        }}
                      >
                        <CloudDownloadIcon
                          title="Download Photo"
                          style={{ color: "#000" }}
                        />
                      </span>
                    </a>
                  </Box>
                </Box>
                <div style={{ display: "flex" }}>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                      ID/Passport Front Photo
                    </Typography>
                    <Box>
                      <a
                        download={user?.identity?.back}
                        target="_blank"
                        rel="noreferrer"
                        href={user?.identity?.back}
                        style={{
                          justifyItems: "flex-start",
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          width={120}
                          height={70}
                          src={user?.identity?.back}
                          alt="FRONT"
                        />
                        <span
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            alignContent: "center",
                          }}
                        >
                          <CloudDownloadIcon style={{ color: "#000" }} />
                        </span>
                      </a>
                    </Box>
                  </Box>

                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
                      ID/Passport Back Photo
                    </Typography>
                    <Box>
                      <a
                        download={user?.identity?.back}
                        target="_blank"
                        rel="noreferrer"
                        href={user?.identity?.back}
                        style={{
                          justifyItems: "flex-start",
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          width={120}
                          height={70}
                          src={user?.identity?.back}
                          alt="BACK"
                        />
                        <span
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            alignContent: "center",
                          }}
                        >
                          <CloudDownloadIcon style={{ color: "#000" }} />
                        </span>
                      </a>
                    </Box>
                  </Box>
                </div>

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
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          user?.status === "approved" ? "green" : "#ccc"
                        }`,
                        color: `${
                          user?.status === "approved" ? "#fff" : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setUser({
                          ...user,
                          status: "approved",
                        });
                      }}
                    >
                      approved
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: `${
                          user?.status === "pending" ? "#4d874a" : "#ccc"
                        }`,
                        color: `${
                          user?.status === "pending" ? "#fff" : "#000"
                        }`,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        setUser({
                          ...user,
                          status: "pending",
                        });
                      }}
                    >
                      Pending
                    </Button>
                  </Grid>
                </Grid>

                <Grid container sx={{ mt: "4%" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={user.is_active}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            is_active: !user.is_active,
                          })
                        }
                      />
                    }
                    label="Account is Active?"
                  />
                </Grid>

                {/*  Status */}
              </Grid>
              <Grid item xs={4} md={6} sm={12}>
                <Typography sx={{ mt: "4%" }}>
                  Name:{" "}
                  {user?.first_name
                    ? user?.first_name + " " + user?.last_name
                    : user?.phone}
                </Typography>

                <Typography sx={{ mt: "4%" }}>
                  Email: {user?.email ? user.email : ""}
                </Typography>

                {/*  Bank Information */}

                <Typography sx={{ mt: "4%" }}>
                  Bank Code: {user.bank?.code ? user.bank?.code : ""}
                </Typography>

                <Typography sx={{ mt: "4%" }}>
                  Bank Code:{" "}
                  {user.bank?.accountNumber ? user.bank?.accountNumber : ""}
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
            <Custombutton onClick={(e) => updateUserByAdmin()}>
              Update User
            </Custombutton>
          </Box>
        </Box>
      </Box>
    </Main>
  ) : (
    <></>
  );
}
