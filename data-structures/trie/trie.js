/**
 * Implement trie-prefix tree
 * https://leetcode.com/problems/implement-trie-prefix-tree/solution/
 */

class TrieNode {
  constructor() {
    this.edges = new Map();
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for(let w of word) {
      if (!node.edges.has(w)) {
        node.edges.set(w, new TrieNode());
      }
      node = node.edges.get(w);
    }
    node.isWordEnd = true;
  }

  traverse(word) {
    let node = this.root;
    for(let w of word) {
      if (!node.edges.has(w)) {
        return null;
      }
      node = node.edges.get(w);
    }
    return node;
  }

  search(word) {
    let node = this.traverse(word);
    return node !== null && node.isWordEnd;
  }

  startsWith(word) {
    let node = this.traverse(word);
    return node !== null;
  }
}