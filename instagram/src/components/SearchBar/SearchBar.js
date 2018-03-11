import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import './SearchBar.css';


export const SearchBar = (props) => {
    
      return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                  <div className="InstagramBrand">
                  </div>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Form pullLeft>
                <input type="text" placeholder="Search" />
            </Navbar.Form>
        </Navbar>
    )
  };

  