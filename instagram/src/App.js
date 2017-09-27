import React, { Component } from 'react';
import './Styles/App.css';
import Nav from './Nav';
import Posts from './Posts';
import Login from './Login';

class App extends Component {
  constructor(){
    super();
    let display = '';
    //window.localStorage.clear();
    //Check If User Is Logged In
    if(window.localStorage.getItem('username')){
      this.display = <Posts />;
    } else {
      this.display = <Login />;
    }
  }
  render() {
    return (
    
      <div className="App">
         <Nav />
         {this.display}
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <div id="footer">© Copyright 2017 Track Seven Entertainment & Designs</div>
      </div>
    );
  }
}

export default App;
