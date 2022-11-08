import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { currencyFormat, formatAddress } from "../../lib/common";
import UpdateAsset from "./UpdateAsset";

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    borderBottom: "2px solid #868694",
    borderTop: "2px solid #868694",
  },
  [`&.${tableCellClasses.body}`]: {
    border: "none",
  },
});

const StyledTableRow = styled(TableRow)({
  [`&.${tableCellClasses.head}`]: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});
export default function AssetTable({
  assets,
  limit,
  page,
  handlePageChange,
  count,
  getData,
}) {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  console.log(currentItem);

  return (
    <>
      <TableContainer sx={{ marginTop: "12px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">IMAGE</StyledTableCell>
              <StyledTableCell align="center">NAME</StyledTableCell>
              <StyledTableCell align="center">SYMBOL</StyledTableCell>
              <StyledTableCell align="center">ADDRESS</StyledTableCell>
              <StyledTableCell align="center">LIQUIDITY</StyledTableCell>
              <StyledTableCell align="center">
                TRANSACTION SETUP
              </StyledTableCell>
              <StyledTableCell align="center">STATUS</StyledTableCell>
              <StyledTableCell align="center">ACTION</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {assets.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">
                  <img width={50} src={item.image_url} alt={item.name} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.name ? item.name : `Bitcoin`}
                </StyledTableCell>
                <StyledTableCell align="center">{item.symbol}</StyledTableCell>

                <StyledTableCell align="center">
                  {formatAddress(item.address)}
                </StyledTableCell>

                <StyledTableCell align="center">
                  {item.total_liquidity
                    ? currencyFormat(item.total_liquidity)?.replace(
                        "₦",
                        item.symbol
                      )
                    : `${item.symbol} 0.00`}
                </StyledTableCell>

                <StyledTableCell align="center">
                  <Typography>
                    Sell. Price: {currencyFormat(item.selling_price)}
                  </Typography>
                  <Typography>
                    Buy Price: {currencyFormat(item.buying_price)}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.is_active ? (
                    <span style={{ color: "green" }}>Active</span>
                  ) : (
                    <span style={{ color: "red" }}>Not Active</span>
                  )}
                </StyledTableCell>

                <StyledTableCell align="center">
                  <Button
                    id={`updating-old-asset-${item.id}`}
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
                    onClick={() => {
                      setCurrentItem(item);
                      setUpdateOpen(!updateOpen);
                    }}
                  >
                    {" "}
                    UPDATE
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {currentItem ? (
        <UpdateAsset
          asset={currentItem}
          open={updateOpen}
          setOpen={setUpdateOpen}
          getData={getData}
        />
      ) : null}

      <Box
        sx={{ pt: "2%", pr: "5%", pl: "5%" }}
        style={{
          display: "flex",
          marginTop: "2%",
          justifyContent: "flex-end",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={Math.round(count / limit) ? Math.round(count / limit) : 1}
            page={page}
            onChange={handlePageChange}
          />
        </Stack>
      </Box>
    </>
  );
}
