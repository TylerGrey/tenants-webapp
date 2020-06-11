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
    const { center, markers, onDragged } = this.props;
    const mapArea = document.getElementById('kakaoMap');

    this.map = new kakao.maps.Map(mapArea, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
    });

    this.clusterer = new kakao.maps.MarkerClusterer({
      map: this.map,
      averageCenter: true,
      minLevel: 5,
    });

    if (markers) {
      this.updateMarkers(markers);
    }

    if (onDragged) {
      kakao.maps.event.addListener(this.map, 'dragend', () =>
        onDragged(this.map.getCenter(), this.map.getLevel()),
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.markers) {
      this.updateMarkers(nextProps.markers);
    }

    if (
      nextProps.center.lat !== this.props.center.lat &&
      nextProps.center.lng !== this.props.center.lng
    ) {
      this.map.setCenter(
        new kakao.maps.LatLng(nextProps.center.lat, nextProps.center.lng),
      );
    }
  }

  updateMarkers = markers => {
    this.clusterer.addMarkers(markers);
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
  center: PropTypes.object,
  markers: PropTypes.array,
  onDragged: PropTypes.func,
};

export default Map;
