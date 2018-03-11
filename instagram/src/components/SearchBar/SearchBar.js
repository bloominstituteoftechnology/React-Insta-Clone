import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import './SearchBar.css';


export const SearchBar = ({headerImage}) => {
    
      return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <img src={headerImage} style={{height: '80%', width: '80%'}} alt='logo' />
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Form pullLeft>
                <input type="text" placeholder="Search" />
            </Navbar.Form>
        </Navbar>
    )
  };

  