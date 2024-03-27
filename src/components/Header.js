import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"


const Header = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={darkTheme}>

            <AppBar position="static">
                <Toolbar>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>

                        <Button color="inherit" onClick={() => navigate("/users/create")}> Add User</Button>


                    </Box>


                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header