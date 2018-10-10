import React from 'react';
import usernames from '../../local-storage.js'


const Authenticate = (WrappedComponent) =>{
    return
        //return a class component
        class newComponent extends React.Component{

            constructor(){
                super();
                this.state = {
                    loggedIn: false,
                    usernames: usernames
                }
            }

            componentDidMount(){
                this.setState({
                    usernames: usernames
                })
            }

            render(){
                return(
                    <div>
                        <WrappedComponent />
                    </div>
                )
            }
        }

}

export default Authenticate;