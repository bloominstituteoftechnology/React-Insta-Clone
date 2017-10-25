import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  }

  onChange = (e) => {
    this.setState({search: e.target.value});
    this.props.handleSearch(e.target.value);
  }

  render() {
    return (
      <header className="header">
      	<div>
      		<div className="logo"></div>
      		<div className="search">
      			<input 
              onChange={this.onChange}
              type="search" 
              placeholder="Search"
              value={this.state.search} />
      		</div>
      		<div className="options"></div>
      	</div>
      </header>
    );
  }
}
