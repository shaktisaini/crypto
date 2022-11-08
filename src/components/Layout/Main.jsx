import { Box, Toolbar } from "@mui/material";
import React from "react";
import DashNav from "../Navigation/DashNav.jsx";

const drawerWidth = 240;

class Layout extends React.Component{
  render(){
    return (
      <div>
        
        <DashNav />
  
        <Box
          className="MainDash" sx={{fontfamily:"lufgalight-webfont"}}
        >
          {this.props.children}
        </Box>
      </div>
    )
  }
}

export default Layout;
