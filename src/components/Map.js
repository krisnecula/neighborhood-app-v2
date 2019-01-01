import React, { Component } from 'react';

/* https://developers.google.com/maps/documentation/javascript/adding-a-google-map */
/* Create the map application and its markers. */

class Map extends Component {
    markers = [];
    addMarkers = locations => {
    if (window.google) {
      for (let i = 0; i < locations.length; i++) {
        let marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
          map: window.mapObject
        });
        this.markers.push(marker);
      }
    }
  };
    render () {
      console.log("LOCATIONS", this.props.locations);
      this.addMarkers(this.props.locations);
    return <div id="map" />;
  }
}
  export default Map;
