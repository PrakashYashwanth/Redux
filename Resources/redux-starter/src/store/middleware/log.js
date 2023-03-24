const log = (store) => (next) => (action) => {
  // we need to make sure that we call the next function with the action inorder to pass it to the next middleware
  next(action);
};
export default log;
