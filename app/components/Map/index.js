/* global kakao */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

class Map extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9b15b62a8e0278cd9ec754ea4c73da5a&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const { lat, lng, markers, onDragged } = this.props;
        const mapArea = document.getElementById('kakaoMap');

        this.map = new kakao.maps.Map(mapArea, {
          center: new kakao.maps.LatLng(lat, lng),
        });

        if (markers) {
          this.updateMarkers(markers);
        }

        if (onDragged) {
          kakao.maps.event.addListener(this.map, 'dragend', () =>
            onDragged(this.map.getCenter()),
          );
        }
      });
    };
  }

  componentWillReceiveProps(props) {
    if (props.markers) {
      this.updateMarkers(props.markers);
    }
  }

  updateMarkers = markers => {
    markers.forEach(marker => {
      marker.setMap(this.map);
    });
  };

  render() {
    return (
      <>
        <MapDiv id="kakaoMap" />
      </>
    );
  }
}

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  markers: PropTypes.array,
  onDragged: PropTypes.func,
};

export default Map;
