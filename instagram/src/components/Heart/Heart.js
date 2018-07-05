import React from 'react' ;
import commentImgGimp5050 from '../../logos/commentImgGimp5050.png' ;
import heartImgGimp5050 from '../../logos/heartImgGimp5050.png' ;

import saveImgGimp5050 from '../../logos/saveImgGimp5050.png' ;
import styled, { css } from 'styled-components' ;
import { FlexJustStart, Flex } from '../MyStyledComponents/MyStyledComponents' ;
import PostCard from '../PostContainer/PostCard' ;

 



const Heart = props => {
    return(
        <div>
            <FlexJustStart>
                <div onClick={props.dontHeartSocialMedia}>
                <img                    
                    src={heartImgGimp5050} 
                    alt="heart"
                />
                </div>         
                <img src={commentImgGimp5050} alt="comment"/>
                {/* <FlexChildEnd src={saveImgGimp5050} alt="save" /> */}
                {/* <img src={saveImgGimp5050} alt="save"/> */}
            </FlexJustStart>
            <Flex>
                <h3>Likes:{props.brokenHearts}</h3>    
            </Flex>
        </div>        
    )
}
export default Heart ;