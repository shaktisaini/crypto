import { Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import bitcoin from "../../assets/Bitcoin.png";
import ethereum from "../../assets/ethereum.svg";
import ltokens from "../../assets/Ltoken.svg";
import ttokens from "../../assets/Ttoken.svg";
import { CustomBox } from '../TokenDivs';

const style = {
    height: "64px",
    width: "64px",
  };
const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
      borderBottom: "2px solid #868694",
      borderTop: "2px solid #868694",     
    },
    [`&.${tableCellClasses.body}`]: {
      border:"none",
    },
  });
  
  const StyledTableRow = styled(TableRow)({
    [`&.${tableCellClasses.head}`]: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
  });
  export default function CustomizedTables() {
      return (
          <>
            <TableContainer sx={{marginTop:"12px"}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align='center'>BITCOIN(BTC)</StyledTableCell>
                            <StyledTableCell align='center'>ETHEREUM(ETH)</StyledTableCell>
                            <StyledTableCell align='center'>LITECOIN(LTC)</StyledTableCell>
                            <StyledTableCell align='center'>TETHER(USDT)</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow> 
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={bitcoin} alt="bitcoin" layout="fill" />
                                </Avatar>
                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography>
                                    <span style={{ fontWeight:700, fontSize: ".9em"}}>BTC/NGN</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={ethereum} alt="bitcoin" layout="fill" />
                                </Avatar>

                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>ETH/NGN</span>
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                            <Avatar sx={style}>
                                <img src={ltokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>LTC/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px " }}>
                            <Avatar sx={style}>
                                <img src={ttokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>USDT/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow> 
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={bitcoin} alt="bitcoin" layout="fill" />
                                </Avatar>
                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography>
                                    <span style={{ fontWeight:700, fontSize: ".9em"}}>BTC/NGN</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={ethereum} alt="bitcoin" layout="fill" />
                                </Avatar>

                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>ETH/NGN</span>
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                            <Avatar sx={style}>
                                <img src={ltokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>LTC/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px " }}>
                            <Avatar sx={style}>
                                <img src={ttokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>USDT/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow> 
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={bitcoin} alt="bitcoin" layout="fill" />
                                </Avatar>
                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography>
                                    <span style={{ fontWeight:700, fontSize: ".9em"}}>BTC/NGN</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={ethereum} alt="bitcoin" layout="fill" />
                                </Avatar>

                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>ETH/NGN</span>
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                            <Avatar sx={style}>
                                <img src={ltokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>LTC/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px " }}>
                            <Avatar sx={style}>
                                <img src={ttokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>USDT/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow> 
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={bitcoin} alt="bitcoin" layout="fill" />
                                </Avatar>
                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography>
                                    <span style={{ fontWeight:700, fontSize: ".9em"}}>BTC/NGN</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell>
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                                <Avatar sx={style}>
                                    <img src={ethereum} alt="bitcoin" layout="fill" />
                                </Avatar>

                                <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>ETH/NGN</span>
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                    </Typography>
                                    <Typography sx={{fontSize: ".9em"}}>
                                    <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                    </Typography>
                                </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px" }}>
                            <Avatar sx={style}>
                                <img src={ltokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>LTC/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                            <StyledTableCell> 
                            <CustomBox sx={{ display: "flex", padding: "20px 10px " }}>
                            <Avatar sx={style}>
                                <img src={ttokens} alt="bitcoin" layout="fill" />
                            </Avatar>

                            <Box sx={{ margin: "auto", paddingLeft: "2%" }}>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>USDT/NGN</span>
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>BUY:</span>17970345.41
                                </Typography>
                                <Typography sx={{fontSize: ".9em"}}>
                                <span style={{ fontWeight: 700 }}>SELL:</span>17970345.41
                                </Typography>
                            </Box>
                            </CustomBox>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>   
            </TableContainer>
        </>
      )    
  }