import React from 'react';
import Login from '../LoginPage/Login';



const Authenticate = App =>
  class extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isloggedIn: false,
        }
    }

    componentDidMount(){
        if (!localStorage.getItem("user")) {
            this.setState({isloggedIn:false})
        }else{
            this.setState({isloggedIn: true})
        }
    }

    render() {
        if (this.state.isloggedIn) {
            return (<App />);
          }else {
            return (<Login />);
          }
    }
  };

export default Authenticate;
  