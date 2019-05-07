
import React from "react";
import PropTypes from 'prop-types';
import { CommentSection } from "../CommentSection/CommentSection"
import styled from 'styled-components';

const Thumbnail = styled.img`
border-radius:80%;
width:30px;
border-radius:20px;
`;

const Mainpart = styled.div`
margin-left: 250px;
margin-right: 250px;
border:1px solid black;

`;

const InstaHeader = styled.div`
display:flex;
flex:row;
height:40px;
margin-top:10px;
margin-left:10px;
padding:5px;
font-size:20px;
`;

const Instaimg = styled.img`
width:100%;
height:500px;
`;

const Likecommentpic = styled.div`
display: flex;
font-size: 25px;
width:40px;
height: 50px;
margin-left:10px;

`;

const Likestext = styled.div`
font-size: 10px;
margin-top: 0px;
font-size:20px;

`;

const Addcomment = styled.input`

font-size:15px;
border:1px solid grey;
height:40px;
width:99.5%
`;


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.item.likes,
            comments: this.props.item.comments,
            input: ''
        }
    }


    incrementLike = () => {
        this.setState({ likes: this.state.likes + 1 });
        localStorage.setItem('name', 'manju');

    };

    submitComment = (e) => {
        e.preventDefault()
        this.setState({
            comments: [...this.state.comments, {
                username: 'Manju',
                text: this.state.input
            }],
            input: ''
        })
        console.log(localStorage.getItem('name'))

    }

    updateInput = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <Mainpart >
                <InstaHeader>
                    <div>
                        <Thumbnail src={this.props.item.thumbnailUrl} alt="this.props.item.username" />
                    </div>
                    <div>
                        <span>{this.props.item.username} </span>
                    </div>
                </InstaHeader>

                <Instaimg src={this.props.item.imageUrl} alt="insta image" />



                <Likecommentpic>
                    <div onClick={this.incrementLike}>
                        <i className="far fa-heart"></i>
                    </div>

                    <div ><i className="far fa-comment "></i></div>
                </Likecommentpic>

                <Likestext>{this.state.likes}<span>likes</span></Likestext>

                <CommentSection comments={this.state.comments} />
                <form onSubmit={this.submitComment}>
                    < Addcomment
                        type='text'
                        placeholder='Add a comments ..'
                        value={this.state.input}
                        onChange={this.updateInput} />
                </form>
            </Mainpart>
        )
    }

}

PostContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default PostContainer








