import React from 'react';
import Login from './Login';


const Authenticate =App=>
class extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userLoggedIn: false
        };
    }
    componentDidMount(){
        if(!localStorage.getItem('user')){
            this.setState({ userLoggedIn: false });
        } else {
            this.setState({ userLoggedIn: true });
        }
    }

    toggleLogIn=()=>{
        console.log('Heyo!')
        this.setState({
            userLoggedIn: true
        })
    }
    render(){
        if(this.state.userLoggedIn) return <App />;
        return <Login toggleLogIn={this.toggleLogIn}/>
    }
};

export default Authenticate;