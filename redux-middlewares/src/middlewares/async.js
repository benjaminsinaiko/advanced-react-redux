export default ({ dispatch }) => (next) => (action) => {
  // Check to see if the action has a promise in payload
  // If yes, then wait for it to resolve
  // If no, send action to next middleware

  if (!(action.payload instanceof Promise)) {
    return next(action);
  }

  // Wait for the promise to resolve
  // Get data and create new action
  // Dispatch new action

  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
