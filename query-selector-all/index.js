/**
 * Implement document.querySelectorAll() in JS
 */

document.prototype.myQuerySelectorAll = function(selector) {
  let result = [];

  // Selector will be compared as a regex
  function isMatch(node) {
    return node.matches(selector);
  }

  function traverse(node) {
    if (!node) {
      return;
    }
    if (isMatch(node)) {
      result.add(node);
    }
    for (let childNode of node.children) {
      traverse(childNode);
    }
  }

  // To travserse from root HTML element
  traverse(this.documentElement);

  return result;
}