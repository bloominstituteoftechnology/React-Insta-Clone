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

## Objectives
The purpose of this project is to continue building on your knowledge of React that started with the React I project. Here, you'll be implementing a lot of the same concepts and structuring your components in a very similar fashion. The main difference this time around is that you'll be using the `create-react-app` utility to generate your React projects for you. Don't worry about all of the extra files that you may not understand. The overall structure of the project is exactly the same as what you guys worked with in React I. There are also some tests this time around to give you guys a better sense of your progress. 

By the end of this project, you should be comfortable with what components are, the notion of state within a component, as well as passing data from a parent component down to a child component. 

Try to get all of the tests passing. If you don't get there, then aim for creating all of the different components and organizing them appropriately in terms of the parent-child relationship, with data getting passed around accordingly. 

## Project Setup
  * Run `npm i -g create-react-app` to install the React app generator.
  * Run `create-react-app instagram` to create your starter application.
  * Ensure that there is a `package-lock.json` file at the same directory level as the `package.json` file in the `instagram` directory. If there isn't one, then you'll need to update your version of Node. Use a utility such as [nvm](https://github.com/creationix/nvm) to do this. 
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
  * Look into the [moment.js](https://momentjs.com/) library to read about how to dynamically format the timestamp into a human-readable format like how it is being displayed in the screenshot. 
  * In the bottom right corner of the Post Container, you'll see an ellipsis icon. Clicking this icon will pop up a modal that, on Instagram's site, gives you options for flagging the post as inappropriate. Look into implementing this modal functionality in your own project. 