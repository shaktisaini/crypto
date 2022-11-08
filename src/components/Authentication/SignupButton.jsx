import { Box } from "@mui/material";
import React, { useState } from "react";
import { Custombutton } from "../Button";
import { SignUp } from "./SignUp";

export const SignupButton = ({ style = {} }) => {
  const [open, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  return (
    <Box>
      <Custombutton
        onClick={handleOpen}
        sx={{
          whiteSpace: "nowrap",
          backgroundColor: "transparent !important",
          "&:hover ": {
            border: "1px solid white",
          },
          borderRadius: "23px",
          ...style,
        }}
      >
        sign up
      </Custombutton>
      <SignUp open={open} setOpenModal={setOpenModal} />
    </Box>
  );
};
