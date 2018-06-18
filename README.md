# React-Insta-Clone

## Introduction
* The purpose of this project is to continue building on your knowledge of React that you have gained thus far. 
    * Here, you'll be implementing a lot of the same concepts and structuring your components, that you have done in previous projects, in a very similar fashion. The main difference this time around is that you'll be using the `create-react-app` utility to generate your React project for you. 
    * Don't worry about all of the extra files that you may not understand are present inside the created React application. The overall structure of the project remains exactly the same as what you worked with in Todo-React.

* This project will be worked on through the entire week.
    * Each day as you learn new things, you will use that to build and enhance this project a little more.
    * You will use the same repo through the whole week, adding more code, and changing things here and there as you learn new principles and techniques. 
    * It will be important to communicate any problems you're having so you don't fall behind. 
    * The goal is to finish each day's objectives, and have a working project to start with on the next day.

* For this project, you'll be building a simple Instagram clone using React. 
* There is a file provided called `dummy-data.js` that contains some mock data. Each object in the mock data represents a faux Instagram post. 
* Your React application will receive this faux post data and render each as a separate Instagram post.

## Day I
### Focus (Day I)
* Demonstrate the the ability to use create-react-app to boilerplate a react application
* Describe and be able to use PropTypes to 'type check' specific data being passed down to a child component
* Demonstrate the ability to use defaultProps in a React component

### Project Setup
* If you so choose you may install `create-react-app` globally by running `npm install --global create-react-app`.
   * If you have CRA installed then run `create-react-app instagram` to create your starter application with the name `instagram`.
   * if you don't have CRA installed then run `npx create-react-app instagram` to create your starter application with the name `instagram`.
* Inside your `instagram` project directory, run `yarn add enzyme sinon enzyme-adapter-react-16 --dev`, which will install additional necessary dependencies that `create-react-app` doesn't install for you off the bat.
* You'll also need to install the Reactstrap library, which will come in handy for theming and styling of your project. Run `yarn add reactstrap` to install it. Then, copy and paste these two links into the head of the `index.html` file in `instagram/public`:

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
```

* Create a `components` directory inside the `src` directory, and then create a directory called `SearchBar`, another one called `PostContainer`, and lastly one called `CommentSection`, all inside the `src` directory. Each of these directories should contain the component file as well as the CSS for their respective components. Your file structure should end up looking like this:

![alt tag](/assets/folder_structure.png)

### Tasks (Day I)

* There are three components that you'll need to implement for this project: the Search Bar, the Post Container, and the Comment Section.
* At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page, as well as a Post Container and a Comment Section for every piece of mock data in the `dummy-data.js` file.
* The root App component of your application should import the dummy data from the `dummy-data.js` file with `import dummyData from './dummy-data';` and iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.
* Each `PostContainer` component will then pass the array of comments on each post object as a prop to an instance of the `CommentSection` component.
* The `CommentSection` component will receive the array of comments as props and render each one with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.
* You are free to leverage the Bootstrap library for this project for the purposes of theming and styling. I recommend the awesome [reactstrap](https://reactstrap.github.io/) library, which is a library of Bootstrap components that have been implemented using React, so they're really easy to just drop straight into React projects.
* In addition to Bootstrap for theming, you'll want to add your own styles via CSS. To keep things organized, have the CSS file that corresponds with a component live in the same directory as the component file.

---

Your search bar should look something like this:
![alt tag](/assets/ig_search_bar.png)

---

Your post container should look something like this:
![alt tag](/assets/ig_post.png)

### Stretch Problems (Day I)

* Implement the ability to comment on a post with the `Add a comment...` input.
* Look into the [moment.js](https://momentjs.com/) library to read about how to dynamically format the timestamp into a human-readable format like how it is being displayed in the screenshot.
