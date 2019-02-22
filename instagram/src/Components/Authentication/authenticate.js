import React from "react"

//authenticte determines if the user is logged in and returns either the login page or the app
const Authenticate = (App, Login) =>
    class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                loginStatus: false,
            }
        }
        componentDidMount(){
            if(!localStorage.getItem("user")){
                this.setState({loginStatus: false})
            }else {
                this.setState({loginStatus: true})
            }
        }
        render() {
            if(this.state.loginStatus) {
                return <App />
            }else {
                return <Login />
            }
        }
    }

export default Authenticate;