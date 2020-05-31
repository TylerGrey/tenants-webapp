/* global kakao */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapContents = styled.div`
  width: 100%;
  height: 950px;
`;

export default function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9b15b62a8e0278cd9ec754ea4c73da5a&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const mapArea = document.getElementById('kakaoMap');
        // eslint-disable-next-line no-unused-vars
        const map = new kakao.maps.Map(mapArea, {
          center: new kakao.maps.Coords(523951.25, 1085073.75),
        });
      });
    };
  });

  return <MapContents id="kakaoMap" />;
}
