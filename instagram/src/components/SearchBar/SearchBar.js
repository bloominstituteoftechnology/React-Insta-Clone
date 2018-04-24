import React from "react";
import user from "./user.png";
import compass from "./compass.png";
import instalogo from "./instalogo.jpg";
import camera from "./cameralogo.svg";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="headerBar">
        <div className="leftIcons">
          <img className="firstImage image" alt="" src={camera} />
          <img className="secondImage image" alt="" src={instalogo} />
        </div>
        <div className="searchDiv">
          <input
            className="inputField"
            type="text"
            placeholder="Search"
            name="inputField"
          />
        </div>
        <div className="rightIcons">
          <img className="image" alt="" src={compass} />
          <img className="image" alt="" src={user} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
  