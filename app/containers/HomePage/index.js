import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import AppBar from 'components/AppBar';
import MapContent from './MapContent';
import ReviewContent from './ReviewContent';
import SearchContent from './SearchContent';

import { makeSelectSelectedBldg } from './selectors';
import reducer from './reducer';

const Contents = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

const key = 'home';

export function HomePage({ selectedBldg }) {
  useInjectReducer({ key, reducer });

  return (
    <Box height="100vh">
      <Helmet>
        <title>Tenants</title>
        <meta name="description" content="세입자들 메인 페이지" />
      </Helmet>
      <AppBar />
      <Contents>
        <SearchContent />
        {selectedBldg && <ReviewContent bldg={selectedBldg} />}
        <MapContent />
      </Contents>
    </Box>
  );
}

HomePage.propTypes = {
  selectedBldg: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  selectedBldg: makeSelectSelectedBldg(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
