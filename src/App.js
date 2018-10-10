import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // Load in locally saved data
    // const localSaved = localStorage.getItem('data');
    // if( localSaved ) {
    //   //this.setState({ data: JSON.parse(localSaved) });
    //   this.state = { data: JSON.parse(localSaved) }
    //   console.log("readlocal:",this.state.data);
    //   return;
    // } else {
    //   this.state = {
    //     data: dummyData
    //   }  
    // }
    // console.log(this.state.data);
  }

  componentDidMount() {
    console.log("Mounted");

    // // Load in locally saved data
    // const localSaved = localStorage.getItem('data');
    // if( localSaved ) {
    //   this.setState({ data: JSON.parse(localSaved) });
    //   console.log("readlocal:",this.state.data);
    //   return;
    // }
  }

  /* Merge Data function
   * This will allow us to take individual posts, and merge them into the main
   * data state. Allows for reuse by multiple items if needed.
   */
  mergeData = (id, merge) => {
    console.log("id, merge:", id, merge);
    this.setState({
      data: this.state.data.map( (data, index) => {
        if( index === id ){
          return {
            ...data,
            ...merge
          }
        }
        else {
          return data;
        }
      })
    },
      this.saveLocal(this.state.data)
    );
  }
  


  /* Save to local storage function 
   * Putting this here because I want to store everything after each
   * comment is added from PostContainer.
   */
  saveLocal = (dataSet) => {
    localStorage.setItem('data', JSON.stringify(dataSet));
    console.log("savelocal", JSON.stringify(dataSet));
  };

  
  
  render() {
    return (
      <PostsPage />
      // <div className="App">
      //   <SearchBar searchHandler={this.searchHandler} />
      //   {this.state.data.map( (data, index) => {
      //     // Pass each element to PostContainer:
      //       // id: 0
      //       // username: "",
      //       // thumbnailUrl: "",
      //       // imageUrl: "",
      //       // likes: 0,
      //       // timestamp: "July 17th 2017, 12:42:40 pm",
      //       // comments: []
      //       // mergeData: fn
          
      //     return (
      //       <PostContainer
      //         key={index} 
      //         id={index}
      //         username={data.username}
      //         thumbnailUrl={data.thumbnailUrl}
      //         imageUrl={data.imageUrl}
      //         likes={data.likes}
      //         timestamp={data.timestamp}
      //         comments={data.comments}
      //         mergeData={this.mergeData}
      //       />
      //     );
      //   })}
      // </div>
    );
  }
}

export default App;
