import React from 'react';
import Login from '../Login/Login';
import './Authenticate.css';


const Authenticate = PassedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {loggedIN: true}
    }

    componentDidMount() {
      if (localStorage.getItem('user' === 'ImaHacker') &&
        localStorage.getItem('password') === ' password'
      ) {
        this.setState({loggedIN: true})
      }
      else {this.setState({loggedIN: false})
      }

    }

    render() {
      if(this.state.loggedIN) return <PassedComponent/>;

      return <Login/>;
    }

};

export default Authenticate;
