import { Box, List, ListItem, Grid, Toolbar, Typography, TextField } from "@mui/material";
import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider,} from '@mui/material/styles';
import { CustomDivider } from "../CustomDivider";
import { Custombutton } from "../Button";
import {CustomTextFieldThree} from "../CustomTextBox"
import AuthLayout from "../Layout/AuthLayout";

let theme = createTheme({
    typography:{
      h1: {
        fontWeight: 600,
        
      },
      h2: {
        fontWeight: 600,
        fontFamily: 'lufgamedium-webfont',
        fontSize: '1.5em'
      },      
      body1: {
        fontFamily: 'lufgalight-webfont',
      },
      
    }
  });
theme = responsiveFontSizes(theme);

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const FAQ = () => {
  return (
    <AuthLayout>
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Toolbar />
      <Toolbar />
      <Box sx={{ pr: "5%", pl: "5%" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "20px" }} variation="h1">
                Frequently Asked Questions(FAQs)
                </Typography>
                <CustomDivider sx={{}} />  
        <Grid container spacing={2} sx={{padding:"2% 0 2% 0"}}>
        <ThemeProvider theme={theme}>
            <Grid item xs={12} sm={8}>
                    
                <Typography variant="h2">How do I verify my Bojapay account?</Typography>  
                <Typography variant="body1">Bojapay will require your Bank Verification Number (BVN), Government-Issued Photo ID Card, and Selfie holding Photo ID Card documents to validate your account.</Typography>  
                <Typography variant="h2"> How can I create a Bojapay account?</Typography>
                  <List sx={{ listStyle: 'decimal', fontSize: '1.1em', marginLeft: '2%'}}>
                    <ListItem sx={{ display: 'list-item' }}>Log in to bojapay.io and click Sign Up</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Enter your name, email, and password and click on the 'Sign Up' button</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Search for the Bojapay email in your email account, and click on the link to confirm your registration</ListItem>
                  </List>
                <Typography variant="h2"> I forgot my password, how can I reset it?</Typography>
                  <List sx={{ listStyle: 'disc', fontSize: '1.1em' , marginLeft: '2%'}}>
                    <ListItem sx={{ display: 'list-item' }}>Click Forgot Password on the login page and enter the email with which you registered.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>You will receive an email with instructions to create a new password.</ListItem>
                  </List>
                <Typography variant="h2">I have not received my registration confirmation email, what do I do?</Typography>
                  <List sx={{ listStyle: 'disc', fontSize: '1.1em' , marginLeft: '2%'}}>
                    <ListItem sx={{ display: 'list-item' }}>First check your spam folder, since sometimes the confirmation email can get there.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>If you can not find the email in the spam folder, click on Resend confirmation and enter the email address that you registered with BojaPay.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>If you find multiple confirmation emails in your email, be sure to open the most recent one.</ListItem>
                  </List>
                <Typography variant="h2">How do I protect my BojaPay account?</Typography>
                <List sx={{ listStyle: 'disc', fontSize: '1.1em' , marginLeft: '2%' }}>
                    <ListItem sx={{ display: 'list-item' }}>BojaPay staff will never ask for your password, 2-factor authentication codes, or other login credentials.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Beware of imposters and verify any information you find via forums, social media, and google adverts.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Be aware of Phishing and bookmark www.bojapay.io</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Use a strong password. </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Use more than 8 characters, at least one uppercase letter, one number, and one special character.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Enable two-factor authentication.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}> Do not divulge confidential or financial information to any person.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Remember that your BojaPay account is for strictly personal use.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Do not download unreliable software or 3rd Party applications that may compromise the security of your device.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>If you receive an email in our name that seems suspicious, contact us directly at info@bojapay.io and avoid clicking links or opening attachments in emails</ListItem>
                  </List>
            </Grid>
            <Grid item xs={12} sm={4}>
                 <Box sx={{border:"1px solid black", textAlign:"right", marginTop: "10px", padding:"42px" }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "30px" }}>Contact US</Typography>
                    <Typography variant="h2" sx={{marginTop:"18px"}}>If you have any queries, feel free to ask</Typography>
                    <Typography variant="h2">or emai us at info@bojapay.io</Typography>
                    <Typography variant="h2" sx={{marginTop:"24px"}}>Name</Typography>
                    <CustomTextFieldThree sx={{width:"90%", marginTop:"24px"}}></CustomTextFieldThree>
                    <Typography variant="h2" sx={{marginTop:"24px"}}>Email Address</Typography>
                    <CustomTextFieldThree sx={{width:"90%", marginTop:"24px"}}></CustomTextFieldThree>
                    <Typography variant="h2" sx={{marginTop:"24px"}}>Message</Typography>
                    <CustomTextFieldThree sx={{width:"90%", marginTop:"24px"}}></CustomTextFieldThree>
                    <br/><br/>
                    <Custombutton sx={{width:"40%", borderRadius: "0px" }}>Send</Custombutton>
                 </Box>
            </Grid>
         </ThemeProvider>
        </Grid>
      </Box>
    </Box>
    </AuthLayout>
  );
};
export default FAQ;

