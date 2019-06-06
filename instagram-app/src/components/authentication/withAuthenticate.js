import React from 'react';
import Login from '../login/Login';


const withAuthenticate = (Comp) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }

       componentDidMount() {
        if(!localStorage.getItem('username')) {
            this.setState({
                loggedIn: false
            });
         } else {
           this.setState({
             loggedIn: true
             });
        }
    }
        render() {
           if(this.state.loggedIn) {
               return (<Comp loggedIn={this.state.loggedIn} />);
           }  else {
               return (<Login />);
           }
        }   
    }
       }



export default withAuthenticate;