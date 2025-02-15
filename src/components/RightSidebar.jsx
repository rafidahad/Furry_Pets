// RightSidebar.jsx
import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const RightSidebar = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: '72px',
        width: '300px',
        ml: 2,
        display: { xs: 'none', md: 'block' },
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
};

export default RightSidebar;
