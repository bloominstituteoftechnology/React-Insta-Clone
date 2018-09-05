## Day III

### Focus (Day III)

- Be able to explain and implement a React Higher Order Component to conditionally render protected content to the screen.

### Daily Setup (Day III)

- To start off today, your application should still be structured like yesterday, but now it should have a working search bar, comment input, and like icon.
- Those aren't necessary, however, for what you will be doing today. You can still work on today's part of this project even if you aren't completely done with yesterday's portion.

### Description (Day III)

- Today you will be building a "Higher Order Component" (HOC)
- The HOC will not let users see the posts until they have logged in. (Our login system for this will be faked using LocalStorage).
- The job of the HOC will be to render a login page if the user is not logged in, then render the posts after the user is logged in.

#### Tasks (Day III)

- Create a `PostsPage` component in your `components` directory. You'll have to move what is rendered in `app.js` to this new component, and in app.js, render the `PostsPage` component. Get the app working as it was before.
- Build a Higher Order Component called `withEither` in `app.js`.
  - `withEither` will take in a `conditionalRenderingFn` and an `EitherComponent` (LoginPage), and returns a component that takes in a component (PostsPage), and returns a component that takes in props... Phew!!!
  - The final component will use the `conditionalRenderingFn` to determine which component to render.
  - Create a function called `isLoggedInConditionFn` that checks if a user is logged in a returns a boolean value.
  - Set a constant called `withAuthConditionalRendering`. The value will be `withEither` invoked with `isLoggedInConditionFn`, and the `LoginPage` component. (Try to think about what is returned by that function, so you know what your const is being set to)
  - Set another variable called `InstaContentConditionalRendering`. The value for this will be `withAuthConditionalRendering` invoked with the `PostsPage` component. (Again, try to think about what is returned here as well, so you know what this variable's value is being set to)
  - Now you can use `InstaContentConditionalRendering` as a component and pass it any props that `LoginPage` and `PostsPage` might need.
- Set up `app.js` to log users in, and also to use your HOC to conditionally render the login page or the posts page.
  - Add an empty `user` object to the state object.
  - In `componentDidMount` check `LocalStorage` for user data to see if the user is logged in.
- Build out the LoginPage component. You can design it how you like.
  - In your `Components` directory, create a new file called `LoginPage.jsx`.
  - There should be a `username` input, a `password` input, and a `Login` button.
  - The component should set the user info to `localStorage` when the user logs in.

#### Stretch Problems (Day III)
