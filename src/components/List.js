import React, { Component } from 'react';

class List extends Component {
  render () {
    //return filtered location list
    const locations = this.props.locations;
    return (
      <div id="list" aria-label="locations list">
        <h2>Locations</h2>
        <input id="search"
          placeholder="Search for..."
          type="text"
          aria-label="search"
          />

          <button>Search</button>

          <ol>
            {locations.map(loc => (
              <li key={loc.venue.id}>
                <div>
                  <p><strong>{loc.venue.name}</strong></p>
                  <p>Address: {loc.venue.location.formattedAddress[0]}</p>
                </div>
              </li>
            ))}
          </ol>
      </div>
    );
  }
};

  export default List;
