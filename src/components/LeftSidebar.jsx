// LeftSidebar.jsx
import React from 'react';
import { Box, List, ListItemButton, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Slide from '@mui/material/Slide';

const LeftSidebar = ({ mobile = false }) => {
  const theme = useTheme();
  // For desktop, we want the slide animation.
  // For mobile, we render it without fixed positioning.
  const sidebarContent = (
    <Box
      sx={
        mobile
          ? {
              width: '240px',
              backgroundColor: '#ffffff',
              borderRight: '1px solid #edeff1',
              overflowY: 'auto',
              height: '100%',
            }
          : {
              position: 'fixed',
              top: '64px', // Adjust to your Navbar height
              left: 0,
              width: '240px',
              height: 'calc(100% - 64px)',
              backgroundColor: '#ffffff',
              borderRight: '1px solid #edeff1',
              overflowY: 'auto',
            }
      }
    >
      <List>
        <Typography sx={{ p: 2, fontWeight: 'bold', color: '#878a8c' }}>
          Menu
        </Typography>
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Popular" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="All Pets" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="My Groups" />
        </ListItemButton>
        {/* Add more menu items as needed */}
      </List>
    </Box>
  );

  // On desktop, wrap with Slide animation.
  if (!mobile) {
    // Show slide animation only on desktop
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        {sidebarContent}
      </Slide>
    );
  }

  // On mobile, just render the content (Drawer will handle its own animation).
  return sidebarContent;
};

export default LeftSidebar;
