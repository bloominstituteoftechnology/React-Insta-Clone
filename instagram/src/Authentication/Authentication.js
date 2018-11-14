import React from 'react';
import Login from '../components/Login/Login.js';

const Authentication = Component => { 
    return class extends React.Component { 
      render() {
          return localStorage.getItem('Spike') === 'Bebop' ? ( 
          <Component 
          user={this.props.user}
          posts={this.props.posts}
          logout={this.props.logout}
          />) :(
          <Login 
            login = {this.props.login}
            handleChange = {this.props.handleChange}
            user = {this.props.user}
            password ={this.props.password}
           />
          )

          
        }
    }
  };

  export default Authentication