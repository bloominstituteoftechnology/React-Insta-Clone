import React from "react";
import Login from "../components/Login/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        username: '',
      };
    }

    updateLogin = id => {
      this.setState(
        {
          loggedIn: true,
          username: id,
        },
        () => {
          localStorage.setItem("loggedIn", JSON.stringify(this.state.loggedIn));
          localStorage.setItem('username', this.state.username);
          
        }
      );
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
        <Login updateUserId={this.updateUserId} updateLogin={this.updateLogin} loggedIn={this.state.loggedIn} />
      ) : (
        <App loggedIn={this.state.loggedIn} />
      );
    }
  };

export default Authenticate;
