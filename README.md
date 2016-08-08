This is a greatly simplified version of Redux
inspired by a post from Dan Abramov.
It retains the primary benefits of Redux which are:
<ol>
  <li>representing all app state in a single object</li>
  <li>only changing state by dispatching an "action"</li>
  <li>using pure functions (reducers) to compute new states from current states</li>
</ol>

Rather that holding state in a Redux store,
all state is held in the topmost component.

Importing redux-lite.js creates a global "dispatch" function
that takes a reducer function and an optional payload.

Reducer functions are passed the current state
and the payload, not an "action" object.
They are expected to handle only one specific action type.
They return an object describing state changes to be made,
not a fully populated state object.
This object is passed to the setState method of the topmost component
which performs a shallow merge to create the new state.

This solution makes the assumption that holding all state
in the topmost component and re-rendering it on every change
is acceptable for most applications.
It will not work otherwise.

Redux works with any web framework,
but this approach assumes the use of React.

To run the demo,
* npm install
* npm start
* browse localhost:8080
