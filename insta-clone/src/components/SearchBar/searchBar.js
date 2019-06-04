import React from "react";
import "./searchBar.css";
import insta from "../../icons/insta.png";
import discover from "../../icons/discover.png";
import heart from "../../icons/heart_unfilled.png";
import profile from "../../icons/profile.png";
import Posts from "../PostContainer/postContainer.js";
export default class searchBar extends React.Component {
  state = {
    text: ""
  };
  textHandler = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div className="Nav">
          <div className="Nav Logo">
            <img src={insta} alt="logo" />
            <h1>Insta Copy</h1>
          </div>
          <div className="Input">
            <input
              className="SearchInput"
              type="text"
              onChange={this.textHandler}
            />
          </div>
          <div className="Nav Images">
            <img src={discover} alt="Nav" />
            <img src={heart} alt="Nav" />
            <img src={profile} alt="Nav" />
          </div>
        </div>
        <Posts filter={this.state.text} />
      </div>
    );
  }
}
