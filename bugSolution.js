function foo(a, b) {
  // Handle undefined values explicitly
  a = (typeof a === 'undefined') ? 0 : a;
  b = (typeof b === 'undefined') ? 0 : b;
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, undefined)); //Output: 0