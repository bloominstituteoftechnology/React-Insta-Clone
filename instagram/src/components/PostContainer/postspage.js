import React from 'react';
import CommentSection from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/CommentSection/commentsection';

import PostContainer from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/PostContainer/postcontainer';
import SearchBar from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/SearchBar/searchbar';



class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        }
    }
    componentDidMount() {
        this.setState({ content: props.content });
      }
    render() {
        // if (!this.state.content.length) {
        //     return <h4>Loading Posts...</h4>;
        // }    
        return (
            <div className="App">
                <div className='top-header'>
                <SearchBar
                    search = {this.state.content.search}                     
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