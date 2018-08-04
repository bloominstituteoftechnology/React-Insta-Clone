import React from 'react';
import moment from 'moment';

class ImageParser extends React.Component{
    constructor() {
        super();
        this.state={
            url:'',
            username:''
        }
    }
    componentDidMount() {
        this.setState({username:localStorage.getItem('username')});
    }
    handleURLChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    processImg=()=>{
        const urlString=this.state.url;
        let newPost;
        if (urlString.match(/\.(jpeg|jpg|png|gif)/g) != null) {
             newPost={
                username: this.state.username,
                thumbnailUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYITckBYlR69DGBauDO-rhpR91VsdRMp2QEH-8U4Lqq2WRXk9r',
                imageUrl: this.state.url,
                likes:0,
                timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
                comments: []
            };
        };
        let posts=JSON.parse(localStorage.getItem('posts'));
        for (let i=0; i<posts.length; i++) {
            if (posts[i].username===newPost.username && posts[i].imageUrl===newPost.imageUrl) {
                return "You already posted this image.";
            }
        }
        posts.unshift(newPost);
        localStorage.setItem('posts',JSON.stringify(posts));
        return this.setState({url:''});
    }
    render() {
        return (
        <form>
            <input type='url' placeholder='Enter An Image URL' value={this.state.url} name='url' onChange={(e)=>this.handleURLChange(e)}/>
            <button className='btn waves-effect waves-light' onClick={()=>this.processImg()}>Submit</button>
        </form>
        );
    }
}
export default ImageParser;