import React from "react"

const withAuthenticate = App =>Login =>
class extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            loggedIn: false
        }
    }

    componentDidMount (){
        if(!localStorage.getItem("user")||!localStorage.getItem("pass")){
            this.setState({
                loggedIn : false
            })
        }else{
            this.setState({
                loggedIn : true
            })
        }
    }
    render(){

        return (
            <div>
                    {this.state.loggedIn ? <App /> : <Login />}
            </div>
        )
    }
}


export default withAuthenticate;