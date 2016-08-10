// This creates a global function named "dispatch".
// Event handling functions should call this
// to modify the state held by the top component.
// See README.md then main.js for an example of using this.
export default topComponent => {
  window.dispatch = (reducerFn, payload, error, meta) =>
    topComponent.setState(reducerFn(topComponent.state, payload, error, meta));
};
