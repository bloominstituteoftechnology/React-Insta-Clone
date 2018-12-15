import React from "react";
import iglogo from "./iglogo.png";
import "./SearchBar.css";
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.data.map(obj => obj.username),
      prevState: this.props.data,
      newState: [],
    }
  }

  render() {
    return(
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
      <div className="social">
        <i class ="fab fa-instagram" ></i>
      </div>
        <img alt="instagram logo" src={iglogo} className="logo-image" />
      </div>
      <div>
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
    );
  }
}

SearchBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default SearchBar;