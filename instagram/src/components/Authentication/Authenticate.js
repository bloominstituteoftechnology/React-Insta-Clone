import React, {Component} from 'react'


const Authenticate = (Page) =>{
    

   return class extends Component {
    
    
        render() {
            return (
                <Page />
            )
        //    if (this.authenticateLogin() === true){
        //     return <Page />
        //    } else {
        //     return <Login />
        //    }
            
        }
    }
}

export default Authenticate