import React from 'react' 
import CardContainer from './PostComponent/CardContainer';
import SearchBar from './SearchBarComponent/search-bar';

function PostPage (props){
    return (
        <div className="container">
           <SearchBar inputChange={props.inputChange} onClick={props.onClick}/>
           <CardContainer posts={props.data} />
      </div>
    )
}

export default PostPage