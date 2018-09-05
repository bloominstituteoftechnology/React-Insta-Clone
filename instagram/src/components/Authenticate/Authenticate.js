import React, { Component } from 'react';
import App from '../../App';



const Authenticate = Component =>  
class extends React.Component {
    constructor() {
        super() 
        this.state = {
            signed: ''
        }
    }

    render() {
        return this.state.signed ? <Component/>:<h1>prop</h1>        
    }
  };

  
  export default Authenticate