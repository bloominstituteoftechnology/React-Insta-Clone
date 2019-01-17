/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/**@jsx jsx */
import React, { Component } from "react";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import PostContainer from "./PostContainer";
import { jsx, css } from "@emotion/core";

const parentPostContainer = css`
  display: grid;
  grid-row-gap: 50px;
  justify-content: center;
`;

class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBarContainer
          handleChange={this.props.handleChange}
          inputSearch={this.props.inputSearch}
        />
        <div css={parentPostContainer}>
          {this.props.searchData.map((dataOnMap, index) => {
            return (
              <PostContainer
                comments={dataOnMap.comments}
                data={dataOnMap}
                username={dataOnMap.username}
                addComment={this.props.addComment}
                inputText={this.props.inputText}
                handleChange={this.props.handleChange}
                addLike={this.props.addLike[index]}
                searchData={this.props.searchData}
                handleClick={this.props.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostPage;
