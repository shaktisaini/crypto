import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CustomTextFieldTwo } from "../CustomTextBox";
import { useState } from "react";
import { Custombutton } from "../Button";
import { endpoints, request } from "../../lib/request";
import { Grid } from "@mui/material";
import toast from "react-hot-toast";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default function UpdateAsset({ open, setOpen, getData, asset }) {
  const [oldAsset, setOldAsset] = useState({
    name: "",
    symbol: "",
    address: "",
    image_url: "",
    selling_price: "",
    buying_price: "",
    total_liquidity: "",
    is_active: true,
  });

  useEffect(() => {
    setOldAsset({ ...asset });
  }, [asset]);
  const handleClose = () => setOpen(false);

  const updateAsset = async () => {
    try {
      console.log("Asset", oldAsset);
      const { data } = await request.patch(
        `${endpoints.assets.main}/${oldAsset.id}`,
        {
          ...oldAsset,
        }
      );

      if (data) {
        console.log("Asset", data);
        getData();
        handleClose();
        toast.success(`Successfully update your asset/token information`);
      }
    } catch (error) {
      error?.response?.data?.errors.forEach((err) => {
        toast.error(err.message);
      });
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby={`updating-old-asset-${asset.id}`}
        aria-describedby="transition-modal-description"
        open={open}
        id={`updating-old-asset-${asset.id}`}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ marginBottom: "4%" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                UPDATE <i>{asset.name}</i> BASIC INFORMATION
              </Typography>
            </Box>
            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    NAME
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                    }}
                    value={oldAsset.name}
                    onChange={(e) =>
                      setOldAsset({
                        ...oldAsset,
                        name: e.target.value,
                      })
                    }
                    placeholder="Name"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    SYMBOL
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    value={oldAsset.symbol}
                    onChange={(e) =>
                      setOldAsset({
                        ...oldAsset,
                        symbol: e.target.value,
                      })
                    }
                    placeholder="Symbol e.g BTC"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    ADDRESS
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                    }}
                    value={oldAsset.address}
                    onChange={(e) =>
                      setOldAsset({
                        ...oldAsset,
                        address: e.target.value,
                      })
                    }
                    placeholder="Address"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    IMAGE
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    value={oldAsset.image_url}
                    onChange={(e) =>
                      setOldAsset({
                        ...oldAsset,
                        image_url: e.target.value,
                      })
                    }
                    placeholder="https://image.png"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ marginBottom: "4%" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                TRANSACTION SETUP
              </Typography>
            </Box>

            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    BUYING PRRICE
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                    }}
                    type="number"
                    value={oldAsset.buying_price}
                    onChange={(e) =>
                      setOldAsset({
                        ...oldAsset,
                        buying_price: e.target.value,
                      })
                    }
                    placeholder="0.00"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    SELLING PRICE
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    value={oldAsset.selling_price}
                    onChange={(e) =>
                      setOldAsset({
                        ...oldAsset,
                        selling_price: e.target.value,
                      })
                    }
                    type="number"
                    placeholder="0.00"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ marginBottom: "4%" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                MANAGE LIQUIDITY
              </Typography>
            </Box>
            <Grid container>
              <Grid item sm={12} md={6} lg={6}>
                <Box sx={{ mb: "1%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      mb: "1%",
                      fontFamily: "lufgalight-webfont",
                    }}
                  >
                    {oldAsset.symbol} Liquidity
                  </Typography>
                  <CustomTextFieldTwo
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "35px",
                      marginLeft: "5px",
                    }}
                    type="number"
                    value={oldAsset.total_liquidity}
                    onChange={(e) =>
                      setOldAsset({
                        ...oldAsset,
                        total_liquidity: e.target.value,
                      })
                    }
                    placeholder="0.00"
                    size="small"
                  />
                </Box>
              </Grid>

              <Grid item sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    mb: "1%",
                    mt: "7.5%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={oldAsset.is_active}
                        onChange={(e) =>
                          setOldAsset({
                            ...oldAsset,
                            is_active: !oldAsset.is_active,
                          })
                        }
                      />
                    }
                    label="Is Active"
                  />
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                mb: "1%",
                mt: "7.5%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Custombutton onClick={() => updateAsset()}>UPDATE</Custombutton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
