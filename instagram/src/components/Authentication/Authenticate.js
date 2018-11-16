import React from 'react';
// import PropTypes from 'prop-types';
import PostsPage from '../PostContainer/PostsPage';
import Login from '../Login/Login';

const Users = [
  {
    username: 'James',
    password: 'iLikeCoding'
  },
  {
    username: 'Sawyer',
    password: 'iLikePming'
  },
  {
    username: 'Ryan',
    password: 'iLikeTeaching'
  },
  {
    username: 'Dustin',
    password: 'iLikeTeaching'
  }
];

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/

class Authenticate extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: props.dummyData,
        isUsrLoggedIn: false,
        loginUsr: {},
        usrname: '',
        usrpwd: ''
      }
    }

    componentDidMount() {
      if (JSON.parse(localStorage.getItem('usrIsLoggedIn'))){
        this.setState({
          isUsrLoggedIn: true,
          loginUsr: JSON.parse(localStorage.getItem('usrLoggedIn'))
        })
      } else {
        localStorage.setItem('usrIsLoggedIn', false);
      }
    }

    changeHandler = e => {
      let newKeyValue = e.target.value;
      this.setState({
        [e.target.name]: newKeyValue
      });
    }

    login = e => {
      e.preventDefault();
      let usrLogin = {}
      Users.forEach(user => {
        if (user.username.toUpperCase() === this.state.usrname.toUpperCase() && user.password === this.state.usrpwd){
          usrLogin = user;
          this.setState({
            isUsrLoggedIn: true,
            loginUsr: usrLogin
          })
          localStorage.setItem('usrIsLoggedIn', true);
          localStorage.setItem('usrLoggedIn', JSON.stringify(usrLogin));
        } else if (user.username.toUpperCase() === this.state.usrname.toUpperCase() && user.password !== this.state.usrpwd){
          // incorrect password message
        } else {
          // username/password not recognized
        }
      });
    }

    render() {
      if (this.state.isUsrLoggedIn){
        return <PostsPage dummyData={this.state.data} loginUsr={this.state.loginUsr}/> // display app page
      } else {
        return <Login login={this.login} changeHandler={this.changeHandler}/> // display login page
      }
    }
  }
// Authenticate.propTypes = {
//   comment: PropTypes.objectOf(PropTypes.string)
// }

export default Authenticate;