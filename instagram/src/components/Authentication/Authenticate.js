import React from "react";
import Login from "../Login/Login";
import TestAccounts from "../../DummyData/UserAccounts";

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/
const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        users: TestAccounts,
        isUsrLoggedIn: false,
        failedLogin: false,
        loginUsr: {},
        usrname: "",
        usrpwd: ""
      };
    }

    componentDidMount() {
      if (JSON.parse(localStorage.getItem("usrIsLoggedIn"))) {
        this.setState({
          isUsrLoggedIn: true,
          failedLogin: false,
          loginUsr: JSON.parse(localStorage.getItem("usrLoggedIn"))
        });
      } else {
        localStorage.setItem("usrIsLoggedIn", false);
      }
    }

    changeHandler = e => {
      let newKeyValue = e.target.value;
      this.setState({
        [e.target.name]: newKeyValue
      });
    };

    login = e => {
      e.preventDefault();
      let usrLogin = {};
      const BreakException = {};
      try {
        this.state.users.forEach(user => {
          if (
            user.username.toUpperCase() === this.state.usrname.toUpperCase() &&
            user.password === this.state.usrpwd
          ) {
            usrLogin = user;
            this.setState({
              isUsrLoggedIn: true,
              failedLogin: false,
              loginUsr: usrLogin
            });
            localStorage.setItem("usrIsLoggedIn", true);
            localStorage.setItem("usrLoggedIn", JSON.stringify(usrLogin));
            throw BreakException;
          } else {
            this.setState({
              failedLogin: true
            });
          }
        });
      } catch (e) {
        if (e !== BreakException) throw e;
      }
    };

    logout = () => {
      this.setState({
        loginUsr: {},
        isUsrLoggedIn: false,
        usrname: "",
        usrpwd: ""
      });
      localStorage.setItem("usrIsLoggedIn", false);
      localStorage.setItem("usrLoggedIn", JSON.stringify({}));
    };

    render() {
      if (this.state.isUsrLoggedIn) {
        return <App loginUsr={this.state.loginUsr} logout={this.logout} />; // display app page
      } else {
        return (
          <Login
            login={this.login}
            changeHandler={this.changeHandler}
            failedLogin={this.state.failedLogin}
            testAccounts={TestAccounts}
          />
        ); // display login page
      }
    }
  };

export default Authenticate;
