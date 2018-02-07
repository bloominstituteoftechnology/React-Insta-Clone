import React from 'react';

function SearchBar() {
    return <form onSubmit={this.handleSubmit}>
    <label htmlFor="search"></label>
    <input
      type="text"
      onChange={this.handleInputChange}
    />
  </form>;
}