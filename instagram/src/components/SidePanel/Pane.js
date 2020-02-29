import React from 'react';
import { Username } from '../../styled-components/Username';

import tempProfile from '../../img/profile-temp.jpg';


class Pane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="stories-container">
        <div className="stories__header">
          <p>{this.props.title}</p>
          <a href='#'>{this.props.link}</a>
        </div>

        <div className="stories__img-container">

          <div className="sidep__user">
            <img src={tempProfile} alt="user" />

            <div className="sidep__user--name">
              <Username>User 1</Username>
              <p>12 HOURS AGO</p>
            </div>
          </div>

          <div className="sidep__user">
            <img src={tempProfile} alt="user" />

            <div className="sidep__user--name">
              <Username>User 2</Username>
              <p>9 HOURS AGO</p>
            </div>
          </div>

          <div className="sidep__user">
            <img src={tempProfile} alt="user" />

            <div className="sidep__user--name">
              <Username>User 3</Username>
              <p>5 HOURS AGO</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Pane;
