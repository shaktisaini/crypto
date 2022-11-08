import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import AboutLogo from "../../assets/AboutLogo.svg";

let theme = createTheme({
  typography: {
    body1: {
      textAlign: "center",
      fontSize: "1em",
      fontFamily: "lufgalight-webfont",
    },
    h1: {
      fontWeight: 600,
      textAlign: "center",
      fontSize: "1.5em",
      fontFamily: "lufgalight-webfont",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.5em",
      fontFamily: "lufgalight-webfont",
    },
    body2: {
      fontFamily: "lufgalight-webfont",
    },
  },
});
theme = responsiveFontSizes(theme);

const Why = () => {
  return (
    <Box sx={{}}>
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <Typography color="#000066" variant="body1">
            {" "}
            Checkout our awesome feedbacks!{" "}
          </Typography>
          <Typography
            color="#000066"
            variant="h1"
            style={{ fontSize: "16px !important" }}
          >
            What our Users think about US
          </Typography>
        </ThemeProvider>
        <Swiper
          style={{
            "--swiper-navigation-color": "#1E1E1E",
            "--swiper-pagination-color": "#1E1E1E",
          }}
          speed={600}
          parallax={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Parallax, Navigation]}
          className="mySwiper"
        >
          <Box
            slot="container-start"
            className="parallaxbg"
            style={{
              backgroundColor: "#fff",
            }}
            data-swiper-parallax="-23%"
          ></Box>
          <SwiperSlide style={{ padding: "3% 0% 3% 0%" }}>
            <Box className="box">
              <Grid container spacing={0.5}>
                <Grid item xs={12} sm={4} data-swiper-parallax="-100">
                  <img src={AboutLogo} alt="Logo" />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  data-swiper-parallax="-300"
                  style={{ margin: "auto" }}
                >
                  <svg
                    width="20"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.9336 0.900391V4.51367C25.6966 5.16471 24.8014 6.22266 24.248 7.6875C23.7272 9.11979 23.4668 11.7077 23.4668 15.4512V16.5742H26.9336V26.1934H17.2656V18.0879C17.2656 13.8887 17.64 10.8451 18.3887 8.95703C19.1374 7.03646 20.2767 5.32747 21.8066 3.83008C23.3691 2.33268 25.0781 1.35612 26.9336 0.900391ZM10.0391 0.900391V4.51367C8.80208 5.16471 7.92318 6.22266 7.40234 7.6875C6.88151 9.11979 6.62109 11.7077 6.62109 15.4512V16.5742H10.0391V26.1934H0.419922V18.0879C0.419922 13.8887 0.777995 10.8451 1.49414 8.95703C2.24284 7.03646 3.39844 5.32747 4.96094 3.83008C6.52344 2.33268 8.21615 1.35612 10.0391 0.900391Z"
                      fill="black"
                    />
                  </svg>
                </Grid>
                <Grid item xs={10} sm={6} style={{ margin: "auto" }}>
                  <ThemeProvider theme={theme}>
                    <Typography color="#000000" variant="h2">
                      JOHNATHAN D.
                    </Typography>
                    <br />
                    <Typography color="#000000" variant="body2">
                      I think this is the easiest site i have used pretty
                      straightforward and doesnt waste your time and so long as
                      my money is safe here its one of the b..
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={1} sm={1} style={{ margin: "auto" }}>
                  <svg
                    width="20"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0664062 26.0996V22.4863C1.30339 21.8353 2.19857 20.7773 2.75195 19.3125C3.27279 17.8802 3.5332 15.2923 3.5332 11.5488V10.4258H0.0664062V0.806641H9.73438V8.91211C9.73438 13.1113 9.36003 16.1549 8.61133 18.043C7.86263 19.9635 6.72331 21.6725 5.19336 23.1699C3.63086 24.6673 1.92188 25.6439 0.0664062 26.0996ZM16.9609 26.0996V22.4863C18.1979 21.8353 19.0768 20.7773 19.5977 19.3125C20.1185 17.8802 20.3789 15.2923 20.3789 11.5488V10.4258H16.9609V0.806641H26.5801V8.91211C26.5801 13.1113 26.222 16.1549 25.5059 18.043C24.7572 19.9635 23.6016 21.6725 22.0391 23.1699C20.4766 24.6673 18.7839 25.6439 16.9609 26.0996Z"
                      fill="black"
                    />
                  </svg>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ padding: "3% 0% 3% 0%" }}>
            <Box className="box">
              <Grid container spacing={0.5}>
                <Grid item xs={12} sm={4} data-swiper-parallax="-100">
                  <img src={AboutLogo} alt="Logo" />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  data-swiper-parallax="-300"
                  style={{ margin: "auto" }}
                >
                  <svg
                    width="20"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.9336 0.900391V4.51367C25.6966 5.16471 24.8014 6.22266 24.248 7.6875C23.7272 9.11979 23.4668 11.7077 23.4668 15.4512V16.5742H26.9336V26.1934H17.2656V18.0879C17.2656 13.8887 17.64 10.8451 18.3887 8.95703C19.1374 7.03646 20.2767 5.32747 21.8066 3.83008C23.3691 2.33268 25.0781 1.35612 26.9336 0.900391ZM10.0391 0.900391V4.51367C8.80208 5.16471 7.92318 6.22266 7.40234 7.6875C6.88151 9.11979 6.62109 11.7077 6.62109 15.4512V16.5742H10.0391V26.1934H0.419922V18.0879C0.419922 13.8887 0.777995 10.8451 1.49414 8.95703C2.24284 7.03646 3.39844 5.32747 4.96094 3.83008C6.52344 2.33268 8.21615 1.35612 10.0391 0.900391Z"
                      fill="black"
                    />
                  </svg>
                </Grid>
                <Grid item xs={10} sm={6} style={{ margin: "auto" }}>
                  <ThemeProvider theme={theme}>
                    <Typography color="#000000" variant="h2">
                      MICHAEL B.
                    </Typography>
                    <br />
                    <Typography color="#000000" variant="body2">
                      I think this is the easiest site i have used pretty
                      straightforward and doesnt waste your time and so long as
                      my money is safe here its one of the b..
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={1} sm={1} style={{ margin: "auto" }}>
                  <svg
                    width="20"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0664062 26.0996V22.4863C1.30339 21.8353 2.19857 20.7773 2.75195 19.3125C3.27279 17.8802 3.5332 15.2923 3.5332 11.5488V10.4258H0.0664062V0.806641H9.73438V8.91211C9.73438 13.1113 9.36003 16.1549 8.61133 18.043C7.86263 19.9635 6.72331 21.6725 5.19336 23.1699C3.63086 24.6673 1.92188 25.6439 0.0664062 26.0996ZM16.9609 26.0996V22.4863C18.1979 21.8353 19.0768 20.7773 19.5977 19.3125C20.1185 17.8802 20.3789 15.2923 20.3789 11.5488V10.4258H16.9609V0.806641H26.5801V8.91211C26.5801 13.1113 26.222 16.1549 25.5059 18.043C24.7572 19.9635 23.6016 21.6725 22.0391 23.1699C20.4766 24.6673 18.7839 25.6439 16.9609 26.0996Z"
                      fill="black"
                    />
                  </svg>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Why;
