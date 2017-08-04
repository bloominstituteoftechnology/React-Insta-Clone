import React, { Component} from 'react';

import { Navbar } from 'react-bootstrap';
import './NavBar.css';


 class NavBar extends Component {
  render() {
    return (
    <section className = 'Navmain'>
    <div className= 'inmain'>
      <div className ="logo-div">
        <a className="logo"></a>
      </div>
      <div className ='Searchbar-div'>
       <input className ='input input-logo' type = "text" placeholder="Search" />
       </div>
      <div className = 'right'>
       <div className = 'first'> </div>
       <div className = 'second'> </div>
       <div className = 'third'> </div>
      </div>

    </div>
    </section>
    )
  }
}

export default NavBar;
