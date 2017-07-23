# React II

Topics:
 * create-react-app
 * JSX
 * state
 * setState
 * props
 * propTypes (`npm i --save prop-types`)
 * `onClick={}`
 * map
 * functional vs class components

## Project Setup
  * Run `npm i -g create-react-app` to install the React app generator.
  * Run `create-react-app instagram` to create your starter application.
  * Inside your React app, run `npm i --save-dev enzyme sinon` to install Enzyme and Sinon, which are libraries that are needed for testing your components. 
  * If you are using React 14.X or React < 15.5, then you'll need to run `npm i --save-dev react-addons-test-utils react-dom` as well.
  * If you are using React >= 15.5, then you'll need to run `npm i --save-dev react-test-renderer react-dom` as well. 
  * Move the provided `/tests` directory as well as the `application-data.js` file into the `/src` directory of your newly-generated React project.

## Project Description
  * There are two overarching components that you'll need to implement for this project: the Search Bar and the Post Container. 
  * You'll want to separate the comment section of the Post Container into its own Comment Section component that will be a child of the Post Container. 
  * Focus less on exact styling and more on the structure of your React components.
  * You are free to leverage bootstrap for this project for the purposes of styling. I recommend the great [react-bootstrap](https://react-bootstrap.github.io) library, which is a library of bootstrap components that have been implemented using React, so they're really easy to just drop straight into React projects. 

---

Your search bar should look something like this:
![alt tag](/assets/ig_search_bar.png)

---

Your post container should look something like this:
![alt tag](/assets/ig_post.png)

## Extra Credit
  * Implement the ability to like a post by clicking on the heart icon and having the number of likes increment accordingly. 
  * In the bottom right corner of the Post Container, you'll see an ellipsis icon. Clicking this icon will pop up a modal that, on Instagram's site, gives you options for flagging the post as inappropriate. Look into implementing this modal functionality in your own project. 