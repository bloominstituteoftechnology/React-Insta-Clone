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
      if (localStorage.getItem('vim@gmail.com')) {
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