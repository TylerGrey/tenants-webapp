/* global kakao */
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';

import styled from 'styled-components';
import Map from 'components/Map';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { makeSelectCenter } from './selectors';
import reducer from './reducer';

const GET_BUILDINGS = gql`
  query Bldgs($lat: Float!, $lng: Float!, $scale: Int!) {
    bldgs(lat: $lat, lng: $lng, scale: $scale) {
      id
      lat
      lng
      rating
      updated_at
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

const key = 'home';

export function MapContent({ center, onClickMarker }) {
  useInjectReducer({ key, reducer });

  const [position, setPosition] = useState({
    lat: 37.477117,
    lng: 126.9612293,
  });

  const { loading, error, data } = useQuery(GET_BUILDINGS, {
    variables: {
      lat: position.lat,
      lng: position.lng,
      scale: 1,
    },
  });

  const markers = [];
  if (data && data.bldgs) {
    data.bldgs.forEach(bldg => {
      const markerPosition = new kakao.maps.LatLng(bldg.lat, bldg.lng);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        onClickMarker(bldg.id);
      });

      markers.push(marker);
    });
  }

  const onDraggedMap = center => {
    setPosition({
      lat: center.Ha,
      lng: center.Ga,
    });
  };

  return (
    <Wrapper>
      <Map
        center={center}
        markers={markers}
        onDragged={onDraggedMap}
        onClickMarker={onClickMarker}
      />
    </Wrapper>
  );
}

MapContent.propTypes = {
  center: PropTypes.object,
  onClickMarker: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  center: makeSelectCenter(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(MapContent);
