import React, { Component } from 'react';
import './App.css';
import  NavBar  from './components/navBar/NavBar.js';

class App extends Component {
  render() {
    return (
      <div className='app__container'>
        <NavBar />
        <div className='body__container'>
          <MainContent />
        </div>
      </div>
    );
  }
}


class MainContent extends Component {

  render () {
    return (
      <div className='main__content'>
        <div className="main__content__header">
          <div className="profile-img">
          </div>
          <div className="profile-info">
          <div className="name">username</div>
          <div className="location">location</div>
          </div>
          <div className="time">
            3 Days Ago
          </div>

     
            <img className="highlight" src="http://images2.fanpop.com/images/photos/2800000/Computer-Pup-domestic-animals-2871786-468-351.jpg" alt=""/>
            <div className="likes">21 Likes</div>
            <div className="caption">Description Here</div>
            <div className="comments">
           
            </div>
            
            <input 
            type="text" 
            class="input" 
            placeholder="Comment" style={{paddingLeft: 5}}
            />

        </div>
      </div>
    );
  }
}



export default App;
