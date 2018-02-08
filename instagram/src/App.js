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
  state = {
    input: '',
  }

  render () {
    return (
      <div className='nav__bar'>
        <div className='searchbarImg__wrapper'>

        <div className='menu__buttons'>        
        <a href=""><img src="https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-04-128.png" alt="" /></a>
          <a href=""><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png" alt="" /></a>
          <a href=""><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/heart-outline-128.png" alt="" /></a>
          <a href=""><img src="https://cdn3.iconfinder.com/data/icons/ecommerce-26/96/account-128.png" alt="" /></a>
          </div>
        </div>
      </div>
    );
  }
}

class MainContent extends Component {

  render () {
    return (
      <div className='main__content'>
        <div className='content__heading'>
        </div>
        </div>
    );
  }
}



export default App;


//   
//