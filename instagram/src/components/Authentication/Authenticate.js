import React from 'react'
import Login from '../Login/Login';

const Authenticate = (App) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LoggedIn: false
        };

    }
    componentDidMount(){
        if(!localStorage.getItem('username')){
            this.setState({LoggedIn:false})
        }else{
            this.setState({LoggdIn:true})
        }
        
    }
    render() {
        if(this.state.LoggdIn){
            return <App/>
        } else{
        return (<Login/>
        )
        }
    }
}


export default Authenticate;