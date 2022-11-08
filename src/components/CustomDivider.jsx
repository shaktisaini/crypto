import { Box, Divider } from "@mui/material";
import React from "react";

export const CustomDivider = () => {
  return (
    <Box>
      <Divider
        sx={{
          border: "1px solid #000",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      />
    </Box>
  );
};
