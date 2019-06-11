import React from 'react';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/searchBar";
import './App.css';
import PostContainer from './components/PostContainer/postContainer';



class App extends React.Component {
 constructor(props) {
 super(props);
   this.state = {
     data: dummyData,
     newComment: ''
 };
}

componentDidMount() {
  this.setState(
    {
      data: this.state.data.concat(
        dummyData.map(datum => {
          datum.id = uuid();
          return datum;
        })
      )
    }
  )
  }

searchItems = (event) => {
  if (event .target.value !== '') {
    const enteredValue = event.target.value;
    return enteredValue;
  }
}

  onChange = event => {
      this.setState({
      newComment: event.target.value
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    if (this.state.newComment === "") {
      alert("Enter a comment");
    }
    const newCommentDetails = {
      username: "User's Name",
      text: this.state.newComment
    };

    let data = Object.assign([], this.state.data);

    data = data.map(comm => {
      if (comm.id === index) {
        comm.comments.push(newCommentDetails);
      }
      return comm;
    });
  }


render() {
  return (
    <div className="App">
      <SearchBar onchangeValue={this.searchItems}/>
     
        {dummyData.map(data => {
          return <div><PostContainer key={uuid()} data={data} id={uuid()}/></div>
      })}
     </div>
  );
  }
}
export default App;
