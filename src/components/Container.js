import React, { Component } from 'react';
import Map from './Map';
import List from './List';
import * as LocationsAPI from "../api/Locations";

//always include a parent div with any new components.
//for our componentDidMount we're importing our promise as LocationsAPI
//to use in our components.

//store the API data in a state and hook it to our imported LocationsAPI promise
//to keep the data dynamic and pass it throughout our components.
//ex: this.state.locations has been passed as a prop to List component and Map component.

class Container extends Component {

  state = {
    locations: []
  }
  componentDidMount() {
    LocationsAPI.getLocations().then(resp =>
      this.setState({ locations: resp })
    );
  }

  clickHandler(location) {
    for (let i = 0; i < window.markers.length; i++) {
      if (location.venue.id === window.markers[i].title) {
        window.infowindow.open(window.map, window.marker[i])};
      }
  }

  render () {
    console.log(this.state.locations);

    return (
      <div className="container">
        <List locations={this.state.locations}
        showListing={this.clickHandler} />
        <Map locations={this.state.locations} />
      </div>
    );
  }
}

  export default Container;
