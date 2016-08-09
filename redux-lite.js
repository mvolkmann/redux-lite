// This creates a global function named "dispatch".
// Event handling functions should call this
// to modify the state held by the top component.
// The top component holds state instead of a Redux store.
// Reducer functions are passed the current state and an optional payload.
// They only need to return the changes to be made to state,
// not the full new state since setState performs a shallow merge.
export default topComponent => {
  window.dispatch = (reducerFn, payload, error, meta) =>
    topComponent.setState(reducerFn(topComponent.state, payload, error, meta));
};
