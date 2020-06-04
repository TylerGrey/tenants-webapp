import React, { useState } from 'react';
import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

import AppBar from 'components/AppBar';
import MapContent from './MapContent';
import ReviewContent from './ReviewContent';

const Contents = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

export default function HomePage() {
  const [bldgID, setBldgID] = useState();

  return (
    <Box height="100vh">
      <AppBar />
      <Contents>
        <Grid container>
          <Grid item xs={7}>
            <MapContent onClickMarker={setBldgID} />
          </Grid>
          <Grid item xs={5}>
            <ReviewContent bldgID={bldgID} />
          </Grid>
        </Grid>
      </Contents>
    </Box>
  );
}
