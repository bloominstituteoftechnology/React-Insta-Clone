// will pass to comment section 
import React from "react";

const PostContainer = props => {
  console.log("Props", props);
  // map over citiesProp return a dom elment for each city name in list
  return <div> </div>;
  //return <div>{props.dummyDataProp.map(c => <div>{c.city}</div>)}</div>;
};

export default PostContainer;
