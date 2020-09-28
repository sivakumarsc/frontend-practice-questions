function multiplyBy2(x) {
  return x * 2;
}

function memoize(func) {
  let map = new Map();

  return function(x) {
    if (map.has(x)) {
      return `Returned from memory ${map.get(x)}`;
    }

    let result = func(x);
    map.set(x, result);

    return `Returned from function ${result}`;
  }
}

let wrapper = memoize(multiplyBy2);
console.log(wrapper(2)); // Returned from function 4
console.log(wrapper(4)); // Returned from function 8
console.log(wrapper(5)); // Returned from function 10
console.log(wrapper(2)); // Returned from memory 4
console.log(wrapper(2)); // Returned from memory 4
console.log(wrapper(6)); // Returned from function 12