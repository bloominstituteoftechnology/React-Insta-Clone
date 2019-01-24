import React from 'react'
import LoginPage from './../LoginPage/LoginPage'

const Authenticate = App => 
     class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: false
            }
        }

        componentDidMount = () => {
            if(!localStorage.getItem('user')) {
                this.setState({login: false})
            } else {
                this.setState({login: true})
            }
            
        }
        render() {
            if (this.state.login === true) {
               return <App />
            } else {
                return (
                    <LoginPage />
                    )
            } 
            
        }
    }


export default Authenticate
