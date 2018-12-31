import React, { Component } from 'react';
import List from './List';
import Map from './Map';
import * as LocationsAPI from "../api/Locations";

//always include a parent div with any new components.
//for our componentDidMount we're importing our promise as LocationsAPI
//to use in our components.

class Container extends Component {
  componentDidMount() {
    LocationsAPI.getLocations().then(resp => console.log("RESP", resp));
  }
  render () {
    console.log("RESPONSE");
    return (
      <div className="container">
        <List />
        <Map />
      </div>
    );
  }
}

  export default Container;
