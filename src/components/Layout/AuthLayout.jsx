import { Box } from "@mui/material";
import React from "react";
import HomeNavbar from "../Navigation/HomeNavbar";


class Layout2 extends React.Component {
  render(){
    return (
      <div>
        
        <HomeNavbar />
  
       
          {this.props.children}
       
      </div>
      )
    }
  }

export default Layout2;
