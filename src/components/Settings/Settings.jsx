import {
  Box,
  Checkbox,
  Grid,
  Toolbar,
  Typography,
  Button,
  Autocomplete,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { Custombutton } from "../Button";
import { CustomTextFieldTwo } from "../CustomTextBox";
import Main from "../Layout/Main";
import { UserSetupButton } from "./UserSetupButton";
import { request, endpoints } from "../../lib/request";
import TextField from "@mui/material/TextField";
import { getNewUser } from "../../lib/localstorage";
import { UserContext } from "./../../context/user-context";
import toast from "react-hot-toast";
import moment from "moment";

const Settings = () => {
  const [currentUser, setCurrentUser] = useState(getNewUser());
  const [banks, setBanks] = useState([]);

  const authContext = useContext(UserContext);
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const { data } = await request.get(endpoints.auth.currentUser);
      const banks = await request.get(`${endpoints.settings.banks}?page=all`);
      setBanks(banks.data.banks);

      if (data.status === "success") {
        setCurrentUser({
          first_name: "",
          other_names: "",
          last_name: "",
          phone: "",
          email: "",
          username: "",
          address: "",
          photo: "",
          bank: {
            accountNumber: "",
            code: "",
          },
          identity: {
            back: "",
            front: "",
            passportOrIdNumber: "",
          },

          ...data.user,
        });
      }
    } catch (error) {}
  };

  const uploadIDFront = (event) => {
    let formData = new FormData();
    formData.append("photo", event.target.files[0]);
    formData.append("dirName", "profile");

    request
      .post(endpoints.uploads.photo, formData)
      .then(({ data }) => {
        console.log(data.url);
        setCurrentUser({
          ...currentUser,
          identity: {
            ...currentUser.identity,
            front: data.url,
          },
        });

        return {
          url: data.url,
          error: "",
        };
      })
      .catch((error) => {
        return {
          url: "",
          error: `${error.message}`,
        };
      });
  };
  const uploadIDBack = (event) => {
    let formData = new FormData();
    formData.append("photo", event.target.files[0]);
    formData.append("dirName", "profile");

    request
      .post(endpoints.uploads.photo, formData)
      .then(({ data }) => {
        console.log(data);
        setCurrentUser({
          ...currentUser,
          identity: {
            ...currentUser.identity,
            back: data.url,
          },
        });
        return {
          url: data.url,
          error: "",
        };
      })
      .catch((error) => {
        return {
          url: "",
          error: `${error.message}`,
        };
      });
  };
  const updateProfile = async () => {
    try {
      const { data } = await request.patch(endpoints.auth.updateProfile, {
        ...currentUser,
      });
      if (data.status === "success") {
        console.log("UPDATED", data.user);
        authContext.setUser(data.user);
        setCurrentUser({
          first_name: "",
          other_names: "",
          last_name: "",
          address: "",
          phone: "",
          email: "",
          username: "",
          photo: "",
          bank: {
            accountNumber: "",
            code: "",
          },
          identity: {
            back: "",
            front: "",
            passportOrIdNumber: "",
          },
          ...data.user,
        });

        toast.success(data.message);
        getCurrentUser();
      }
    } catch (error) {
      const { response } = error;
      response?.data?.errors?.forEach((err) => {
        toast.error(err.message);
      });
    }
  };

  const uploadProfilePhoto = (event) => {
    let formData = new FormData();
    formData.append("photo", event.target.files[0]);
    formData.append("dirName", "profile");

    request
      .post(endpoints.uploads.photo, formData)
      .then(({ data }) => {
        console.log(data);
        setCurrentUser({
          ...currentUser,
          photo: data.url,
        });
        return {
          url: data.url,
          error: "",
        };
      })
      .catch((error) => {
        return {
          url: "",
          error: `${error.message}`,
        };
      });
  };

  const onTagsChange = (event, option) => {
    const code = option.value;
    setCurrentUser({
      ...currentUser,
      bank: {
        ...currentUser.bank,
        code,
      },
    });
  };
  return (
    <Main>
      <Box sx={{ padding: "0 2% 0 2%" }}>
        <Toolbar />
        <Toolbar />
        <Box sx={{ pt: "2%", pr: "5%", pl: "5%" }}>
          <UserSetupButton />
          <Box
            sx={{
              bgcolor: "#000066",
              color: "white",
              padding: "1%",
              marginTop: "5%",
            }}
          >
            <Typography sx={{ ml: "2%", fontFamily: "lufgamedium-webfont" }}>
              PROFILE
            </Typography>
          </Box>
          <Grid
            container
            sx={{ bgcolor: "#D9D9D9", ml: "", mt: "0.5%", height: "9vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>REGISTRATION DATE</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>
                  {moment(currentUser.created_at).format("LLL")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ bgcolor: "#EDEEEE", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>USERNAME</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={currentUser.username}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, username: e.target.value })
                  }
                  size="small"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ bgcolor: "#D9D9D9", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>FIRST NAME</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#D9D9D9", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={currentUser.first_name}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      first_name: e.target.value,
                    })
                  }
                  size="small"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              bgcolor: "#D9D9D9",
              ml: "",
              mt: "0.5%",
              height: "13vh",
            }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>OTHER NAMES</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#D9D9D9", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={currentUser.other_names}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      other_names: e.target.value,
                    })
                  }
                  size="small"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>LAST NAME</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={currentUser.last_name}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      last_name: e.target.value,
                    })
                  }
                  size="small"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>EMAIL ADDRESS</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={currentUser.email}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      email: e.target.value,
                    })
                  }
                  size="small"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ bgcolor: "#D9D9D9", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>PHONE NUMBER</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#D9D9D9", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={currentUser.phone}
                  size="small"
                  sx={{ width: "90%" }}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      phone: e.target.value,
                    })
                  }
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>WALLET ADDRESS</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={currentUser.address}
                  disabled={true}
                  size="small"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>PROFILE PHOTO</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-profile-raised-button-file"
                  onChange={uploadProfilePhoto}
                  type="file"
                />
                <label htmlFor="upload-profile-raised-button-file">
                  <Button
                    variant="raised"
                    component="span"
                    sx={{ backgroundColor: "#2B9EB3;", color: "white" }}
                  >
                    Upload
                  </Button>
                </label>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box>
                <div>
                  {!currentUser.photo ? (
                    <img
                      style={{
                        borderRadius: "50%",
                        marginLeft: "8%",
                        marginTop: "2%",
                      }}
                      width={70}
                      height={70}
                      src="/images/bojapay.png"
                      alt="PROFILE"
                    />
                  ) : (
                    <img
                      style={{
                        borderRadius: "50%",
                        marginLeft: "8%",
                        marginTop: "2%",
                      }}
                      width={70}
                      height={70}
                      src={currentUser.photo}
                      alt="PROFILE"
                    />
                  )}
                </div>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              bgcolor: "#000066",
              color: "white",
              padding: "1%",
              marginTop: "1%",
            }}
          >
            <Typography sx={{ ml: "2%", fontFamily: "lufgamedium-webfont" }}>
              WITHDRAWAL BANK
            </Typography>
          </Box>
          {/*  start bank */}
          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box sx={{ p: 1 }}>
                <Typography sx={{ ml: "8%" }}>CHOOSE BANK</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <Autocomplete
                  sx={{ mt: "1%", mb: "1%" }}
                  disablePortal
                  isOptionEqualToValue={(option) => option.value}
                  onChange={onTagsChange}
                  id="combo-box-demo"
                  options={banks.map((item) => {
                    return { label: item.name, value: item.code };
                  })}
                  renderInput={(params) => (
                    <TextField {...params} label="Banks" />
                  )}
                />
              </Box>
            </Grid>
            {currentUser.bank.code ? (
              <Grid item md={3} xs={12}>
                <Box>
                  <Typography sx={{ ml: "8%" }}>
                    CURRENT({currentUser.bank.code})
                  </Typography>
                </Box>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>BANK ACCOUNT</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={
                    currentUser.bank.accountNumber
                      ? currentUser.bank.accountNumber
                      : ""
                  }
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      bank: {
                        ...currentUser.bank,
                        accountNumber: e.target.value,
                      },
                    })
                  }
                  size="small"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>
          {/* end bank */}

          {/* IDENTITY */}
          <Box
            sx={{
              bgcolor: "#000066",
              color: "white",
              padding: "1%",
              marginTop: "1%",
            }}
          >
            <Typography sx={{ ml: "2%", fontFamily: "lufgamedium-webfont" }}>
              IDENTITY/PASSPORT(KYC)
            </Typography>
          </Box>

          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%", height: "13vh" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>ID/PASSPORT NO:</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <CustomTextFieldTwo
                  value={
                    currentUser.identity.passportOrIdNumber
                      ? currentUser.identity.passportOrIdNumber
                      : ""
                  }
                  size="small"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      identity: {
                        ...currentUser.identity,
                        passportOrIdNumber: e.target.value,
                      },
                    })
                  }
                  sx={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>FRONT</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-front-raised-button-file"
                  onChange={uploadIDFront}
                  type="file"
                />
                <label htmlFor="upload-front-raised-button-file">
                  <Button
                    variant="raised"
                    component="span"
                    sx={{ backgroundColor: "#2B9EB3;", color: "white" }}
                  >
                    Upload
                  </Button>
                </label>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box>
                <div>
                  <img
                    style={{ marginLeft: "8%", marginTop: "2%" }}
                    width={120}
                    height={70}
                    src={currentUser.identity.front}
                    alt="FRONT"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ bgcolor: " #EDEEEE", ml: "", mt: "0.5%" }}
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ ml: "8%" }}>BACK</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ bgcolor: "#EDEEEE", ml: "8%" }}>
              <Box>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-back-raised-button-file"
                  onChange={uploadIDBack}
                  type="file"
                />
                <label htmlFor="upload-back-raised-button-file">
                  <Button
                    variant="raised"
                    component="span"
                    sx={{ backgroundColor: "#2B9EB3;", color: "white" }}
                  >
                    Upload
                  </Button>
                </label>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box>
                <div>
                  <img
                    style={{ marginLeft: "8%", marginTop: "2%" }}
                    width={120}
                    height={70}
                    src={currentUser.identity.back}
                    alt="BACK"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
          {/* END OF IDENTITY */}
          <Box sx={{ display: "flex", alignItems: "center", mt: "1%" }}>
            <Checkbox />
            <Typography>
              Send me occasional emails about exclusive BojaPAY content,
              services and promotions!
            </Typography>
          </Box>
          <Custombutton onClick={() => updateProfile()}>UPDATE</Custombutton>
          <Box sx={{ bgcolor: "#000066", color: "white" }}>
            <Typography sx={{ ml: "2%", mt: "1%", mb: "5%" }}></Typography>
            {/* <Typography sx={{ ml: "2%", mt: "1%" }}>SECURITY</Typography> */}
          </Box>
          {/* <Grid container sx={{ mt: "1%" }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ ml: "15%" }}>
                <Typography>ENABLE 2FA (DISABLED) </Typography>
                <Typography>(2-FACTOR AUTHENTICATION)</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Custombutton>ENABLE</Custombutton>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Main>
  );
};

export default Settings;
