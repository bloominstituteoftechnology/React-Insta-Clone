import React from 'react';


const authenticate = App => Login => 
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                username: "",
                password: "",
                loggedIn: false,
              }
            }
            // handleChanges = ev => {
            //   this.setState({ [ev.target.name]: ev.target.value });
            // }
            // loginSubmit = e => {
            //   // e.preventDefault();
            //   if(this.state.username && this.state.password){
            //     localStorage.setItem("username", `${this.state.username}`);
            //     localStorage.setItem("password", `${this.state.password}`);
            //     console.log(localStorage);
            //   }
            // }
        componentDidMount(){
            if(localStorage.getItem('username')){
                this.setState({loggedIn: true});
                this.setState({username: localStorage.getItem('username')})
            } else{
                this.setState({loggedIn: false});
                this.setState({username: ''})
            }
        }
        logout = () =>{
            localStorage.clear();
            this.setState({loggedIn:false})
        }
        render() {
            if(this.state.loggedIn){
                return <App loggedIn={this.state.loggedIn}
                            username={this.state.username}
                            password={this.state.password}
                            logout={this.logout}
                            />
            }   return <Login loggedIn={this.state.loggedIn}
                              handleChanges={this.handleChanges}
                              loginSubmit={this.loginSubmit}/>
            
        }
    };


    



export default authenticate;