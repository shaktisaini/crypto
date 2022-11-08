import {
  Box,
  Checkbox,
  Container,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextFieldTwo } from "../CustomTextBox";
import logo2 from "../../assets/Logo2.svg";
import { request, endpoints } from "../../lib/request";
import { useContext } from "react";
import { UserContext } from "./../../context/user-context";
import { setNewToken, setNewUser } from "../../lib/localstorage";
import { LoadingButton } from "../LoadingButton/LoadingButton";
import { SignupButton } from "./SignupButton";
import { SignInButton } from "./SignInButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: {
    xs:"100%", sm:"50%"
  },
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
};

export const SignUp = ({ open, setOpenModal }) => {
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(true);
  const [allowEmailUpdate, setAllowEmailUpdate] = useState(false);
  const [errors, setErrors] = useState([]);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const authContext = useContext(UserContext);

  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRegisterWithPhone = async () => {
    setLoading(true);

    try {
      const { data } = await request.post(
        endpoints.auth.registerWithPhoneNumber,
        { email: phone }
      );
      if (data.status === "success") {
        setIsPhoneValid(true);
      }
    } catch (error) {
      setErrors(error?.response?.data?.errors);
    }

    setLoading(false);
  };

  const verifyUserRegisteration = async () => {
    setLoading(true);
    try {
      const { data } = await request.post(
        endpoints.auth.verifyRegistrationWithOtp,
        { otpMessage: otp }
      );
      if (data.status === "success") {
        setPhone(data.user.email);
        setIsValidated(true);
      }
    } catch (error) {
      setErrors(error?.response?.data?.errors);
    }
    setLoading(false);
  };

  const setNewUserPassword = async () => {
    setLoading(true);
    if (!agreeToTerms) {
      setErrors([
        { message: "Please read and agree to our terms and conditions" },
      ]);
    } else {
      try {
        const { data } = await request.post(endpoints.auth.setPassword, {
          password,
          confirmPassword,
          email: phone,
        });

        if (data.status === "success") {
          console.log("Set Password", data);
          authContext.setToken(data.token);
          authContext.setUser(data.user);
          setNewUser(data.user);
          setNewUser(data.user);
          setNewToken(data.token);
          setNewToken(data.token);
          setNewToken(data.token);
          return navigate("/Dashboard");
        }
      } catch (error) {
        setErrors(error?.response?.data?.errors);
      }
    }
    setLoading(false);
  };

  return (
    <Modal
      open={open}
      setOpenModal={setOpenModal}
      onClose={handleClose}
      sx={{
        width:'100%',

        " .MuiBackdrop-root": {
          backgroundColor: "#2B9EB3",
        },
        overflow: "scroll",
        color: "black !important",
        position: "absolute",
      }}
    >
      <Box sx={style}>
        {/* <Toolbar /> */}
        {/* <Toolbar /> */}
        {/* <Toolbar /> */}
        <Toolbar />
        {/* <Container> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "33px",
              mt: "0.3%",

            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: "#000 !important",
                fontSize: "25px",
                fontFamily: "lufgalight-webfont",
              }}
            >
              WELCOME TO BOJAPAY
            </Typography>
            <img src={logo2} width="76px" height="108px" />
          </Box>

          <form>
            <>
              {!isPhoneValid ? (
                <div
                  style={{
                    display: "flex",
                    alingItems: "center",
                    alingContent: "center",
                    flexDirection: "column",
                    marginBottom: "2%",
                  }}
                >
                  <Box sx={{ mb: "1%" }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "15px",
                        mb: "1%",
                        color: "#000 !important",
                        fontFamily: "lufgalight-webfont",
                      }}
                    >
                      EMAIL 
                    </Typography>
                    <CustomTextFieldTwo
                      sx={{
                        width: "100%",
                        color: "#000 !important",
                        marginTop: "16px",
                        marginBottom: "35px",
                      }}
                      placeholder="Email"
                      size="small"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Box>

                  <LoadingButton
                    style={{
                      alignSelf: "flex-start",
                      color: "#fff !important",
                    }}
                    loading={loading}
                    done={loading}
                    label={`Create Account`}
                    onClick={() => handleRegisterWithPhone()}
                  />
                </div>
              ) : (
                <>
                  {!isValidated ? (
                    <div
                      style={{
                        display: "flex",
                        alingItems: "center",
                        alingContent: "center",
                        flexDirection: "column",
                        color: "#000 !important",
                        marginBottom: "2%",
                      }}
                    >
                      <Box sx={{ mb: "1%" }}>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "15px",
                            mb: "1%",
                            color: "#000 !important",
                            fontFamily: "lufgalight-webfont",
                          }}
                        >
                          OTP
                        </Typography>
                        <CustomTextFieldTwo
                          sx={{
                            width: "100%",
                            marginTop: "16px",
                            marginBottom: "35px",
                            color: "#000 !important",
                          }}
                          placeholder="otp"
                          size="small"
                          value={otp}
                          onChange={(e) => {
                            setOtp(e.target.value);
                          }}
                        />
                      </Box>

                      <LoadingButton
                        style={{ alignSelf: "flex-start" }}
                        loading={loading}
                        done={loading}
                        label={`VALIDATE`}
                        onClick={() => verifyUserRegisteration()}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alingItems: "center",
                        alingContent: "center",
                        flexDirection: "column",
                        marginBottom: "2%",
                      }}
                    >
                      <Box sx={{ mb: "1%" }}>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "15px",
                            mb: "1%",
                            color: "#000 !important",
                            fontFamily: "lufgalight-webfont",
                          }}
                        >
                          PASSWORD
                        </Typography>
                        <CustomTextFieldTwo
                          sx={{
                            width: "100%",
                            marginTop: "16px",
                            marginBottom: "35px",
                          }}
                          placeholder="Confirm Password"
                          size="small"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Box>

                      <Box sx={{ mb: "1%" }}>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "15px",
                            color: "#000 !important",
                            mb: "1%",
                            fontFamily: "lufgalight-webfont",
                          }}
                        >
                          CONFIRM PASSWORD
                        </Typography>
                        <CustomTextFieldTwo
                          sx={{
                            width: "100%",
                            marginTop: "16px",
                            marginBottom: "35px",
                          }}
                          placeholder="Confirm Password"
                          size="small"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </Box>
                    </div>
                  )}
                </>
              )}
            </>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={allowEmailUpdate}
                onChange={() => setAllowEmailUpdate(!agreeToTerms)}
              />
              <Typography
                sx={{
                  fontFamily: "lufgalight-webfont",
                  color: "#000 !important",
                }}
              >
                Send me occasional emails about exclusive BojaPAY content,
                services and promotions!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000 !important",
              }}
            >
              <Checkbox
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
              />
              <Typography
                sx={{
                  fontFamily: "lufgalight-webfont",
                  color: "#000 !important",
                }}
              >
                I agree with the Terms of Service and the Privacy Policy
                <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: "1%",
              }}
            >
              {isValidated ? (
                <LoadingButton
                  style={{ alignSelf: "flex-start" }}
                  loading={loading}
                  done={loading}
                  label={`FINISH`}
                  onClick={() => setNewUserPassword()}
                />
              ) : (
                <></>
              )}
            </Box>
          </form>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: "1%",
            }}
          >
            <Typography style={{ color: "#000 !important" }}>
              Disclaimer: Information on our site is not a recommendation or
              financial advice. Learn more
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: "1%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "lufgalight-webfont",
                color: "#000 !important",
                display: " flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2px",
                justifyItems: "center",
              }}
            >
              <span>ALREADY HAVE AN ACCOUNT?</span>
              <SignInButton
                onClick={() => handleClose()}
                label="Sign IN"
                style={{
                  padding: "0 !important",
                  fontWeight: 400,
                  lineHeight: "18px",
                  marginTop: "-6px",
                  marginLeft: "4px",
                  color: "#0e0e0e !important",
                  fontSize: "14px",
                  border: "none",
                  "&:hover ": {
                    border: "none !important",
                  },
                  fontFamily: "Lufga !important",
                }}
              />
            </Typography>
            <div
              style={{
                color: "red",
                marginTop: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              {errors.map((err) => (
                <Typography>{err.message}</Typography>
              ))}
            </div>
          </Box>
        {/* </Container> */}
      </Box>
    </Modal>
  );
};
