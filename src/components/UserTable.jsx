import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import moment from "moment";
import { currencyFormat } from "../lib/common";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user-context";

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
export default function UserTable({
  count,
  limit,
  page,
  users,
  handlePageChange,
}) {
  const authContext = useContext(UserContext);
  return (
    <>
      <TableContainer sx={{ marginTop: "12px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="left">PHOTO</StyledTableCell>
              <StyledTableCell align="left">NAME</StyledTableCell>
              <StyledTableCell align="left">EMAIL</StyledTableCell>
              <StyledTableCell align="left">PHONE</StyledTableCell>
              <StyledTableCell align="center">STATUS</StyledTableCell>
              {authContext?.user?.is_super_admin ? (
                <>
                  <StyledTableCell align="center">ACTION</StyledTableCell>
                </>
              ) : null}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? (
              <>
                {users.map((user, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">
                      {!authContext.user.photo ? (
                        <img
                          src={user.photo}
                          alt="P"
                          style={{
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                          }}
                        />
                      ) : (
                        <img
                          src="/images/bojapay.png"
                          alt="P"
                          style={{
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                          }}
                        />
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {`${user.first_name} ${user.other_names} ${user.last_name} `}
                    </StyledTableCell>
                    <StyledTableCell align="left">{user.email}</StyledTableCell>
                    <StyledTableCell align="left">
                      {`+${user.phone}`}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {user.status === "success" ? (
                        <span style={{ color: "green" }}>{user.status}</span>
                      ) : user.status === "pending" ? (
                        <span style={{ color: "orange" }}>{user.status}</span>
                      ) : (
                        <span style={{ color: "red" }}>{user.status}</span>
                      )}
                    </StyledTableCell>

                    {authContext?.user?.is_super_admin ? (
                      <StyledTableCell align="center">
                        <Link
                          style={{
                            backgroundColor: "#1976d2",
                            padding: "0.6rem",
                            borderRadius: "0.5rem",
                          }}
                          to={`/ViewUser/${user.id}`}
                        >
                          <span
                            style={{
                              color: "#fff",
                              fontWeight: "bold",
                            }}
                          >
                            MANAGE
                          </span>
                        </Link>
                      </StyledTableCell>
                    ) : null}
                  </StyledTableRow>
                ))}
              </>
            ) : (
              <></>
              // <div
              //   style={{
              //     displa: "flex",
              //     alignItems: "center",
              //     backgroundColor: "red",
              //   }}
              // >
              //   <Typography sx={{ textAlign: "center", fontWeight: "700" }}>
              //     YOU DON’T HAVE ANY ACTIVE ORDER
              //   </Typography>
              // </div>
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
