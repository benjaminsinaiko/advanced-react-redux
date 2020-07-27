// REDUX MIDDLE WARE STRUCTURE
// export default function ({ dispatch }) {
//   return function (next) {
//     return function (action) {
//       //
//     };
//   };
// }

// REFACTOR MIDDLEWARE
export default ({ dispatch }) => (next) => (action) => {
  // Check to see if the action has a promise in payload
  // If yes, then wait for it to resolve
  // If no, send action to next middleware

  if (!action.payload || !action.payload.then) {
    return next(action);
  }
};
