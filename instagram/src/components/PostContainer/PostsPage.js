import React, {Component} from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import dummyData from '../../dummy-data'


class PostsPage extends Component {
    constructor() {
      super();
      
      this.state = {
        dummyData:[],
        
      };
    }
    componentDidMount(){
     setTimeout(()=>{
  
     
      this.setState({
        dummyData:dummyData,
      })
    },500)
    }
    
    searchFilter =(event) => {
      event.preventDefault();
      if(event.keyCode === 13 && event.target.value.length > 0){
        let newData = this.state.dummyData.filter((dummyData)=> {
          return dummyData.username === event.target.value;
        })
        this.setState({dummyData:newData});
        event.target.value='';
      }
    }
    render() {
        return (
          <div className="App">
            <SearchBar search={this.searchFilter}/>
            <PostContainer dummyData={this.state.dummyData} />

            
          </div>
        );
      }
    }

export default PostsPage;
