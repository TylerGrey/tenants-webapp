import React from 'react';
import { Box } from '@material-ui/core';

import AppBar from 'components/AppBar';
import MapContent from './MapContent';

export default function HomePage() {
  return (
    <Box height="100vh">
      <AppBar />
      <MapContent />
    </Box>
  );
}
