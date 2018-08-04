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
    processImg=(event)=>{
        const urlString=this.state.url;
        if (urlString.match(/\.(jpeg|jpg|png|gif)/g) != null) {
            let posts=JSON.parse(localStorage.getItem('posts'));
            posts.unshift({
                username: this.state.username,
                thumbnailUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYITckBYlR69DGBauDO-rhpR91VsdRMp2QEH-8U4Lqq2WRXk9r',
                imageUrl: this.state.url,
                likes:0,
                timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
                comments: []
            })
            localStorage.setItem('posts',JSON.stringify(posts));
        };
        this.setState({url:''});
    }
    render() {
        return (
        <form>
            <input type='url' placeholder='Enter An Image URL' value={this.state.url} name='url' onChange={(e)=>this.handleURLChange(e)}/>
            <button className='btn waves-effect waves-light' onClick={(e)=>this.processImg(e)}>Submit</button>
        </form>
        );
    }
}
export default ImageParser;