import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  .fa-heart {
    margin: 0 4rem;

    @media only screen and (max-width: 800px) {
      margin: 0 2rem;
    }

    @media only screen and (max-width: 600px) {
      margin: 0 1rem;
    }
  }

  .fa-user:hover {
    color: red;
  }
`;


class NavBar extends React.Component {
  handleClick() {
    localStorage.removeItem('instaCloneLogin');
    window.location.reload();
  }

  render() {
    return (
      <StyledNavbar className="navbar">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i onClick={() => this.handleClick()} className="far fa-user"></i>
      </StyledNavbar>
    );
  }
}

export default NavBar;