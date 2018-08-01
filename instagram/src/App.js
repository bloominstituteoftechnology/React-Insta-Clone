import React from 'react';
import PostsPage from './PostsPage';
import LogInForm from './Components/LogIn';
import withAuthorization from './withAuthorization';

const SiteWithAuthorization = withAuthorization(LogInForm, PostsPage);

class App extends React.Component {
  render() {
    return <SiteWithAuthorization />;
  }
}

export default App;
