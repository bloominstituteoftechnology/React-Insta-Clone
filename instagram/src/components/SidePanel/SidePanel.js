import React from 'react';
import { Username } from '../../styled-components/Username';
import Pane from './Pane';

import defaultProfile from '../../img/profile-default.jpg';

import './SidePanel.css';

const SidePanel = props => {
  return(
    <section className="sidep">
      <div className="sidep__user">
        <img src={props.img ? props.img : defaultProfile} alt="user image" />

        <div className="sidep__user--name" id="user">
          <Username>{props.user}</Username>
          <p>John Smith</p>
        </div>
      </div>

      <Pane title="Stories" link="Watch All" />
      <Pane title="Suggestions For You" link="See All" />
    </section>
  );
}

export default SidePanel;
