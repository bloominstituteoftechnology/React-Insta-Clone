componentDidMount() {
    this.getPosts('/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/dummy-data')
  }

  getPosts(URL) {
    console.log('get posts')
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ postData: [...this.state.postData, ...data.dummyData]  });
      })
      .catch(err => {
        throw new Error(err);
      });
  }