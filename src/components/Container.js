import React, { Component } from 'react';
import List from './List';
import Map from './Map';

//always include a parent div with any new components
class Container extends React.Component {
  render () {
    return (
      <div className="container">
        <List />
        <Map />
      </div>
    );
  }
}

  export default Container;
