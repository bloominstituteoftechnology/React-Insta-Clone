import React from 'react';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';

const Authenticate = (Component) => 
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false,
            };
        }
        componentDidMount(){
            if (JSON.parse(localStorage.getItem('username')) !== null)
                this.setState({ loggedIn: true, user: JSON.parse(localStorage.getItem('username')) });
        }
        render(){
            return (
                <Switch>
                    <Route exact path="/" component={Component} />
                    <Route path="/login" component={Login} />
                </Switch>
            );
        }
    }

export default Authenticate;