// LeftSidebarDesktop.jsx
import React from 'react';
import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';

const LeftSidebarDesktop = ({ in: inProp }) => {
  const sidebarContent = (
    <Box
      sx={{
        position: 'fixed',
        top: '64px', // adjust based on your Navbar height
        left: 0,
        width: '240px',
        height: 'calc(100% - 64px)',
        backgroundColor: '#ffffff',
        borderRight: '1px solid #edeff1',
        overflowY: 'auto',
      }}
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

  return (
    <Slide
      direction="right"
      in={inProp}
      mountOnEnter
      unmountOnExit
      timeout={300} // adjust duration as desired
    >
      {sidebarContent}
    </Slide>
  );
};

export default LeftSidebarDesktop;
