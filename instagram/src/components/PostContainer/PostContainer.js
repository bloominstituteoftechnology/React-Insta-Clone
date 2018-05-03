import React from "react";

const CharsList = props => {
  return (
    <ul>
      {props.chars.map(char => {
        return <li key={char.id}>{char.name}</li>;
      })}
    </ul>
  );
};

export default PostContainer;