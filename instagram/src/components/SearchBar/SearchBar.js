import React from "react";
// import PropTypes from 'prop-types';
import "./SearchBar.css";
import logoText from "./instagramLogoText.png";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  handleSearchBarInputChange = event => {
    let commentDivs = document.getElementsByClassName("commentDiv");
    let searchBarInputTargetValue = event.target.value.toLowerCase();
    for (let i = 0; i < commentDivs.length; i++) {
      let commentDivsIterator = commentDivs[i]
        .querySelector(".userNameDiv")
        .querySelector("h2")
        .innerHTML.toLowerCase();
      if (commentDivsIterator.indexOf(searchBarInputTargetValue) === 0) {
        commentDivs[i].style.display = "";
      } else {
        commentDivs[i].style.display = "none";
      }
    }
  };

  render() {
    return (
      <div className="searchBarMainDiv">
        {/* start logo div */}
        <div className="searchBarLogoDiv">
          <i className="fa fa-instagram" />
          <span>|</span>
          <img src={logoText} alt="instagram text" />
        </div>

        {/* start input div */}
        <form
          className="searchBarInputDiv"
          onChange={this.handleSearchBarInputChange}
        >
          <input placeholder="&#x1F50D; Search" type="text" />
        </form>

        {/* start links div */}
        <div className="searchBarLinksDiv">
          <ul>
            <li>
              <i className="fa fa-compass" />
            </li>
            <li>
              <i className="fa fa-heart-o" />
            </li>
            <li>
              <i className="fa fa-user-o" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
