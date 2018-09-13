import React from "react";
import Login from '../Login/Login';

const Authenticate = App => 
  class extends React.Component {
    constructor (props) {
      super();
      this.state = {
        loggedIn: false
      };
      console.log(this.state)
    }
    
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    // componentDidMount () {
    //   if(localStorage.getItem('user' !== !null)) {
    //     this.setState({loggedIn: true});
    //   } my code
    // }

    render () {
      if (this.state.loggedIn) return <App />;
      return <Login />;
      // let output = this.state.loggedIn ? <App /> : <Login />;
      // return output;
    }
  }


export default Authenticate;