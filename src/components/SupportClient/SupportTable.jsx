import { useContext, useState } from "react";
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
import UpdateAsset from "./UpdateSupport";
import { UserContext } from "../../context/user-context";

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
export default function SupportTable({
  supports,
  limit,
  page,
  handlePageChange,
  count,
  getData,
}) {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const authContext = useContext(UserContext);

  return (
    <>
      <TableContainer sx={{ marginTop: "12px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="left">SUBJECT</StyledTableCell>
              <StyledTableCell align="left">MESSAGE</StyledTableCell>
              {authContext.user && authContext.user.is_super_admin ? (
                <StyledTableCell align="left">USER</StyledTableCell>
              ) : null}
              <StyledTableCell align="center">STATUS</StyledTableCell>
              <StyledTableCell align="center">ACTION</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {supports.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="left">{item.subject}</StyledTableCell>
                <StyledTableCell align="left">{item.message}</StyledTableCell>

                {authContext.user && authContext.user.is_super_admin ? (
                  <StyledTableCell align="left">
                    {item?.user?.first_name
                      ? `${item?.user?.first_name} ${item?.user?.last_name}`
                      : item?.user?.phone}
                  </StyledTableCell>
                ) : null}
                <StyledTableCell align="center">{item.status}</StyledTableCell>
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
                    {authContext.user && authContext.user.is_super_admin
                      ? `RESPOND`
                      : `VIEW`}
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
