import React, { Component } from 'react';
import './App.css';

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

class NavBar extends Component {
  render () {
    return (
      <div className='nav__bar'>

        <div className='menu__buttons'>        
          <a href=""><img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-32.png" alt="" /></a>
          <a href=""><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-search-32.png" alt="" /></a>
          <a href=""><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/heart-outline-32.png" alt="" /></a>
          <a href=""><img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/87-32.png" alt="" /></a>
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
          <div className="name">name</div>
          <div className="location">location</div>
          </div>
          <div className="time">
            3 Days Ago
          </div>

     
            <img className="highlight" src="http://images2.fanpop.com/images/photos/2800000/Computer-Pup-domestic-animals-2871786-468-351.jpg" alt=""/>
            <div className="likes">21 Likes</div>
            <div className="caption">Description Here</div>
            <div className="comments"> Here Are My Comments</div>
            <input 
            type="text" 
            class="input" 
            placeholder="Comment" style='padding-left: 5px'
            />

        </div>
      </div>
    );
  }
}



export default App;
