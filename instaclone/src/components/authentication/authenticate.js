import React from 'react';
import Login from '../login/login';


let Authenticate = App =>
    class extends Component {
        constructor(props) {
            super(props);
            this.state={
                loggedin: false
            }
        }
    loginTrue(){
        if(this.state.loggedin){
            return <Page user={ JSON.parse(localStorage.getItem('userName'))}/>
        }
        else{
            return <Login  methods={[this.login.bind(this), this.userNameChange.bind(this)]}  />
        }
    }
    userNameChange(event){
        this.setState({ userName: event.target.value },()=>{});
     }
     login(event){
        if(this.state.userName !== undefined){
            this.writeToLS(this.state.userName)
        }
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
export default Authenticate;