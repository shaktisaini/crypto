import * as React from "react";
import { Box, Stack, Typography, Button, Toolbar } from "@mui/material";
import Main from "../Layout/Main";
import { useState, useEffect } from "react";
import { request, endpoints } from "./../../lib/request";
import AssetTable from "./AssetTable";
import CreateAsset from "./CreateAsset";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Assets() {
  const [value, setValue] = React.useState(0);
  const [assets, setAssets] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data } = await request.get(endpoints.assets.main);
      console.log(data);
      setAssets(data.assets);
      setCount(data.count);
      setLimit(data.page.limit);
    } catch (error) {}
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Main>
      <Box sx={{ padding: "0 2% 0 2%" }}>
        <Toolbar />
        <Toolbar />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, sm: 12 }}
          borderBottom="2px solid #868694"
          paddingBottom="15px"
        >
          <Box>
            <Typography
              sx={{ margin: "auto", fontFamily: "lufgamedium-webfont" }}
            >
              <span>ASSETS</span>
            </Typography>
          </Box>
          <Box>
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
              onClick={() => setOpen(!open)}
            >
              {" "}
              CREATE ASSET
            </Button>

            <CreateAsset open={open} setOpen={setOpen} getData={getData} />
          </Box>
        </Stack>
        <TabPanel value={value} index={0}>
          <Box>
            <Typography sx={{ fontFamily: "lufgamedium-webfont" }}>
              ALL ASSETS
            </Typography>
            <AssetTable
              count={count}
              limit={limit}
              page={page}
              assets={assets}
              getData={getData}
              handlePageChange={handlePageChange}
            />
            <br /> <br />
          </Box>
        </TabPanel>
      </Box>
    </Main>
  );
}
