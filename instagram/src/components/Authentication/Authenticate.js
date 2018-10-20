import React from 'react';
import Login from '../Login/Login.js'


const Auth=(App)=>class extends React.Component{
    constructor (props){
        super(props);
        this.state={
            loggedIn: false,
            username: ""
        }
    }
    componentDidMount(){
        if(localStorage.getItem("username")){
            this.setState({ loggedIn: true })
        };
    }
    onLogin=event=>{
        event.preventDefault();
        console.log("onLoginTriggered");
        localStorage.setItem("username", event.target.value);
        window.location.reload();
        //remember to pass down this function when we add a render of this
        //he will need an onChange prop (just use the controlledSearch state spot and function) and a onSubmit prop(which is this onLogin func) also
      
      }
      onUserTyping=event=>{
          this.setState({username: event.target.value})
      }

    render(){
        console.log("authenticate ran")
        console.log(localStorage.getItem("username"))
        console.log(this.state.loggedIn)
        if(this.state.loggedIn===true){
            return(
                <App/>
            )}else{
                return(
                    <Login onSubmit={this.onLogin} onChange={this.onUserTyping} changingVal={this.state.username}/>
                )
            }

      
    }
}
export default Auth