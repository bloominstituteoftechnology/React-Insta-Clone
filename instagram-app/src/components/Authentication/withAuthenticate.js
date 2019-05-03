import React from 'react'


// const withAuthenticate = PostPage => Login => {
//   class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         logginIn: false
//       };
//     }

//     componentDidMount() {
//       if (!localStorage.getItem('user')) {
//         this.setState({loggedIn: false});
//       } else {
//         this.setState({loggedIn: true});
//       }
//     }
//     render() {
//       <div>
//         {this.state.loggIn ? <PostPage /> : <Login />}
//       </div>
//     }
//   }
//   };

  const withAuthenticate = PostPage  =>
  class extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
              logginIn: false
            };
          }
    render() {
      return <PostPage />;
    }
  
  };

export default withAuthenticate;