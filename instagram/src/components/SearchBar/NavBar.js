import React from 'react';

class NavBar extends React.Component {
  handleClick() {
    localStorage.removeItem('instaCloneLogin');
    window.location.reload();
  }

  render() {
    return (
      <div className="navbar">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i onClick={() => this.handleClick()} className="far fa-user"></i>
      </div>
    );
  }
}

export default NavBar;