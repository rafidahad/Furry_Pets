// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ onMenuClick, toggleTheme, darkMode }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  console.log("Navbar darkMode:", darkMode);

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side: Hamburger (mobile) and Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMdUp && (
            <IconButton onClick={onMenuClick} sx={{ color: theme.palette.text.secondary, mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            sx={{ cursor: 'pointer', fontWeight: 'bold', color: theme.palette.primary.main }}
          >
            Furry Friends
          </Typography>
        </Box>

        {/* Middle: Search bar with conditional background */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: darkMode ? theme.palette.grey[800] : '#f6f7f8',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            width: '40%',
          }}
        >
          <SearchIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
          <InputBase
            placeholder="Search Furry Friends"
            inputProps={{ 'aria-label': 'search furry friends' }}
            sx={{ width: '100%', color: theme.palette.text.primary }}
          />
        </Box>

        {/* Right side: Theme toggle and User icon */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={toggleTheme} sx={{ color: theme.palette.text.secondary, mr: 2 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton sx={{ color: theme.palette.text.secondary }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
