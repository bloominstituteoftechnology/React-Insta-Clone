import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='center'>
          <div className='brand'>
            <div className='logo'></div>
            <div className='brandName'>ImgGram</div>
          </div>
          <div className='search'><input type='search' placeholder='Search' /></div>
          <div className='header_icons'>
            <div className='header_iconItem'><i class="fa fa-compass" aria-hidden="true"></i></div>
            <div className='header_iconItem'><i class="fa fa-heart-o" aria-hidden="false"></i></div>
            <div className='header_iconItem'><i class="fa fa-user-o" aria-hidden="true"></i></div>
          </div>
        </div>
      </header>
    );
  }
}
