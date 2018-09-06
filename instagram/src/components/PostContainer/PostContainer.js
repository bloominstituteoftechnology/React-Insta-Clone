import React from "react";
import PostContent from "../PostContent/PostContent";
import styled from 'styled-components';

const Pstctnr = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = ({ adcmt, icrmtv, list }) => {
  return (
    <Pstctnr>
      {list.map((item, i) => {
        return (
          <PostContent
            key={i}
            ixct={i}
            adcmt={adcmt}
            icrmtv={icrmtv}
            username={list[i].username}
            thumbnailUrl={list[i].thumbnailUrl}
            imageUrl={list[i].imageUrl}
            likes={list[i].likes}
            timestamp={list[i].timestamp}
            comments={list[i].comments}
          />
        );
      })}
    </Pstctnr>
  );
};

export default PostContainer;
