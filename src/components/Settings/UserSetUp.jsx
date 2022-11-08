import { Box, Container, Modal, Toolbar, Typography } from "@mui/material";
import "../../app.scss";
import React, { useState } from "react";
import { Custombutton } from "../Button";
import { CustomTextFieldTwo } from "../CustomTextBox";
import logo2 from "../../assets/Logo2.svg";
import { request, endpoints } from "../../lib/request";
import toast from "react-hot-toast";
import { setNewToken, setNewUser } from "../../lib/localstorage";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",

  width: { xs: "80%", sm: "80%" },

  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
};

export const UserSetUp = ({ open, setOpenModal }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenModal(false);
  };

  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const currentUserPassword = async () => {
    try {
      const { data } = await request.post(
        endpoints.auth.currentUserResetPassword,
        {
          password,
          new_password,
        }
      );
      if (data.status === "success") {
        handleClose();
        toast.success(data.message);
        setNewToken("");
        setNewUser(null);
        window.location.reload();
        return navigate("/");
      }
    } catch (error) {
      const { response } = error;
      response?.data?.errors?.forEach((err) => {
        toast.error(err.message);
      });
    }
  };
  return (
    <Modal
      open={open}
      setOpenModal={setOpenModal}
      onClose={handleClose}
      sx={{
        " .MuiBackdrop-root": {
          backgroundColor: "Transparent !important",
        },
        overflow: "scroll",
        position: "absolute",
      }}
    >
      <Box sx={style}>
        <Toolbar />

        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "33px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: ".8em", sm: "1.3em" },
                fontFamily: "lufgamedium-webfont",
              }}
            >
              UPDATE PASSWORD
            </Typography>
          </Box>
          <Box>
            <Box className="right" sx={{maxWidth:"300px", maxHeight:"390px"}}>
              <img src={logo2} height="100%" width="100%" alt="Logo" />
            </Box>
            <Box className="left">
              <div>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: ".8em", sm: "1.3em" },
                      mt: "40px",
                      fontFamily: "lufgamedium-webfont",
                     
                    }}
                  >
                    Current Password
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: { xs: "80%", sm: "50%" },
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                    type="password"
                    placeholder="Current Password"
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Box>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: ".8em", sm: "1.3em" },

                      mt: "3px",
                      fontFamily: "lufgamedium-webfont",
                    }}
                  >
                    New Password
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: { xs: "80%", sm: "50%" },
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                    type="password"
                    value={new_password}
                    placeholder="Current Password"
                    size="small"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Box>
                <Box sx={{}}>
                  <Custombutton onClick={(e) => currentUserPassword()}>
                    Reset Password
                  </Custombutton>
                </Box>
              </div>
            </Box>
          </Box>
        </Container>
      </Box>
    </Modal>
  );
};
