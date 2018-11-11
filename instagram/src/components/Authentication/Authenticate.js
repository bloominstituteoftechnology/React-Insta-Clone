import React from 'react';
import Login from '../Login/Login';
import './Authenticate.css';


const Authenticate = App =>
  class extends React.Component {

  constructor(props) {

      super(props);
      this.state = {loggedIN: false}
    }



    componentDidMount() {

    console.log(this.state.loggedIN);
    if(!localStorage.getItem('user')) {
        this.setState({loggedIN: false})
      } else {
        this.setState({loggedIN: true});
      }

    }

    render() {
    console.log(this.state.loggedIN);
    if(this.state.loggedIN) return <App/>;
     return <Login/>

    }

};

export default Authenticate;
