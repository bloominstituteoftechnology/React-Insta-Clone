import React from 'react';



const authentication = ConditionalComponent => PassedComponent => {
    return class Authenticate extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount(){
            if (localStorage.getItem('username')){
                this.setState({
                    loggedIn: true
                })
            }
        }
        
        render(){
            return (
                this.state.loggedIn ? <PassedComponent /> : <ConditionalComponent />
            )
        }
    }
}

export default authentication;
