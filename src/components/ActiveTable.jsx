import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import moment from "moment";
import { currencyFormat } from "../lib/common";

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
export default function CustomizedTables({
  transactions,
  limit,
  page,
  handlePageChange,
  count,
}) {
  return (
    <>
      <TableContainer sx={{ marginTop: "12px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">DATE</StyledTableCell>
              <StyledTableCell align="center">TRANSACTION ID</StyledTableCell>
              <StyledTableCell align="center">TX REF</StyledTableCell>
              <StyledTableCell align="center">AMOUNT</StyledTableCell>
              <StyledTableCell align="center">PAYMENT STATUS</StyledTableCell>
              <StyledTableCell align="center">STATUS</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {transactions.length > 0 ? (
              <>
                {transactions.map((trans, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {moment(trans.created_at).format("LLL")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {trans.transactionRef}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {trans.rx_ref}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {currencyFormat(parseFloat(trans.amount).toFixed(2))}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {trans.payment_status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {trans.status === "success" ? (
                        <span style={{ color: "green" }}>{trans.status}</span>
                      ) : trans.status === "pending" ? (
                        <span style={{ color: "orange" }}>{trans.status}</span>
                      ) : (
                        <span style={{ color: "red" }}>{trans.status}</span>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </>
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
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
            count={Math.round(count / limit)}
            page={page}
            onChange={handlePageChange}
          />
        </Stack>
      </Box>
    </>
  );
}
