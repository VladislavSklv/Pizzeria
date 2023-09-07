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
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Shop
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