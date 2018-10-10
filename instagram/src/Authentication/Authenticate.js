import React from "react";
import Login from "../components/Login/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    updateLogin = v => {
      if (v.length > 1) {
        this.setState({
          loggedIn: true
        }, () => {
            localStorage.setItem("loggedIn", this.state.loggedIn);
            window.location.reload()
        });
        
      }
    };

    componentDidMount() {
      this.hydrateStateWithLocalStorage();
    }

    hydrateStateWithLocalStorage() {
      for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }

    render() {
      return this.state.loggedIn === false ? (
        <Login updateLogin={this.updateLogin} loggedIn={this.state.loggedIn} />
      ) : (
        <App loggedIn={this.state.loggedIn} />
      );
    }
  };

export default Authenticate;
