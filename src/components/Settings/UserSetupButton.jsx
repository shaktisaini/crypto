import { Box } from "@mui/material";
import React, { useState } from "react";
import { Custombutton } from "../Button";
import { UserSetUp } from "./UserSetUp";
import LockIcon from "@mui/icons-material/Lock";

export const UserSetupButton = () => {
  const [open, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  return (
    <Box>
      <Custombutton
        onClick={handleOpen}
        startIcon={<LockIcon src="/person.svg" height={32} width={25} />}
      >
        CHANGE PASSWORD
      </Custombutton>
      <UserSetUp open={open} setOpenModal={setOpenModal} />
    </Box>
  );
};
