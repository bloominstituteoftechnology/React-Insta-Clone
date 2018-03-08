import React, { Component } from 'react';


export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

render() {
  return <input onChange={event => this.setState({ searchTerm: event.target.value })} />;
}

}

// submitSearch = (event) => {
//     e.preventDefault();
//     console.log('Search Term: ', this.state.searchTerm);
//     this.setState({ searchTerm: '' });
// }
//
// searchTerm = (event) => {
//     this.setState({ searchTerm: event.target.value });
// }
//
//
//     render() {
//         return (
//           <div>
//           <input className="searchBar" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.searchTerm} />
//
//           <button className="searchButton" type="submit" onClick={this.submitSearch}>Submit</button>
//           </div>
//         )
//     }
// }
