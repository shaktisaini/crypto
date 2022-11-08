import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDivider } from "../CustomDivider";
import AuthLayout from "../Layout/AuthLayout";

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Privacy = () => {
  return (
    <AuthLayout>
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Toolbar />
      <Toolbar />
      <Box sx={{ pr: "5%", pl: "5%" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
          PRIVACY & POLICY
        </Typography>
        <CustomDivider sx={{}} />      
            <Typography sx={{ fontSize: "1em", marginTop: "30px" }}>
               This privacy policy sets out how NairaEx.com uses and protects any information that you give ‘Bojapay.com' when you use this website.
            </Typography>
            <Typography sx={{ fontSize: "1em", marginTop: "10px" }}>
               Bojapay.com is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
            </Typography> 
            <Typography sx={{ fontSize: "1em", marginTop: "10px" }}>
              Bojapay.com may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
            </Typography>
            <Typography sx={{ fontSize: "1em", marginTop: "10px" }}>
              Bojapay.com may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.<br/>
              What we collect We may collect the following information:<br/><br/>
              Name, Bank and payment details Proof of identification for verification Proof of address for verification Contact information including email address Demographic information such as postcode, preferences and interests Other information relevant to customer surveys and/or offers What we do with the information we gather We require this information for verification, to understand your needs and provide you with a better service, and in particular for the following reasons:<br/><br/>
              To process your order and obtain and/or send payment For additional security Internal record keeping We may use the information to improve our products and services We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests Security We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.<br/><br></br>
              How we use cookies A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.<br/><br/>
              Links to other websites Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.<br/><br/>
              If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible. We will promptly correct any information found to be incorrect.
            </Typography>
             
      </Box>
    </Box>
    </AuthLayout>
  );
};
export default Privacy;

