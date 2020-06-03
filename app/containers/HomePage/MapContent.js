/* global kakao */
import React, { useState } from 'react';
import styled from 'styled-components';

import Map from 'components/Map';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
  width: '100%';
  height: calc(100vh - 64px);
`;

export default function MapContent() {
  const [lat, setLat] = useState(37.477117);
  const [lng, setLng] = useState(126.9612293);

  const { loading, error, data } = useQuery(GET_BUILDINGS, {
    variables: {
      lat,
      lng,
      scale: 1,
    },
  });

  const markers = [];
  if (data && data.bldgs) {
    data.bldgs.forEach(bldg => {
      const markerPosition = new kakao.maps.LatLng(bldg.lat, bldg.lng);

      markers.push(
        new kakao.maps.Marker({
          position: markerPosition,
        }),
      );
    });
  }

  const onDraggedMap = center => {
    setLat(center.Ha);
    setLng(center.Ga);
  };

  return (
    <Wrapper>
      <Map lat={lat} lng={lng} onDragged={onDraggedMap} markers={markers} />
    </Wrapper>
  );
}
