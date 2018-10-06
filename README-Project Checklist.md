# React-Insta-Clone

### Project Setup

- If you so choose you may install `create-react-app` globally by running `yarn global add create-react-app`.

[x] Run `create-react-app instagram` to create your starter application with the name `instagram`.
  
[x] Create a `components` directory inside the `src` directory
[x] Create a sub-directory called `SearchBar`
[x] Create a sub-directory called `PostContainer`
[x] Create a sub-directory called `CommentSection`
all inside the `src` directory. 

[x] Each of these directories should contain the component file as well as the CSS for their respective components. 

[] Put any other components that coincide with your respective container components inside of these directories.

### Tasks (Day I)

 There are three major container components that you'll need to implement for this project: the Search Bar, the Post Container, and the Comment Section.

[x] single instance of the Search Bar being rendered at the top of the page.

[x] a Post Container and a Comment Section for every piece of mock data in the `dummy-data.js` file.

[x] The root App component of your application should import the dummy data from the `dummy-data.js` file with `import dummyData from './dummy-data';` and iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.

[] Each `PostContainer` component will then pass the array of comments on each post object as a prop to an instance of the `CommentSection` component.

[] The `CommentSection` component will receive the array of comments as props and render a `Comment` component with the username of the poster as well as the post's text. 

[] An input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.

[] Check the `Types` of the data you are passing around as props in the components that will be using props to present data as DOM elements. This should be linked to your `Comment` component that `Comment Section` will render and potentially to your `Post` component that `Post Container` will render.

[] Install [reactstrap](https://reactstrap.github.io/) Bootstrap library, which is a library of Bootstrap components that have been implemented using React, so they're really easy to just drop straight into React projects.

[] Add your own styles via CSS. 

[] Have the CSS file that corresponds with a component live in the same directory as the component file.

---

[] Your search bar header should look something like this:
![search bar](/assets/ig_search_bar.png)

[] Your post container should look something like this:
![insta post](/assets/ig_post.png)

### Stretch Problems (Day I)

[] Implement the ability to comment on a post with the `Add a comment...` input.

[] Use the [moment.js](https://momentjs.com/) library dynamically format the timestamp into a human-readable format like how it is being displayed in the screenshot.
