// import React, { Component } from 'react';
// import dummyData from './dummy-data';
// import SearchBar from './components/SearchBar/SearchBar.js';
// import PostContainer from './components/PostContainer/PostContainer.js'
// import './App.css';
//
// class App extends Component {
//   constructor (){
//     super();
//     this.state = {
//       dummyData: [],
//       search: '',
//     }
//   }
//
//   componentDidMount() {
//     this.setState({ dummyData: dummyData});
//   }
//
//   handleSearch = event => {
//     this.setState({[event.target.name]: event.target.value})
//   }
//
//   render() {
//     let data = this.state.dummyData.filter(data => data.username.indexOf(this.state.search) !== -1)
//     return (
//       <div className="App">
//         <SearchBar input={this.state.search} handleSearch={this.handleSearch}/>
//         {data.map((data,i) => <PostContainer key={i} data={data} comment={this.state.comment} />)}
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage.js'
import Authenticate from './components/Authentication/Authenticate.js'
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = ({
      username: this.props.username,
    })
  }
  //
  // login = event => {
  //   event.preventDefault();
  //   localStorage.setItem('username', event.target.value)
  // }

  render() {
    return(
      <div className='App'>
        <PostsPage username={this.state.username} />
      </div>
    )
  }
}
// const Authenticated = Authenticate(App);
// export default Authenticated;
export default Authenticate(App);
