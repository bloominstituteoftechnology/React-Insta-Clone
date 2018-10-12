import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import rainbowheart from '../../img/rainbowheart.png';
import combubble from '../../img/combubble.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Post = styled.div`
 max-width: 605px;
    width:100%;
    border:1px solid lightgray;
    margin-bottom: 40px;

.main{
    width:100%;
}
.iconHeader{
    display: flex;
    align-items: center;
    margin-top:10px;
    margin-bottom:10px;
 }
 .usernameText{
     margin-left:10px;
     
 }
.thumb{
    border-radius:50%;
    width:50px;
    margin-left:10px;
    
}
.Icons{
margin-top:5px;
margin-bottom:5px;
width:30px;
padding-left:10px;

}
.likeIcon{
 cursor: pointer;   
}
.likes{
    font-weight: bold;
    margin-bottom:10px;
    padding-left:10px;
}

`
class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            likes: props.InstaData.likes,

        }
    }
    addlike = () => {
        this.setState({
            likes: this.state.likes + 1,
        })
        console.log()
    }
    render() {
        console.log(this.state)
        return (
            <Post>
                <div className="iconHeader"><div ><img className="thumb" src={this.props.InstaData.thumbnailUrl} alt='thumbnail' /></div><div className="usernameText">{this.props.InstaData.username}</div></div>
                <div><img className="main" src={this.props.InstaData.imageUrl} alt='MainPic' /></div>
                <div><img onClick={this.addlike} className="Icons likeIcon" src={rainbowheart} alt="rainbowheart" /><img className="Icons" src={combubble} alt="commentBubble" /></div>
                <div className="likes">{this.state.likes} likes</div>
                <CommentSection key={this.props.InstaData.key} CommentArray={this.props.CommentArray} />
            </Post>
        );
    }
}
PostContainer.propTypes = {
    InstaData:
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string,
                })
            )
        }).isRequired
}

export default PostContainer