import React from  'react';


const Authenticate = PostsPage => Login =>
    class extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount(){
            if(!localStorage.getItem('user')) {
                this.setState({loggedIn: false});
            }else{
                this.setState({ loggedIn: true});
        }
    }









    render() {
        if(this.state.loggedIn) return<PostsPage/>;
            return <Login />;
        }

} // main curly 

export default Authenticate;
