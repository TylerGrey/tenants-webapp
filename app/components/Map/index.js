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
