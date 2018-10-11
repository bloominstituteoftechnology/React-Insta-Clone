import React from 'react';
import CommentSection from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/CommentSection/commentsection';
import PostContainer from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/PostContainer/postcontainer';
import SearchBar from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/SearchBar/searchbar';
import dummyData from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/dummy-data';


class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            content: [],
            searchKey: ''       
        }
    }
    componentDidMount() {
        this.setState({ content: dummyData });
    }
    handleInputChange = event => this.setState({ [event.target.name]: event.target.value });

    searchFunction = () => {
        
        const posts = this.state.content.filter(search => {
            if (search.username.includes(this.state.searchKey)) {
            return search;      
            }
        });
        console.log(posts);        
        if (!this.state.content){
            this.setState({content: dummyData});
        }else{
            this.setState({ content: posts });
        }
    };  
    render() {
        // if (!this.state.content.length) {
        //     return <h4>Loading Posts...</h4>;
        // }    
        return (
            <div className="App">
                <div className='top-header'>
                <SearchBar
                    changer={this.handleInputChange}
                    searching = {this.searchFunction}                     
                    content= {this.state.content}
                    searcher={this.state.searchKey} />
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