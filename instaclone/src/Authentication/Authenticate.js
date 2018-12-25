import React from 'react';
import myStorage from '../Storage'

const Authenticate = (App,LoginPage) => class extends React.Component{
    constructor(props){
        console.log(myStorage.getObject('user'))
        super(props);
        this.state= {
            loggedIn: false
        }
    }

    //  this checks to see if there is a user in local storage
    componentDidMount(){
        if(myStorage.getObject('user'))
            this.setState({loggedIn: true})
    }

    //this will toggle the log in state of the higher order component authenticate
    toggleLogin = ()=> {
        this.setState((prevState,props)=>{
            return {loggedIn: !prevState.loggedIn}
        })
    }

    render(){ 
        
        return this.state.loggedIn?(
            <App />
        ):(
            <LoginPage login={this.props.login} toggleLogin={this.toggleLogin} />
        );
    }
}
export default Authenticate