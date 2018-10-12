function Sequence (val) {
  return {
    pipe: function (fn) {
      return Sequence(fn(val))
    }
  }
}

// Simple pipe sequence using the module pattern.
// Values passed into to the Sequence function are preserved in a closure to be passed into the next piped function.
// Sequence is called recursively on each function result.
// Simple composition via chaining
// Relies on the arity > 1 (takes more than one argument) function result to produce the initial value / state.
// Relies on the piped functions being unary and accepting and returning the correct type.
