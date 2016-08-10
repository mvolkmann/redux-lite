// See README.md then demo/demo.js for an example of using this.
export default topComponent =>
  window.dispatch = (reducerFn, payload, error, meta) =>
    topComponent.setState(reducerFn(topComponent.state, payload, error, meta));
