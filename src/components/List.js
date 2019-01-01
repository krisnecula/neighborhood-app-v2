import React, { Component } from 'react';

class List extends Component {
  render () {
    //return filtered location list
    const locations = this.props.locations;
    return (
      <div id="list" aria-label="locations list">
        <h2>NYC - East Village</h2>
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
                  <p className="venue__title"><a href="#">{loc.venue.name}</a></p>
                  <p className="venue__address">Address: {loc.venue.location.formattedAddress[0]}</p>
                </div>
              </li>
            ))}
          </ol>
      </div>
    );
  }
};

  export default List;
