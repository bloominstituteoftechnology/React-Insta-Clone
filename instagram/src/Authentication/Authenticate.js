import React from 'react';
import ReactDOM from 'react-dom';



const authentication = PassedComponent => {
    return class Authenticate extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            };
        }
        
        render(){
            return(
                <div>
                    <PassedComponent />
                </div>
            )
        }
    }
}

export default authentication;