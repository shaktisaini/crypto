import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { request, endpoints } from "../../lib/request";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DashAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = useState(null);
  const open = Boolean(anchorEl);
  const authContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOutUser = () => {
    authContext.setToken("");
    authContext.setUser(null);
    return navigate("/");
  };

  const getData = async () => {
    try {
      const { data } = await request.get(endpoints.auth.currentUser);
      if (data.status === "success") {
        setUser({
          ...data.user,
        });
      }
    } catch (error) {}
  };

  const uploadPhoto = (event) => {
    let formData = new FormData();
    formData.append("photo", event.target.files[0]);
    formData.append("dirName", "profile");

    request
      .post(endpoints.uploads.photo, formData)
      .then(({ data }) => {
        console.log(data);
        setUser({
          ...user,
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

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <div className="prof-pic">
          <div className="profile-avatar">
            {!authContext.user?.photo ? (
              <Avatar
                sx={{ width: "70px", height: "70px" }}
                src="/images/bojapay.png"
                alt="PHOTO"
              />
            ) : (
              <Avatar src={authContext.user?.photo} alt="PHOTO" />
            )}
          </div>
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </div>
      </IconButton>
      <Menu
        sx={{
          ".MuiMenu-paper": { bgcolor: "#2B9EB3", color: "white" },
          display: { xs: "flex", md: "flex" },
        }}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#2B9EB3",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link to="/Settings">
            <Typography>Dashboard</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Settings">
            <Typography>Profile</Typography>
          </Link>
        </MenuItem>

        {/* USERS */}

        {authContext.user.is_super_admin ? (
          <>
            <MenuItem>
              <Link to="/UserManagement">
                <Typography>Manage Users</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Assets">
                <Typography>Manage Assets/Tokens</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/AdminTransactions">
                <Typography>Manage Transactions</Typography>
              </Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Link to="/ExchangeTransfer">
                <Typography>Exchange/Transfer</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Sell">
                <Typography>Sell</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Notifications">
                <Typography>Notifications</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Wallet">
                <Typography>Wallet</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/SupportClient">
                <Typography>
                  {authContext.user && authContext.user.is_super_admin
                    ? `CLIENT `
                    : ""}
                  SUPPORT
                </Typography>
              </Link>
            </MenuItem>
          </>
        )}
        {/* END USERS */}

        {/* ADMIN  */}
        {/* END ADMIN  */}
        <MenuItem>
          <Link to="/FAQ">
            <Typography>FAQ</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Privacy">
            <Typography>Privacy & Policy</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Typography onClick={() => signOutUser()}>Log Out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default DashAvatar;
