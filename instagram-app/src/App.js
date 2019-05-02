import React, { Component } from 'react';
//import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/postspage';
import withAuthenticate from './authentication';
import Login from './components/Login/login';
//import SearchBar from './components/SearchBar/searchbar';
//import PostsContainer from './components/PostContainer/postcontainer';
//import dummyData from './instagram/src/dummy-data.js';
//import PostsContainer from './components/PostContainer/postcontainer';


/*const dummyData = [
  {
    username: "philzcoffee",
    thumbnailUrl:
      "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

    imageUrl:
      "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        username: "philzcoffee",
        text:
          "We've got more than just delicious coffees to offer at our shops!"
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
  },
  {
    username: "fortnite",
    thumbnailUrl:
      "https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg",
    imageUrl:
      "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
    likes: 4307,
    timestamp: "July 15th 2017, 03:12:09 pm",
    comments: [
      {
        username: "twitch",
        text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
      },
      {
        username: "michaelmarzetta",
        text: "Omg that match was crazy"
      },
      {
        username: "themexican_leprechaun",
        text: "What a setup"
      },
      {
        username: "dennis_futbol",
        text: "It that injustice"
      },
      {
        username: "dennis_futbol",
        text: "Is"
      }
    ]
  },
  {
    username: "playhearthstone",
    thumbnailUrl:
      "https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg",
    imageUrl:
      "https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",
    likes: 5306,
    timestamp: "July 14th 2017, 10:04:08 am",
    comments: [
      {
        username: "playhearthstone",
        text: "Love this shot!"
      },
      {
        username: "awaywetravel",
        text: "Yosemite is my most favorite place in the universe"
      },
      {
        username: "awesomebt28",
        text: "I like how Half Dome looks so old and useless"
      }
    ]
  }
];*/






/*class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postsSearch:[]
    };
  }

  componentDidMount() {
  
    this.setState({
      posts: dummyData
    });
  } 

  searchHandler=e=>{
// eslint-disable-next-line 
    let posts=this.state.posts.filter(x => {
      if(x.username.includes(e.target.value)){
        return x;
      }
    })
    this.setState({postsSearch:posts})
  }
 

  render() {
    return (
      <div className="App">
        <SearchBar 
        search={this.state.search}
        searchPosts={this.searchHandler}
        />
        <PostsContainer posts={
            this.state.postsSearch.length > 0
              ? this.state.postsSearch
            : this.state.posts
          }/>
       
       
       
      </div>
    );
  }
}

export default App;*/

/*let ComponentFromWithAuthenticate=withAuthenticate(PostsPage)(Login)

export default function App(props){
  return(

   <ComponentFromWithAuthenticate/>
    
  )
}*/


class App extends Component{
  constructor(){
    super();
    this.state={};
  }
  render(){
    return(
      <ComponentFromWithAuthenticate/>
    )
  }
}

let ComponentFromWithAuthenticate=withAuthenticate(PostsPage)(Login)


export default App;



//<footer><div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.1c30f6235294cef2ff3ca408fc918a7f.1556573791465.1556573791465.1556573791465.1&__hssc=57440181.2.1556573791467&__hsfp=3025663657" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> 
//</footer>   <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
//<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 	
// <PostsContainer posts={this.state.posts} />

