import React from 'react';


class PostStream extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filteredPosts:[],
      };
    }

    render() {
        return (
          <div>
              {this.filteredPosts}
          </div>
        );
      }
    }
  export default PostStream;