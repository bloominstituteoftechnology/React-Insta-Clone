import React from 'react';
import PostsPage from '../PostContainer/PostsPage';
import Login


const Authenticate = PassedComponent => {
    class /* ??? */ extends React.Component{
        constructor(){
        super();
        }
    
        render(){
            return(
                <div className="HOC">
                <PassedComponent />
                </div>
            )
        }

  }

}
const Loggedin = Authenticate()
export default Authenticate;