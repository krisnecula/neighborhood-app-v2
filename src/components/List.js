import React, { Component } from 'react';
import { Debounce } from 'react-throttle';

//React must keep track of the input value and rerender the components:
//place a query in the parent component (Container) and pass to value

//source for Debounce: https://github.com/gmcquistin/react-throttle
//source for bounce animation solution: https://stackoverflow.com/questions/7339200/bounce-a-pin-in-google-maps-once

class List extends Component {

  render () {
    const locations = this.props.locations;
    return (
      <div id="search"
      role="search"
      aria-label="Museum locations filter">
        <h2 tabIndex="2">Near East Village:</h2>
        <input id="searchbar"
          placeholder="Search for..."
          type="text"
          aria-label="Search input"
          value={this.props.queryString} onChange={e => this.props.updateQuery(e.target.value)} />
          <ol>
            {locations.map(loc => (
              <li key={loc.venue.id}>

                <div id="list"
                role="list"
                aria-label="Museum locations list">

                  <p className="venue__title"
                  role="listitem">
                    <a href="#" aria-label="Location name" onClick={() => this.props.showListing(loc)}>{loc.venue.name}</a>
                  </p>

                  <p className="venue__address"
                  role="listitem"
                  aria-label="Location address">
                    Address: {loc.venue.location.formattedAddress[0]}
                  </p>

                </div>
              </li>
            ))}
          </ol>
      </div>
    );
  }
}

  export default List;
