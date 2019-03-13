import React from 'react';
import myStorage from '../Storage'
import Login from '../Components/Login/Login'

const Authenticate = App => class extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            loggedIn: false,
            user: ""
        }
    }

    //  this checks to see if there is a user in local storage
    componentDidMount(){
        if(myStorage.getObject('user')){
            this.setState({loggedIn: true})
            this.setState({user:myStorage.getObject('user')})
        }
        
    }

     // updates local storage with the username and also sets the state of apps this.state.user
    login = (username, password) => { 
        myStorage.setObject('user', {username:username});
        this.setState({user:  myStorage.getObject('user').username})
    }

    //this will toggle the log in state of the higher order component authenticate
    toggleLogin = ()=> {
        this.setState((prevState,props)=>{
            return {loggedIn: !prevState.loggedIn}
        })
    }

    render(){ 
        console.log(this.state)
        return this.state.loggedIn?(
            <App user={this.state.user}/>
        ):(
            <Login login={this.login} toggleLogin={this.toggleLogin} />
        );
    }
}
export default Authenticate