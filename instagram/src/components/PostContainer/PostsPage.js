componentDidMount() {
  this.setState({
    posts: dummyData
  });
}


searchHandler = event => {
  event.preventDefault();
  let posts = this.state.posts.filter(post => {
    if (post.username.includes(event.target.value)) {
      return post;
    }
  });
  this.setState({ filtered: posts })
};

render() {
  return (
    <div className="App">
      <SearchBar search={this.searchHandler} />
      <PostContainer
        posts={
          this.state.filtered.length > 0 ? this.state.filtered : this.state.posts}
      />
    </div>