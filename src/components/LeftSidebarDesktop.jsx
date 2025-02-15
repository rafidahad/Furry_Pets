// LeftSidebarDesktop.jsx (Desktop Sidebar)
import React from 'react';
import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Slide from '@mui/material/Slide';

const LeftSidebarDesktop = ({ in: inProp }) => {
  const theme = useTheme();

  const sidebarContent = (
    <Box
      sx={{
        position: 'fixed',
        top: '64px', // Adjust based on your Navbar height
        left: 0,
        width: '240px',
        height: 'calc(100% - 64px)',
        backgroundColor: theme.palette.background.paper, // use theme color
        borderRight: `1px solid ${theme.palette.divider}`, // use theme's divider
        overflowY: 'auto',
        color: theme.palette.text.primary, // ensure text matches dark/light mode
      }}
    >
      <List>
        <Typography sx={{ p: 2, fontWeight: 'bold' }}>
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
      </List>
    </Box>
  );

  return (
    <Slide direction="right" in={inProp} mountOnEnter unmountOnExit timeout={300}>
      {sidebarContent}
    </Slide>
  );
};

export default LeftSidebarDesktop;
