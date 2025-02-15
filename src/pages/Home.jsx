// Home.jsx
import React, { useState } from 'react';
import { Box, Drawer, useTheme, useMediaQuery } from '@mui/material';
import Navbar from '../components/Navbar';
import LeftSidebarDesktop from '../components/LeftSidebarDesktop';
import LeftSidebar from '../components/LeftSidebar'; // Mobile version
import RightSidebarDesktop from '../components/RightSidebarDesktop';
import Feed from '../components/Feed';

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // For left sidebar
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg')); // For right sidebar

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ backgroundColor: '#dae0e6', minHeight: '100vh' }}>
      {/* Navbar with mobile menu button */}
      <Navbar onMenuClick={handleDrawerToggle} />

      {/* Always render desktop left sidebar with slide animation */}
      <LeftSidebarDesktop in={isMdUp} />

      {/* Mobile Drawer for left sidebar */}
      {!isMdUp && (
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <LeftSidebar mobile />
        </Drawer>
      )}

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: '64px' }}>
        <Box
          component="main"
          sx={{
            flex: 1,
            marginLeft: { xs: 0, md: '240px' }, // leave space for left sidebar on desktop
            padding: 2,
            maxWidth: '800px',
          }}
        >
          <Feed />
        </Box>

        {/* Render desktop right sidebar with slide animation on large screens */}
        {isLgUp && <RightSidebarDesktop in={isLgUp} />}
      </Box>
    </Box>
  );
};

export default Home;
