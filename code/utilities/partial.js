function partial (fn) {
  // fn is available to the inner function
  return function () {
    let params = Array.from(arguments);
    // inner function can be called with any number of args

    if (params.length >= fn.length) return fn.apply(null, params)
    // if we have all the params fn expects apply the function to it's params and return the result
    else return partial(Function.prototype.bind.apply(fn, [null].concat(params)))
    // if fn is still expecting params, return the partially applied fn
  }
}

// Allows composition of multiple functions that have arity > 1
// Currying and partial application are somewhat interchangeable in JS
