import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CustomTextFieldTwo } from "../CustomTextBox";
import { useState } from "react";
import { Custombutton } from "../Button";
import { endpoints, request } from "../../lib/request";
import { Grid } from "@mui/material";
import toast from "react-hot-toast";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default function UpdateSupport({ open, setOpen, getData, asset }) {
  const [oldSupport, setOldSupport] = useState({
    message: "",
    subject: "",
    user: null,
    responses: [],
    is_active: true,
  });
  const [response, setResponse] = useState("");

  useEffect(() => {
    setOldSupport({ ...asset });
  }, [asset]);
  const handleClose = () => setOpen(false);

  const updateAsset = async () => {
    try {
      const { data } = await request.patch(
        `${endpoints.support.messages}/${oldSupport.id}`,
        {
          ...oldSupport,
          response,
        }
      );

      if (data) {
        setResponse("");
        console.log("Support", data);
        getData();
        handleClose();
        toast.success(`Successfully update your asset/token information`);
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
        aria-labelledby={`updating-old-asset-${asset.id}`}
        aria-describedby="transition-modal-description"
        open={open}
        id={`updating-old-asset-${asset.id}`}
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
              <Typography sx={{ fontWeight: "bold" }}>
                RESPOND INFORMATION
              </Typography>
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
                  value={oldSupport.subject}
                  onChange={(e) =>
                    setOldSupport({
                      ...oldSupport,
                      subject: e.target.value,
                    })
                  }
                  placeholder="Subject: "
                  size="small"
                />
              </Box>
            </Grid>
            {/* responses  */}
            <Grid container>
              {oldSupport.responses.map((item, index) => (
                <Grid item key={index}>
                  <p>{`${index + 1}.  ${item}`}</p>
                </Grid>
              ))}
            </Grid>
            {/* end response  */}
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
                  RESPONSE
                </Typography>
                <textarea
                  style={{ width: "100", height: "100px" }}
                  value={response}
                  onChange={(e) => {
                    setResponse(e.target.value);
                  }}
                ></textarea>
              </Box>
            </Grid>
            <Grid container mt={"5%"}>
              <Grid item mr={"2%"}>
                <Button
                  sx={{
                    backgroundColor: `${
                      oldSupport?.status === "solved" ? "green" : "#ccc"
                    }`,
                    color: `${
                      oldSupport?.status === "solved" ? "#fff" : "#000"
                    }`,
                    fontWeight: "bold",
                  }}
                  onClick={(e) => {
                    setOldSupport({
                      ...oldSupport,
                      status: "solved",
                    });
                  }}
                >
                  SOLVED
                </Button>
              </Grid>
              <Grid item mr={"2%"}>
                <Button
                  sx={{
                    backgroundColor: `${
                      oldSupport?.status === "pending" ? "#4d874a" : "#ccc"
                    }`,
                    color: `${
                      oldSupport?.status === "pending" ? "#fff" : "#000"
                    }`,
                    fontWeight: "bold",
                  }}
                  onClick={(e) => {
                    setOldSupport({
                      ...oldSupport,
                      status: "pending",
                    });
                  }}
                >
                  Pending
                </Button>
              </Grid>
              <Grid item mr={"2%"}>
                <Button
                  sx={{
                    backgroundColor: `${
                      oldSupport?.status === "cancelled" ? "#6f786e" : "#ccc"
                    }`,
                    color: `${
                      oldSupport?.status === "cancelled" ? "#fff" : "#000"
                    }`,
                    fontWeight: "bold",
                  }}
                  onClick={(e) => {
                    setOldSupport({
                      ...oldSupport,
                      status: "cancelled",
                    });
                  }}
                >
                  CANCELLED
                </Button>
              </Grid>
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
                <Custombutton onClick={() => updateAsset()}>
                  UPDATE
                </Custombutton>
              </Box>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
