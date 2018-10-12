import React from "react"
import Login from "../Login/login"

const Authenticate = (App) =>
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
                return <Login state={this.state}/>
            }
        }
    }

export default Authenticate;