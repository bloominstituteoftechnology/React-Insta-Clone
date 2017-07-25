# React II

## Topics - OKAY √
 * create-react-app
 * JSX
 * state
 * setState
 * props
 * propTypes (`npm i --save prop-types`) - DONE √
  ```console
  {
    "name": "instagram",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "prop-types": "^15.5.10",
      "react": "^15.6.1",
      "react-dom": "^15.6.1"
    }
  ```

 * `onClick={}`
 * map
 * functional vs class components

## Objectives - OKAY √
The purpose of this project is to continue building on your knowledge of React that started with the React I project. Here, you'll be implementing a lot of the same concepts and structuring your components in a very similar fashion. The main difference this time around is that you'll be using the `create-react-app` utility to generate your React projects for you. Don't worry about all of the extra files that you may not understand. The overall structure of the project is exactly the same as what you worked with in React I. There are also some tests this time around to give you a better sense of your progress.

By the end of this project, you should be comfortable with what components are, the notion of state within a component, as well as passing data from a parent component down to a child component.

Try to get all of the tests passing. If you don't get there, then aim for creating all of the different components and organizing them appropriately in terms of the parent-child relationship, with data getting passed around accordingly.

## Project Setup - DONE √
  * Run `npm i -g create-react-app` to install the React app generator. - DONE √
  * Run `create-react-app instagram` to create your starter application. - DONE √  

  ```console
  3 mixelpix Mon Jul 24 17:31:02$  create-react-app instagram
    Creating a new React app in /Users/mixelpix/Lambda-University/LS-React-2/instagram.

    Installing packages. This might take a couple minutes.
    Installing react, react-dom, and react-scripts...


    > fsevents@1.1.2 install /Users/mixelpix/Lambda-University/LS-React-2/instagram/node_modules/fsevents
    > node install

    [fsevents] Success: "/Users/mixelpix/Lambda-University/LS-React-2/instagram/node_modules/fsevents/lib/binding/Release/node-v57-
    darwin-x64/fse.node" already installed
    Pass --update-binary to reinstall or --build-from-source to recompile
    npm notice created a lockfile as package-lock.json. You should commit this file.

    + react-scripts@1.0.10
    + react-dom@15.6.1
    + react@15.6.1
    added 1204 packages in 126.303s

    Success! Created instagram at /Users/mixelpix/Lambda-University/LS-React-2/instagram
    Inside that directory, you can run several commands:

      npm start
        Starts the development server.

      npm run build
        Bundles the app into static files for production.

      npm test
        Starts the test runner.

      npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can’t go back!


    We suggest that you begin by typing:

      cd instagram
      npm start

    Happy hacking!
  ```


  * Inside your React app, run `npm i --save-dev enzyme sinon` to install Enzyme and Sinon, which are libraries that are needed for testing your components. - DONE√
    ```console
    $  npm i --save-dev enzyme sinon
      + sinon@2.3.8
      + enzyme@2.9.1
      added 28 packages in 19.896s
      9 mixelpix Mon Jul 24 18:47:25
    ```

  * If you are using React 14.X or React < 15.5, then you'll need to run `npm i --save-dev react-addons-test-utils react-dom` as well. - NOPE √
  * If you are using React >= 15.5, then you'll need to run `npm i --save-dev react-test-renderer react-dom` as well. - DONE √
    ```console
    $  npm i --save-dev react-test-renderer react-dom
      npm notice save react-dom is being moved from dependencies to devDependencies
      + react-test-renderer@15.6.1
      + react-dom@15.6.1
      added 1 package and updated 1 package in 15.716s
    ```
  * Move the provided `/tests` directory as well as the `application-data.js` file into the `/src` directory of your newly-generated React project. - DONE √

## Project Description - OKAY √
  * There are two overarching components that you'll need to implement for this project: the Search Bar and the Post Container.
  * You'll want to separate the comment section of the Post Container into its own Comment Section component that will be a child of the Post Container.
  * Focus less on exact styling and more on the structure of your React components.
  * You are free to leverage bootstrap for this project for the purposes of styling. I recommend the great [react-bootstrap](https://react-bootstrap.github.io) library, which is a library of bootstrap components that have been implemented using React, so they're really easy to just drop straight into React projects.

---

Your search bar should look something like this:
![alt tag](/patrick/instagram/assets/ig_search_bar.png)

---

Your post container should look something like this:
![alt tag](/patrick/instagram/assets/ig_post.png)

## Extra Credit - OKAY √
  * Implement the ability to like a post by clicking on the heart icon and having the number of likes increment accordingly.
  * Look into the [moment.js](https://momentjs.com/) library to read about how to dynamically format the timestamp into a human-readable format like how it is being displayed in the screenshot.
  * In the bottom right corner of the Post Container, you'll see an ellipsis icon. Clicking this icon will pop up a modal that, on Instagram's site, gives you options for flagging the post as inappropriate. Look into implementing this modal functionality in your own project.
