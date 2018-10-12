function pipe () {
  let fns = Array.from(arguments);
  // create an array of all the functions we want to pipe.

  return function () {
    let args = Array.from(arguments);
    // create an array for the arguments to pass to the
    // first (arity > 1) function.

    return fns.reduce(function (acc, fn, idx) {
    // for all the functions passed into the original call
      if (idx === 0) return fn.apply(null, acc)
      // if this is the first function, apply it to the array
      // of arguments passed into the subsequent invocation 
      // and return the result.
      else return fn(acc)
      // otherwise apply the function to the result of the
      // previous function call and return the result.
    }, args);
  };
}

// Handles the arity > 1 function more elegantly than sequence / chaining
// pipe 'caches' the functions we want to compose using a closure and returns
// a new function that accepts the arity > 1 functions args.
