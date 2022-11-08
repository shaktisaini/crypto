import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Hambuger = ({ anchorEl, setAnchorEl, open }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Menu
        className="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          width: "100%",
        }}
      >
        <Link to="/Settings">
          <MenuItem>
            <Avatar /> <span>Profile</span>
          </MenuItem>
        </Link>
        <MenuItem>
          <Avatar /> <span>My account</span>
        </MenuItem>
      </Menu>
    </Box>
  );
};
