import React from "react";
import PostsPage from "./PostsPage";
import LoginForm from "./Components/Login";
import withAuthorization from './Components/withAuthorization';

const SiteWithAuthorization = withAuthorization(LoginForm, PostsPage);

class App extends React.Component {
    render(){
        return <SiteWithAuthorization />;
    }
}

export default App;