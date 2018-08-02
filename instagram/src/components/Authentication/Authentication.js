import React from 'react';
import App from '../../App';
import Login from '../Login/Login.js';

const Authenticate = App =>
  class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loggedIn: false,
        username: '',
        password: '',
      };
    }

    usernameHandler = event => {
      this.setState({
        username: event.target.value,
      })
    }

    passwordHandler = event => {
      this.setState({
        password: event.target.value,
      })
    }

    toStorage = event => {
      event.preventDefault();
      console.log(event.target.value);
      console.log("toStorage called")
      localStorage.setItem("Username", `${this.state.username}`)
      localStorage.setItem("Password", `${this.state.password}`)
      this.setState({
        username: "",
        password: "",
      })

      let userCheck = '';
      userCheck = localStorage.getItem('username');
      if (userCheck === null) {
        console.log("usernameEmpty");
      } else {
        console.log("usernameLogged:", localStorage.getItem('username'))
        this.setState({
          loggedIn: true,
        })
      }
    }

    componentDidUpdate(){
      console.log("username localStorage", localStorage.getItem("username"))
      console.log("password localStorage" ,localStorage.getItem("password"))
    }

    componentDidMount(){
      console.log("authentication CDM");

    }

    render() {
      if (this.state.loggedIn === true ) {
        console.log("user loggedIn, returning App")
        return (<App />);
      } else if (this.state.loggedIn === false) {
        console.log("user not Logged in, returning Login")
        return (<Login
          pass={this.passwordHandler}
          user={this.usernameHandler}
          toStorage={this.toStorage}
          state={this.state}/>);
      };

      // return (
      //   <div>
      //     <App />
      //     <h1>Authentication!</h1>
      //   </div>
      // );

    }
  };
export default Authenticate;
