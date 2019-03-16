import React from 'react';
import './post-container.css';
import SearchBar from '../SearchBar/SearchBar.js';
import dummyData from '../../dummy-data.js';
import PostContainer from './PostContainer.js';


class PostsPage extends React.Component{

    constructor() {
        super();
        this.state = {
          search:'',
          dummy: []
        };
      };
    
      componentDidMount(){
        console.log('mounted')
        this.setState({ dummy: dummyData})
      };
    
      addComment = (comment,id) =>{ console.log(comment)
      ; this.setState(prevState => {
        return prevState.data[id].comments.push(comment);
    })
      
      }
    
    
      render() {
        return (
          <div className="app">
            <header>
            <SearchBar />
            </header>
            <PostContainer dummy={this.state.dummy} addComment={this.addComment} />
          </div>
                );
                }
                                                          };

export default PostsPage;