import React from 'react';
import Image1 from '../SearchBar/Image1.jpg';

import App from './../../App';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            username: "",
            password: "",
            loggedIn: null
        }
    }

    changes = event => {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }
 

    logInThing2 = event => {
        
        const user = this.state.username;
        
        if (this.state.username) {
            localStorage.setItem('user', user )
                 
        }
        else {
            return( 
            <App/>            
            )
        }
    }
    

    render() {
        return(
            <div className ="postmain">
                <img src={Image1} alt=""></img>
                <h1>LoGiN pAgE</h1>

                <div>
                    <div className="comment">
                    <form className='addcomment'>
                        <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.comment}
                        
                        onChange={this.changes}
                        
                        />
                        <hr></hr>
                        <input
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.comment}
                        
                        onChange={this.changes}
                        
                        />
                        <hr></hr>

                        <button 
                        onClick={this.logInThing2}>
                        <strong>LogIn!</strong>
                        </button>

                    </form>
                    </div> 
                </div>
            </div>
            
        )
    }
}

export default Login;