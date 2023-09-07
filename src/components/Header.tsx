import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Shop</span>
                    </Typography>
                    <Button
                        onClick={() => navigate('/cart')} 
                        color="inherit"
                    >Cart</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;