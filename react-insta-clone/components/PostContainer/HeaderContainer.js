import React, {Component} from 'react';
import dummyData from "./dummy-data";
import User from './User'



class HeaderContainer extends Component {
  render() {
    return (<div className="Header">
  <User/>

    </div>);
  }
}

export default HeaderContainer;
