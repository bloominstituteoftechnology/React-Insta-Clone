import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderImage from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const headerContentText = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are wll on your way to mastering React!";

function HeaderContainer() {
  return (
  	//currently hardcoding values here but I think when I get everything working, I want to try to load an entire
  	//card by making one function call from app.js or something similarly "main"-ish
    <div className="header-container">
    	<HeaderImage imageUrl="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg" />
    	<div className="header-title-content-container">
    		<HeaderTitle twitterName="Lambda School" twitterScreenName="@LambdaSchool" tweetCreatedAt="26 jan"  />
    		<HeaderContent tweetText={headerContentText} />
    	</div>
    </div>
  );
}

export default HeaderContainer;
