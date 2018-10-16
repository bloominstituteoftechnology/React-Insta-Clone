import React  from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import SearchContainer from './Components/SearchBar/SearchContainer';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    data: [],
    newData: [],
    newComment: "",
  };
}



componentDidMount() {
  this.setState({
    data: dummyData,
    })
}


commentHandler = (comment) => {
      this.setState ({
      newComment: comment,
    });
}

subComment = (e) => {
    e.preventDefault();
      this.setState({
        data: [...this.state.data, {username: "Furryduckie", text: this.state.newComment}]
      })
}



  render() {

    return (
      <div className="App">
              <SearchContainer  />
              <PostContainer
              subComment={this.subComment}
              commentHandler={this.commentHandler}
              comments={this.state.commentData}
              dummyData={dummyData} />
      </div>
    );
  }

}



export default App;


