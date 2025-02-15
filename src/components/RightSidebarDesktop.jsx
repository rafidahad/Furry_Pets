// RightSidebarDesktop.jsx (Desktop Sidebar)
import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Slide from '@mui/material/Slide';

const RightSidebarDesktop = ({ in: inProp }) => {
  const theme = useTheme();

  const sidebarContent = (
    <Box
      sx={{
        position: 'fixed',
        top: '64px', // adjust based on your Navbar height
        right: 0,
        width: '300px',
        height: 'calc(100% - 64px)',
        backgroundColor: theme.palette.background.paper, // use theme color
        borderLeft: `1px solid ${theme.palette.divider}`, // use theme's divider
        overflowY: 'auto',
        p: 2,
        color: theme.palette.text.primary, // ensure text color is correct
      }}
    >
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Popular Communities
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2">/r/Dogs</Typography>
            <Typography variant="body2">/r/Cats</Typography>
            <Typography variant="body2">/r/Birds</Typography>
          </Box>
          <Button variant="outlined" size="small" sx={{ mt: 2 }}>
            View All
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Create a Post
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            Share your pet stories, pictures, or questions!
          </Typography>
          <Button variant="contained" size="small">
            Create Post
          </Button>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Slide direction="left" in={inProp} mountOnEnter unmountOnExit timeout={300}>
      {sidebarContent}
    </Slide>
  );
};

export default RightSidebarDesktop;
