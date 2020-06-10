import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Box } from '@material-ui/core';

import AppBar from 'components/AppBar';
import MapContent from './MapContent';
import ReviewContent from './ReviewContent';
import SearchContent from './SearchContent';

const Contents = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

export default function HomePage() {
  // const [bldgId, setBldgId] = useState('');

  return (
    <Box height="100vh">
      <Helmet>
        <title>Tenants</title>
        <meta name="description" content="세입자들 메인 페이지" />
      </Helmet>
      <AppBar />
      <Contents>
        <SearchContent />
        {/* <ReviewContent /> */}
        <MapContent />
      </Contents>
    </Box>
  );
}
