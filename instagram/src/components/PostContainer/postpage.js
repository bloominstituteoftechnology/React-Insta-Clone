import React from 'react';
import CommentSection from './components/CommentSection/commentsection';
import PostContainer from './components/PostContainer/postcontainer';
import SearchBar from './components/SearchBar/searchbar';
import dummyData from './dummy-data';



class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            content: [],
        }
    }
    componentDidMount() {
        this.setState({ content: dummyData });
    }
    searchFunction = event => {
        console.log(event.target.value);
        const posts = this.state.content.filter(search => {
            if (search.username.includes(event.target.value)) {
            return search;      
            }
        });
        this.setState({ content: posts });
    };  
    render() {
        if (!this.state.content.length) {
            return <h4>Loading Posts...</h4>;
        }    
        return (
            <div className="App">
                <div className='top-header'>
                <SearchBar
                    searching = {this.searchFunction}                     
                    content= {this.state.content} />
                </div> 
                {this.state.content.map((items, i) => 
                <div key = {i}>
                    <PostContainer content= {items} />
                    <CommentSection 
                    comments= {items.comments}
                    extras= {items} 
                    />
                </div>
                )}
            </div>
        );
    
    }
}

export default PostsPage;