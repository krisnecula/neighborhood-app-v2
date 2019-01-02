import React, { Component } from 'react';

/* https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple */
/* https://developers.google.com/maps/documentation/javascript/adding-a-google-map */
/* Create the map markers and infowindows. */

class Map extends Component {
    markers = [];
    addMarkers = locations => {
    if (window.google) {
      //creates the InfoWindow
      let infowindow = new window.google.maps.InfoWindow();

      //keeps map in bounds of listings
      const bounds = new window.google.maps.LatLngBounds();

      for (let i = 0; i < locations.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: locations[i].venue.location.lat,
            lng: locations[i].venue.location.lng
          },
          map: window.map,
          title: locations[i].venue.id
        });
        //extends the boundaries of the map for each marker
        bounds.extend(marker.position);

        //user clicks the marker
        marker.addListener('click', function() {

          //creates the content
          infowindow.setContent(`<div>
                          <p className="venue__title"><a href="#">${locations[i].venue.name}</a></p>
                          <p className="venue__address">${locations[i].venue.location.formattedAddress[0]}</p>
                        </div>`);

          //opens the InfoWindow
          infowindow.open(window.map, marker);
          });
        window.map.fitBounds(bounds);
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
