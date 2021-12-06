/**
 * A QuickFind Implementation
 * 
 * Time Complexity:
 * find - O(1)
 * union - O(n)
 * completed - O(1)
 */

class UnionFind {
  constructor(size) {
    this.root = Array.from({ length: size }, (_, i) => i);
  }

  find(x) {
    return this.root[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      for(let i=0; i<this.root.length; i+=1) {
        if (this.root[i] === rootY) {
          this.root[i] = rootX;
        }
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test Case
let uf = new UnionFind(10)
// 1-2-5-6-7 3-8-9 4
uf.union(1, 2)
uf.union(2, 5)
uf.union(5, 6)
uf.union(6, 7)
uf.union(3, 8)
uf.union(8, 9)
console.log(uf.connected(1, 5))  // true
console.log(uf.connected(5, 7))  // true
console.log(uf.connected(4, 9))  // false
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4)
console.log(uf.connected(4, 9))  // true