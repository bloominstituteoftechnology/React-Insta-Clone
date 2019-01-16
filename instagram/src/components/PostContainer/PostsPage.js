import React, {Component} from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import '../../App.css';

class PostsPage extends Component {

    constructor(props) {
        super(props);
        this.state= {
            dummyData: []
        }
    }
  
    componentDidMount() {
      this.setState({
        dummyData: dummyData
      })
      console.log(this.state.dummyData);
    }
  
    searchFilter = e => {
      e.preventDefault();
      this.setState({
        dummyData: this.state.dummyData.filter(item => {
          if (item.username === this.state.searchterm) {
            return item;
          }
        })
      })
      console.log('q2');
    }
  
  
    changeHandler = (e) => {
      this.setState({
          searchterm: e.target.value
      })
      console.log(e.target.value);
      this.setState({
          dummyData: dummyData});
    };
  
    render() {
      return (
        <div className='App'>
          <SearchBar 
            filter={this.searchFilter}
            changer={this.changeHandler}
          
          />
            {this.state.dummyData.length === 0 ? <h3>No Matches. Try entering a valid username</h3> : this.state.dummyData.map(item => {return <PostContainer data={item}/>})}
        </div>
      )
    }
}

export default PostsPage;