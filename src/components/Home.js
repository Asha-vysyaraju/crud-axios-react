
import { useState, useEffect } from "react"
import { API } from "../global"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export function Home() {

    const navigate = useNavigate()
    const [userData, setUserData] = useState([]);

    const getUsers = () => {
        fetch(`${API}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((users) => setUserData(users)
            )
    }
    useEffect(() => getUsers(), [])


    return (
        <div className="m-5">

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">User Name</StyledTableCell>
                            <StyledTableCell align="left">Email Address</StyledTableCell>
                            <StyledTableCell align="left">Website</StyledTableCell>
                            <StyledTableCell align="left">Phone number</StyledTableCell>
                            <StyledTableCell align="left">City</StyledTableCell>
                            <StyledTableCell align="left">Company</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell component="th" scope="row">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{user.username}</StyledTableCell>
                                <StyledTableCell align="left">{user.email}</StyledTableCell>
                                <StyledTableCell align="left">{user.website}</StyledTableCell>
                                <StyledTableCell align="left">{user.phone}</StyledTableCell>
                                <StyledTableCell align="left">{user.address.city}</StyledTableCell>
                                <StyledTableCell align="left">{user.company.name}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <div className="d-flex">

                                        <IconButton aria-label="deletBtn" color="error"
                                            onClick={() => navigate(`/user/edit/${user.id}`)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="deletBtn" color="secondary"
                                            onClick={() => {
                                                fetch(`${API}/${user.id}`, {
                                                    method: "DELETE"
                                                })
                                                    .then(() => getUsers())
                                            }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* {productList.map((pd) => (
          <Product key={pd.id} product={pd} id={pd.id} 
          deleteButton={
            <IconButton aria-label="deletBtn" color="secondary"
              onClick={() => {
                fetch(`${API}/${pd.id}`, {
                  method: "DELETE"
                })
                .then(()=>getProducts())
               }}>
              <DeleteIcon />
            </IconButton>
          } 
          editButton={
            <IconButton aria-label="deletBtn" color="error"
              onClick={() => navigate(`/products/edit/${pd.id}`)}>
              <EditIcon />
            </IconButton>
          }/>

        ))} */}
        </div>
    )
}
