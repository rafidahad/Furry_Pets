// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Show the menu button on small screens */}
          {!isMdUp && (
            <IconButton onClick={onMenuClick} sx={{ color: '#878a8c', mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
            Furry Friends
          </Typography>
        </Box>

        {/* Middle Section: Search Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f6f7f8',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            width: '40%',
          }}
        >
          <SearchIcon sx={{ color: '#878a8c', marginRight: 1 }} />
          <InputBase
            placeholder="Search Furry Friends"
            inputProps={{ 'aria-label': 'search furry friends' }}
            sx={{ width: '100%' }}
          />
        </Box>

        {/* Right Section: Icons */}
        <Box>
          <IconButton sx={{ color: '#878a8c' }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
