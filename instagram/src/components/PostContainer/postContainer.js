import React from 'react';
import ReactDOM from 'react-dom'

import React from 'react';import ReactDOM from 'react-dom';import './index.css';
// Go outside of the component and create an array

// AFTER MODELING REMOVE THIS ARRAY AND USE DUMMY-DATA.JS
/*
const dummyData = [
	{
		username: "philzcoffee",
		thumbnailUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
		imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/20066915_1526002357431295_3266739979170086912_n.jpg',
		likes: 400,
		timestamp: "July 17th 2017, 12:42:40 pm",
		comments: [
			{
				username: "philzcoffee",
				text: "We've got more than just delicious coffees to offer at our shops!"
			},
			{
				username: "biancasaurus",
				text: "Looks delicious!"
			},
			{
				username: "martinseludo",
				text: "Can't wait to try it!"
			}
		]
	}
];
*/


class postContainer extends React.Component {
	// key = username
	state = {
		dummyData: [
			{
				username: "philzcoffee",
				thumbnailUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
				imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/20066915_1526002357431295_3266739979170086912_n.jpg',
				likes: 400,
				timestamp: "July 17th 2017, 12:42:40 pm",
				comments: [
					{
						username: "philzcoffee",
						text: "We've got more than just delicious coffees to offer at our shops!"
					},
					{
						username: "biancasaurus",
						text: "Looks delicious!"
					},
					{
						username: "martinseludo",
						text: "Can't wait to try it!"
					},
				],
			}
		]
	}
	render () {
		return (
			<div>
				<div className='userHeader'>
						<div className='userLogo'>
							<img src={"./assets/android-icon-96x96.png"} className="App-logo" alt="logo" /> 
						</div>
						<div className='userName'>
							{this.props.username}
						</div>
				</div>
				
				<div className='postImage'>
						<img src={"./assets/[placeholder-someImage].png"} className="postLogo" alt="image" /> 
				</div>
				<div className='favicons'>
					<img src={"./assets/[placeholder-HeartIcon]"} className="App-logo" alt="logo" /> 
					<img src={"./assets/[placeholder-CommentIcon]"} className="App-logo" alt="logo" /> 
				</div>
				<div className='postLikes'>
					{this.props.likes}
				</div>
				<div className='postComment'>
						{this.props.userName} + ":" + {this.props.text} 
						{this.props.comments}
				</div>
			</div>
		)}
	}
	





// ======code below this line is last statement=======

ReactDOM.render(<postContainer />, document.getElementById('root'));
