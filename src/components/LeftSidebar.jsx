// LeftSidebar.jsx (Mobile Version)
import React from 'react';
import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LeftSidebar = ({ mobile = false }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '240px',
        backgroundColor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        overflowY: 'auto',
        height: '100%',
        color: theme.palette.text.primary,
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
};

export default LeftSidebar;
