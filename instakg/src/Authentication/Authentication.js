import React, { Component } from 'react';

const Authentication = (Page,Login ) =>
    class extends Component {
        constructor(props) {
            super(props);

            this.state={
                loggedin: false
            }
        }
    loginTrue(){
        if(this.state.loggedin){
            return <Page />
        }
        else{
            return <Login  methods={[this.login.bind(this), this.userNameChange.bind(this)]}  />
        }
    }
    userNameChange(event){
        this.setState({ userName: event.target.value },()=>{});
     }
     login(event){
   
       this.writeToLS(this.state.userName)
     }
     writeToLS = (passin) =>{
       localStorage.setItem('userName', JSON.stringify(passin));
     }
    componentDidMount(){ 
        if (localStorage.getItem('userName')!= null){
            let output = localStorage.getItem('userName');
            if(output !== ''){
                this.setState({loggedin:true})
            }
           
        }
        else{
            localStorage.setItem('userName', ''); 
        }   
      
    }
    render() {
        return (
            <div>
                {this.loginTrue()}
                
            </div>
        );
    }
    }

export default Authentication;