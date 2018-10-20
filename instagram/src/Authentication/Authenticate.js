import React from 'react';
import ReactDOM from 'react-dom';



const authentication = ConditionalComponent => PassedComponent => {
    return class Authenticate extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            };
        }
        
        render(){
            if (this.state.loggedIn === false) {
                return(
                    <ConditionalComponent />
                )
            }
            return(
                <div>
                    <PassedComponent />
                </div>
            )
        }
    }
}

export default authentication;