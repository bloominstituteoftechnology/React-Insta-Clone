import React from 'react';

const Authenticate = App => {
    return class extends React.Component {

        render() {
            return <App />;
        }
    }
}

export default Authenticate;

// - Create a directory called `Authentication`
// - Inside that directory create a component called `<Authenticate />`. This is where all of the magic sis going to happen.
// - This component should be able to take in a component as an argument, and it will return a `class` component.
// - Inside of `<Authenticate />'s` render method, you'll want to return the Component that gets passed into it.
// - Be sure to export out this component.
// - Head over to App.js and `import` in our new `Authenticate` Higher Order Component and pass in `App`.
// - If this worked right then everything should render as it used to.
// - Authenticate will look a lot like this when you're done setting it up.