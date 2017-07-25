import React, { Component } from 'react';

class SearchBar extends Component {
 constructor() {
   super();
   this.state = {
     search: '',
   };
   this.updateSearch = this.updateSearch.bind(this)
 }

updateSearch(event) {
 this.setState({search: event.target.value})
}

 render() {
   return (
       <input
         onChange={this.updateSearch}
         placeholder="Search"
       />
     );
 }
}

export default SearchBar;
