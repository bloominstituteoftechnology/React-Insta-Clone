import React from 'react';
import Login from '../Login/Login.js'


const Authenticate = (WrappedComponent) =>

        //return a class component
        class extends React.Component{

            constructor(){
                super();
                this.state = {
                    loggedIn: false,

                }
            }

            componentDidMount(){
                if(localStorage.getItem('username')){

                    this.setState({
                        loggedIn: true
                    })
                }
            }



            render(){
                const renderedComponent = (this.state.loggedIn)
                ? <><WrappedComponent /></>
                : <><Login /></>
                // if(this.state.loggedIn){return <WrappedComponent />}
                // return <Login />

                return(
                    renderedComponent
                )
            }
        }



export default Authenticate;