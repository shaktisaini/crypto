import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CustomTextArea, CustomTextFieldTwo } from "../CustomTextBox";
import { useState } from "react";
import { Custombutton } from "../Button";
import { endpoints, request } from "../../lib/request";
import { Grid } from "@mui/material";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:"80%", sm:800},
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default function CreateAsset({ open, setOpen, getData }) {
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const createNewSupportMessage = async () => {
    try {
      const { data } = await request.post(endpoints.support.messages, {
        message,
        subject,
      });

      if (data) {
        getData();
        handleClose();
        toast.success(data.message);
      }
    } catch (error) {
      error?.response?.data?.errors.forEach((err) => {
        toast.error(err.message);
      });
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ marginBottom: "4%" }}>
              <Typography sx={{ fontWeight: "bold" }}>WRITE MESSAGE</Typography>
            </Box>
            <Grid>
              <Box sx={{ mb: "1%" }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "15px",
                    mb: "1%",
                    fontFamily: "lufgalight-webfont",
                  }}
                >
                  SUBJECT
                </Typography>
                <CustomTextFieldTwo
                  sx={{
                    width: "100%",
                    marginTop: "16px",
                    marginBottom: "35px",
                    marginLeft: "5px",
                  }}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject: "
                  size="small"
                />
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{ mb: "1%" }}
                style={{
                  display: "flex",
                  // alignItems: "center",
                  flexDirection: "column",
                  alignContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "15px",
                    mb: "1%",
                    fontFamily: "lufgalight-webfont",
                  }}
                >
                  MESSAGE
                </Typography>
                <textarea
                  style={{ width: "100" }}
                  rows={6}
                  cols={40}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </Box>
            </Grid>

            <Grid item sm={12} md={6} lg={6}>
              <Box
                sx={{
                  mb: "1%",
                  mt: "7.5%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Custombutton onClick={() => createNewSupportMessage()}>
                  Submit
                </Custombutton>
              </Box>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
