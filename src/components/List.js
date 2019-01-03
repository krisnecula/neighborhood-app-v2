import React, { Component } from 'react';
import Map from './Map';


//React must keep track of the input value and rerender the components:
//place a query in the parent component (Container) and pass to value
class List extends Component {
  render () {
    const locations = this.props.locations;
    return (
      <div id="list" aria-label="locations list">
        <h2>NYC - East Village</h2>
        <input id="search"
          placeholder="Search for..."
          type="text"
          aria-label="search input"
          value={this.props.queryString} onChange={e => this.props.updateQuery(e.target.value)} />

          <button aria-label="search button"
          role="button"
          tabindex="0">Search</button>

          <ol>
            {locations.map(loc => (
              <li key={loc.venue.id}>
                <div>
                  <p className="venue__title"><a href="#"
                  onClick={() => this.props.showListing(loc)}>
                  {loc.venue.name}</a></p>
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
