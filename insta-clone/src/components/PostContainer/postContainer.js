import DATA from "../../dummy-data";
import React from "react";
import "./postContainer.css";
import Posts from "./postList";
export default class postContainer extends React.Component {
  render() {
    return (
      <div>
        <Posts data={DATA} />
      </div>
    );
  }
}
