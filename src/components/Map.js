import React, { Component } from 'react';

/* https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple */
/* https://developers.google.com/maps/documentation/javascript/markers */
/* Create the map markers and infowindows. */

class Map extends Component {
    markers = [];
    addMarkers = locations => {
    if (window.google) {

      //creates the infowindow
      let infowindow = new window.google.maps.InfoWindow();

      //keeps map in bounds of listings
      const bounds = new window.google.maps.LatLngBounds();
      const image = 'https://svgshare.com/i/ARN.svg';
      for (let i = 0; i < locations.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: locations[i].venue.location.lat,
            lng: locations[i].venue.location.lng
          },
          icon: image,
          map: window.map,
          title: locations[i].venue.id,
          animation: window.google.maps.Animation.DROP,
          mapTypeId: 'terrain'
        });

        //https://stackoverflow.com/questions/7339200/bounce-a-pin-in-google-maps-once
       function toggleBounce() {
         if (marker.getAnimation() !== null) {
           marker.setAnimation(null);
         } else {
           marker.setAnimation(4);
         }
       }

        //extends the boundaries of the map for each marker
        bounds.extend(marker.position);

        // * click event handler for the marker * //
        marker.addListener('click', () => {
          let content = this.props.infoContent(locations[i]);

          //creates the content for infowindow
          infowindow.setContent(content);

          //opens the infowindow
          infowindow.open(window.map, marker);

          //toggles bounce animation for marker
          toggleBounce();
          });

        window.map.fitBounds(bounds);
        this.markers.push(marker);
      }
      window.infowindow = infowindow;
      window.markers = this.markers;
    }
  };

  setMapMarkers = () => {
    for (let i=0; i < this.markers.length; i++) {
      this.markers.setMap(null);
    }
  }

    render () {
      console.log("LOCATIONS", this.props.locations);
      this.addMarkers(this.props.locations);
    return <div id="map" />;
  }
}
  export default Map;
