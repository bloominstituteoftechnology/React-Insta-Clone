import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleClick = () => {
    localStorage.setItem('user', '');
    alert('Logging out ...');
    window.location.reload();
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row title">
          <i className="col-sm-1 fab fa-instagram logo" />
          <div className="divider" />
          <div className="col-sm-1 instaFont">Instagram</div>
          <div className="col-sm-8">
            <input
              className="searchBox"
              onChange={this.handleChange}
              type="text"
              name="search"
              placeholder="&#61442; Search"
              value={this.state.search}
            />
          </div>
          <div>
            <i className="col-sm-1 far fa-compass" />
            <i className="col-sm-1 far fa-heart" />
            <i onClick={this.handleClick} className="col-sm-1 far fa-user" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
