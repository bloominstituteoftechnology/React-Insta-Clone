import React from 'react';
import Login from '../components/Login/Login'

const Authenticate = WrapperComponent =>
  class extends React.Component {
    constructor(){
      super()
      this.state = {
        isLoggedIn : false
      }
    }
    componentDidMount(){
      //
      if (localStorage.getItem('instaclone')) {
        this.setState({isLoggedIn : true})
      }
    }
    render() {
      if (this.state.isLoggedIn)
      return <WrapperComponent />
      else 
      return <Login />
    }
  }

  export default Authenticate