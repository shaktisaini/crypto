import { useState, useEffect } from "react";
import TableCustom from "../ActiveTable";
import { Box, Stack, Typography, Button, Toolbar } from "@mui/material";
import Main from "../Layout/Main";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrowright from "../../assets/arrowright.svg";
import arrowleft from "../../assets/arrowleft.svg";
import { request, endpoints } from "./../../lib/request";
import AssetCard from "../Assets/AssetCard";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import moment from "moment";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const authContext = useContext(UserContext);
  const [assets, setAssets] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data } = await request.get(
        `${endpoints.transactions.user}?page=${page}&limit=${limit}`
      );
      setTransactions(data.transactions);
      setCount(data.count);
      setLimit(data.page.limit);

      const assetResponse = await request.get(
        `${endpoints.assets.main}?page=all&is_active=true`
      );
      setAssets(assetResponse.data.assets);
    } catch (error) {}
  };

  const handlePageChange = (image_url, value) => {
    setPage(value);
    getData(value);
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const CustomRightArrow = ({ onClick, next }) => {
    return (
      <div
        style={{
          right: "30%",
          bottom: "0",
          position: "absolute",
        }}
      >
        <Button onClick={() => onClick()}>
          <img src={arrowright} alt=" Right Arrow" />
        </Button>
      </div>
    );
  };
  const CustomLeftArrow = ({ onClick, next }) => {
    return (
      <div
        style={{
          left: "30%",
          bottom: "0",
          position: "absolute",
        }}
      >
        <Button onClick={() => onClick()}>
          <img src={arrowleft} alt=" Left Arrow" />
        </Button>
      </div>
    );
  };
  return (
    <Main>
      <Box sx={{ padding: "0 2% 0 2%" }}>
        <Toolbar />
        <Box sx={{ pt: "5%", pr: "5%", pl: "5%" }}>
          {/* <Box
            sx={{
              backgroundColor: "#FFD0D0",
              padding: "2%",
              marginBottom: "9px",
            }}
          >
            <Typography sx={{}}>
              Your account is not secure please add 2FA authenitication
              immediately from profile
            </Typography>
          </Box> */}
          <Box
            sx={{
              backgroundColor: "rgba(43, 158, 179, 0.35)",
              padding: "2%",
              marginTop: "10%",
            }}
          >
            <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
              {authContext.user
                ? `Last Login: ` +
                  moment(
                    authContext.user.lastLogin
                      ? authContext.user.lastLogin
                      : new Date(Date.now())
                  ).format("LLL")
                : ""}
            </Typography>
          </Box>
        </Box>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          containerClass="carousel-container"
          ssr={true}
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {assets.map((asset, index) => (
            <AssetCard key={index} asset={asset} />
          ))}
        </Carousel>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, sm: 12 }}
        >
          <Box>
            <Typography sx={{ margin: "auto" }}>
              <span style={{ fontWeight: 600, alignItems: "center" }}>
                ACTIVE ORDERS
              </span>
            </Typography>
          </Box>
          <Box>
            <Link to="/Sell">
              <Button
                sx={{
                  backgroundColor: "#000066",
                  borderRadius: "11px",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "10px 40px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#000066",
                  },
                }}
              >
                CREATE ORDER
              </Button>
            </Link>
          </Box>
        </Stack>
        <TableCustom
          transactions={transactions}
          page={page}
          count={count}
          limit={limit}
          handlePageChange={handlePageChange}
        />
      </Box>
    </Main>
  );
}
