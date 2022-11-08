import { Box, Checkbox, Container, Modal, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextFieldTwo } from "../CustomTextBox";
import logo2 from "../../assets/Logo2.svg";
import { request, endpoints } from "./../../lib/request";

import { UserContext } from "./../../context/user-context";
import { LoadingButton } from "../LoadingButton/LoadingButton";
import { SignupButton } from "./SignupButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: {xs:"100%", sm:"50%"},

  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
};

const SignIn = ({ open, setOpenModal }) => {
  const [phone, setPhone] = useState("");
  const [isEmail, setIsEmail] = useState();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [otp, setOtp] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [enablePasswordReset, setEnablePasswordReset] = useState(false);
  const authContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false);
  };

  const loginUser = async () => {
    setLoading(true);
    try {
      const { data } = await request.post(endpoints.auth.loginWithPhoneNumber, {
        email: phone,
        password,
      });

      if (data.status === "success") {
        setIsValid(true);
      }
      if (data.status === "success" && data.token) {
        authContext.setToken(data.token);
        authContext.setUser(data.user);
        return navigate("/Dashboard", { replace: true });
      }
    } catch (error) {
      console.log("Error", error.message);
    }
    setLoading(false);
  };

  const verifyLoginOpt = async () => {
    setLoading(true);

    try {
      const { data } = await request.post(endpoints.auth.verifyLoginWithOtp, {
        otp,
      });

      if (data.status === "success" && data.token) {
        authContext.setToken(data.token);
        authContext.setUser(data.user);
        return navigate("/Dashboard", { replace: true });
      }
    } catch (error) {
      setErrors(error?.response?.data?.errors);
    }
    setLoading(false);
  };

  const requestPasswordReset = async () => {
    setLoading(true);

    try {
      const { data } = await request.post(endpoints.auth.verifyLoginWithOtp, {
        email,
      });

      if (data.status === "success") {
        setIsEmail(true);
      }
    } catch (error) {
      setErrors(error?.response?.data?.errors);
    }
    setLoading(false);
  };

  const resetYourPassword = async () => {
    setLoading(true);

    try {
      const { data } = await request.post(endpoints.auth.resetYourPassword, {
        code,
        password: newPassword,
        confirmPassword: confirmNewPassword,
      });

      if (data.status === "success") {
        setEnablePasswordReset(!enablePasswordReset);
      }
    } catch (error) {
      setErrors(error?.response?.data?.errors);
      console.log("Error", error?.response?.data?.errors);
    }
    setLoading(false);
  };

  return (
    <Modal
      open={open}
      setOpenModal={setOpenModal}
      onClose={handleClose}
      sx={{
        " .MuiBackdrop-root": {
          backgroundColor: "#2B9EB3",
        },
        overflow: "scroll",
        position: "absolute",
      }}
    >
      <Box sx={style}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "33px",
              mt: "5%",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "25px",
                fontFamily: "lufgalight-webfont",
              }}
            >
              WELCOME TO BOJAPAY
            </Typography>
            <img src={logo2} alt="Logo" width="76px" height="108px" />
          </Box>

          {!enablePasswordReset ? (
            <>
              <form>
                {!isValid ? (
                  <div
                    style={{
                      displa: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
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
                          marginTop: "16px",
                          marginBottom: "35px",
                        }}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Email"
                        size="small"
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
                        PASSWORD
                      </Typography>
                      <CustomTextFieldTwo
                        sx={{
                          width: "100%",
                          marginTop: "16px",
                          marginBottom: "35px",
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        type="password"
                        size="small"
                      />
                    </Box>

                    <Box
                      sx={{
                        mb: "1%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <LoadingButton
                        loading={loading}
                        style={{
                          color: "#fff !important",
                          width: "267px !important",
                          display: "flex",
                        }}
                        done={loading}
                        label={`LOGIN`}
                        onClick={() => loginUser()}
                      />
                    </Box>
                  </div>
                ) : (
                  <div
                    style={{
                      displa: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                    }}
                  >
                    <Box sx={{ mb: "1%", flex: "1", width: "100%" }}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "15px",
                          mb: "1%",
                          color: "#000 !important",
                          fontFamily: "lufgalight-webfont",
                        }}
                      >
                        VERIFY LOGIN
                      </Typography>
                      <CustomTextFieldTwo
                        sx={{
                          width: "100%",
                          marginTop: "16px",
                          marginBottom: "35px",
                        }}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Code"
                        type="number"
                        size="small"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#000 !important",
                        mt: "1",
                        mb: "2",
                      }}
                    >
                      <LoadingButton
                        loading={loading}
                        done={loading}
                        style={{ color: "#fff !important" }}
                        label={`FINISH`}
                        onClick={() => verifyLoginOpt()}
                      />
                    </Box>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div>
              {!isEmail ? (
                <>
                  <Box sx={{ mb: "1%", flex: "1", width: "100%" }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "15px",
                        mb: "1%",
                        fontFamily: "lufgalight-webfont",
                        color: "#000 !important",
                      }}
                    >
                      EMAIL
                    </Typography>
                    <CustomTextFieldTwo
                      sx={{
                        width: "100%",
                        marginTop: "16px",
                        marginBottom: "35px",
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                      size="small"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "1",
                      mb: "2",
                    }}
                  >
                    <LoadingButton
                      loading={loading}
                      style={{ color: "#fff !important" }}
                      done={loading}
                      label={`REQUEST`}
                      onClick={() => requestPasswordReset()}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ mb: "1%", flex: "1", width: "100%" }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "15px",
                        mb: "1%",
                        fontFamily: "lufgalight-webfont",
                      }}
                    >
                      CODE
                    </Typography>
                    <CustomTextFieldTwo
                      sx={{
                        width: "100%",
                        marginTop: "16px",
                        marginBottom: "35px",
                      }}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="code"
                      type="number"
                      size="small"
                    />
                  </Box>
                  <Box sx={{ mb: "1%", flex: "1", width: "100%" }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "15px",
                        mb: "1%",
                        color: "#000 !important",
                        fontFamily: "lufgalight-webfont",
                      }}
                    >
                      NEW PASSWORD
                    </Typography>
                    <CustomTextFieldTwo
                      sx={{
                        width: "100%",
                        marginTop: "16px",
                        marginBottom: "35px",
                        color: "#000 !important",
                      }}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Passwod"
                      type="password"
                      size="small"
                    />
                  </Box>
                  <Box sx={{ mb: "1%", flex: "1", width: "100%" }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "15px",
                        mb: "1%",
                        fontFamily: "lufgalight-webfont",
                        color: "#000 !important",
                      }}
                    >
                      CONFIRM NEW PASSWORD
                    </Typography>
                    <CustomTextFieldTwo
                      sx={{
                        width: "100%",
                        marginTop: "16px",
                        marginBottom: "35px",
                        color: "#000 !important",
                      }}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Password"
                      type="password"
                      size="small"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "1",
                      mb: "2",
                    }}
                  >
                    <LoadingButton
                      style={{ color: "#fff !important" }}
                      loading={loading}
                      done={loading}
                      label={`RESET PASSWORD`}
                      onClick={() => resetYourPassword()}
                    />
                  </Box>
                </>
              )}
            </div>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: {
                xs:"column", sm:"row"
              },
              gap:"10px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000 !important",
              }}
            >
              <Checkbox checked={remember} />
              <p style={{ color: "#000 !important" }}>
                <span sx={{ color: "#000 !important" }}>Remember Me</span>
              </p>
            </Box>
            <Box>
              <p
                style={{ cursor: "pointer", color: "#000 !important" }}
                onClick={() => setEnablePasswordReset(!enablePasswordReset)}
              >
                {!enablePasswordReset ? `Forgot Password?` : "LOGIN"}
              </p>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "2%",
              color: "#000 !important",
              mb: "2%",
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
              <span>DON'T HAVE AN ACCOUNT?</span>
              <SignupButton
                onClick={() => handleClose()}
                label="CREATE ACCOUNT"
                style={{
                  padding: "0 !important",
                  fontWeight: 400,
                  padding: "0 !important",
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
                <Typography style={{ color: "red !important" }}>
                  {err.message}
                </Typography>
              ))}
            </div>
          </Box>
        </Container>
      </Box>
    </Modal>
  );
};

export default SignIn;
