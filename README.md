# React II

## Objectives
The purpose of this project is to continue building on your knowledge of React that was started with the React I project. Here, you'll be implementing a lot of the same concepts and structuring your components in a very similar fashion. The main difference this time around is that you'll be using the `create-react-app` utility to generate your React project for you. Don't worry about all of the extra files that you may not understand are present inside the created React application. The overall structure of the project remains exactly the same as what you worked with in React I.

For this project, you'll be building a simple Instagram clone using React. There is a provided file called `dummy-data.js` that contains some mock data. Each object in the mock data represents a faux Instagram post. Your React application will receive this faux post data and render each as a separate Instagram post. 

By the end of this project, you should be comfortable with what components are, the notion of state within a component, as well as passing data from a parent component down to a child component. 

Try to get all of the tests passing. If you don't get there, then aim for creating all of the different components and organizing them appropriately in terms of the parent-child relationship, with data getting passed around accordingly. 

## Project Setup
  * Run `npm i -g create-react-app` to install the React app generator globally.
  * Run `create-react-app instagram` to create your starter application with the name `instagram`.
  * Once your React project has been created, move the provided `/tests` directory as well as the `dummy-data.js` file into the `/src` directory of your newly-generated React project.
  * Inside your `instagram` project directory, run `npm i --save enzyme sinon enzyme-adapter-react-16`, which will install additional necessary dependencies that `create-react-app` doesn't install for you off the bat.
  * Create a `components` directory inside the `src` directory, and then create a directory called `SearchBar`, another one called `PostContainer`, and lastly one called `CommentSection`, all inside the `src` directory. Each of these directories should contain the component file as well as the CSS for their respective components. 

## Project Description
  * There are three components that you'll need to implement for this project: the Search Bar, the Post Container, and the Comment Section.
  * In your completed project, there will be a single instance of the Search Bar being rendered at the top of the page, as well as a Post Container and a Comment Section for every piece of mock data in the `dummy-data.js` file. 
  * The root App component of your application should import the dummy data from the `dummy-data.js` file with `import dummyData from './dummy-data';` and iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.
  * Each `PostContainer` component will then pass the array of comments on each post object as a prop to an instance of the `CommentSection` component. 
  * The `CommentSection` component will receive the array of comments as props and render each one with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. Since there is no login page or anything of that sort, hard code a static username.  
  * You are free to leverage the Bootstrap library for this project for the purposes of theming and styling. I recommend the awesome [react-bootstrap](https://react-bootstrap.github.io) library, which is a library of Bootstrap components that have been implemented using React, so they're really easy to just drop straight into React projects. 
  * In addition to Bootstrap for theming, you'll want to add your own styles via CSS. To keep things organized, have the CSS file that corresponds with a component live in the same directory as the component file. 

---

Your search bar should look something like this:
![alt tag](/assets/ig_search_bar.png)

---

Your post container should look something like this:
![alt tag](/assets/ig_post.png)

## Extra Credit
  * Implement the ability to like a post by clicking on a heart icon and having the number of likes increment accordingly. 
  * Get the Search Bar to filter posts by the post's username. When you submit a search term should filter out posts by users whose usernames do not match the search term. 
  * Look into the [moment.js](https://momentjs.com/) library to read about how to dynamically format the timestamp into a human-readable format like how it is being displayed in the screenshot. 