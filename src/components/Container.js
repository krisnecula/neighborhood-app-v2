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
    locations: [],
    query: ""
  }

  componentDidMount() {
    LocationsAPI.getLocations().then(resp =>
      this.setState({ locations: resp })
    );
  }

//a click handler which will toggle the google markers infowindows from the filtered list
  clickHandler = (location) => {
    for (let i = 0; i < window.markers.length; i++) {
      if (location.venue.id === window.markers[i].title) {
        let content = this.infoContent(location);
        window.infowindow.setContent(content);
        window.infowindow.open(window.map, window.markers[i])};
      }
  }

  infoContent = location => {
    return `<div>
              <p className="venue__title">
                <a href="#">${location.venue.name}</a>
              </p>
              <p className="venue__address">
                ${location.venue.location.formattedAddress[0]}
              </p>
            </div>`;
  };

  queryChange = query => {
    this.setState({ query });
  }

  render () {
    console.log(this.state.locations);

    return (
      <div className="container">
        <List locations={this.state.locations}
        showListing={this.clickHandler}
        queryString={this.state.query}
        updateQuery={this.queryChange} />

        <Map locations={this.state.locations}
        infoContent={this.infoContent} />
      </div>
    );
  }
}

  export default Container;
