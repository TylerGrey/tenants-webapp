import React, { useState } from 'react';
import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

import AppBar from 'components/AppBar';
import MapContent from './MapContent';
import ReviewContent from './ReviewContent';
import SearchContent from './SearchContent';

const Contents = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

export default function HomePage() {
  const [bldgId, setBldgId] = useState('');

  return (
    <Box height="100vh">
      <AppBar />
      <Contents>
        <SearchContent />
        <Grid container>
          <Grid item xs={9}>
            <MapContent onClickMarker={setBldgId} />
          </Grid>
          <Grid item xs={3}>
            <ReviewContent bldgId={bldgId} />
          </Grid>
        </Grid>
      </Contents>
    </Box>
  );
}
