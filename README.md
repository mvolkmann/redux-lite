It appears I'll need to pick a different name for this since https://github.com/zefhemel/redux-lite already exists.

## Goals
* Create a greatly simplified version of Redux, taking inspiration from a post by Dan Abramov.
* Retain the primary benefits of Redux which are:
  1. representing all app state in a single object</li>
  1. only changing state by dispatching an "action"</li>
  1. using pure functions (reducers) to compute new states from current states</li>

## Problems to solve
1. Simplify setup.
1. Remove the need to define constants for action types.
1. Remove the need to create action objects.
1. Simplify writing of reducer functions, partly by removing the need to check for action types.
1. Remove the need to import a library to support state management.

## Solution
* Rather that holding state in a Redux store,
  all state is held in the topmost component.
* A global "dispatch" function is created.  This takes
  a reducer function and three optional arguments:
  payload, error flag, and meta object.
  This function captures the topmost component through closure.
  It later uses that to obtain the current state
  and call setState on that component.
  An advantage of this function being global is that
  it becomes easy to dispatch "actions" from any component.
* These reducers functions differ a bit from those in Redux.
  * Each is intended to handle a specific "action"
    which frees it from needing to test an action type.
    No more having to examine every reducer function to
    determine what happens when a given action is dispatched.
  * They are passed the current state.  However, instead of
    being passed an action object, they are passed three optional arguments:
    payload, error flag, and metadata object.
  * They return an object describing the changes to be made to the state,
    not a fully populated state object, which is simpler.
  * The return object is passed to the setState method of the topmost component
    which performs a shallow merge to create the new state.

## Downsides
* Unlike Redux which works with any web framework,
  this approach only works with React because it assumes
  the presence of a topmost React component with a setState method.
* Using this precludes the use of redux-devtools which provides
  hot reloading and action replay.
* This solution makes the assumption that holding all state
  in the topmost component and re-rendering it on every change
  is acceptable for most applications.

## Conclusion
I believe that for most React applications, the simplicity this approach brings
far outweights any of the downsides.

## Steps to run the demo
* npm install
* npm start
* browse localhost:8080

## Steps to use in your app
To use this just copy one file from this repo, redux-lite.js.
This is so small that it's not worth turning it into an npm package.
The package.json file is much larger than this.
Check it out!
