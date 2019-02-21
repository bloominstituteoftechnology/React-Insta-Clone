import React, {Component} from 'react';
import styled from 'styled-components';
import black from '../../blacklike.png';
import comment from '../../comment.png';
import PropTypes from 'prop-types';


const TopSection = styled.section `
	display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20%;
  height: auto;
  margin: 0;
  padding: 1%;
`;

const TopSectionDiv = styled.div `
width: 100%;
height: auto;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
margin: 0;
padding: 0 0 5%;
`;
const Thumbnail = styled.img `
width: 40%;
height: auto;
border-radius: 50%;
border: 1px solid white;
`
const Username = styled.h3 `
	margin: 0;
  padding: 5%;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`
const Timestamp = styled.h4 `
	color: #BAD6C5;
`
const MiddleImage = styled.img `
	width: 100%;
 	 height: auto;
`
const Icon = styled.img `
width: 5%;
height: auto;
margin: 0;
padding: 1%;
`

const Likes = styled.h3 `
margin: 0;
padding: 0% 1%;
font-size: 1.25rem;
color: #BAD6C5;
`
const Span = styled.span `
font-weight: bold;
`


class Post extends Component{

	constructor(props){
		super(props);
		this.state = {
			likes: props.likes
		}
	}
	handleLike = (event) => {
		event.preventDefault();
		let likeCount = this.state.likes
		likeCount += 1
		this.setState({
			likes: likeCount
		});
	}
	
	
	
	render (){
		return (
			<React.Fragment>
				<TopSection>
					<TopSectionDiv>
						<Thumbnail src={this.props.thumbnail} alt="" />
						<Username>{this.props.username}</Username>
					</TopSectionDiv>
	
					<Timestamp>{this.props.timestamp}</Timestamp>
				</TopSection>
				
				<MiddleImage src={this.props.image} alt="" />
			
						<Icon src={black} alt="like icon" onClick={this.handleLike} />
						<Icon src={comment} alt="comment icon"  />
					<Likes>
						<Span>{this.state.likes}</Span> likes
					</Likes>

		</React.Fragment>			
		);
	}

};

Post.propTypes = {
	posts: PropTypes.shape({
			username: PropTypes.string.isRequired,
			thumbnailUrl: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			likes: PropTypes.number,
			timestamp: PropTypes.string.isRequired,
	}).isRequired,
	handleLike: PropTypes.func	
}	
export default Post;
