import React from "react";
import Login from "../Login/Login";
// const Authenticate = App => {


const Authenticate = App => 
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        signedIn: false,
      };
    }

    componentDidMount() {
      if(localStorage.getItem('username')) {
        this.setState({siginIn: true});
      } else {
        this.setState({signedIn: false});
      }
    }

    render() {
      if(this.props.credentials) return <App />;
        return <Login {...this.props} />
    }
  };

  export default Authenticate;