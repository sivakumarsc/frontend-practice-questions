/**
 * MinHeap Implementation
 * 
 * Time Complexity
 * Insertion - O(log n)
 * Deletion - O(log n)
 */
class MinHeap {
  constructor(heapSize) {
    this.minHeapSize = heapSize;
    this.minHeap = Array.from({length: heapSize + 1}, () => 0);
    this.currentSize = 0;
  }

  add(num) {
    this.currentSize += 1;

    if (this.currentSize > this.minHeapSize) {
      this.currentSize -= 1;
      throw new Error("Heap size exceeds!!");
    }

    this.minHeap[this.currentSize] = num;

    let index = this.currentSize;
    let parentIndex = Math.floor(index/2);

    while(index > 1 && this.minHeap[index] < this.minHeap[parentIndex]) {
      [this.minHeap[index], this.minHeap[parentIndex]] = [this.minHeap[parentIndex], this.minHeap[index]];
      index = parentIndex;
      parentIndex = Math.floor(index/2);
    }
  }

  peek() {
    return this.minHeap[1];
  }

  pop() {
    if (this.currentSize < 1) {
      throw new Error("Heap is empty");
    }

    let itemToBeRemoved = this.minHeap[1];
    this.minHeap[1] = this.minHeap[this.currentSize];
    this.currentSize -= 1;
    let index = 1;

    while(index < this.currentSize && index < Math.floor(index/2)) {
      let left = index * 2, right = index * 2 + 1;
      if (this.minHeap[index] > this.minHeap[left] || this.minHeap[index] > this.minHeap[right]) {
        if (this.minHeap[index] > this.minHeap[left]) {
          [this.minHeap[index], this.minHeap[left]] = [this.minHeap[left], this.minHeap[index]];
          index = left;
        } else {
          [this.minHeap[index], this.minHeap[right]] = [this.minHeap[right], this.minHeap[index]];
          index = right;
        }
      } else {
        break;
      }
    }

    return itemToBeRemoved;
  }
}

// test case
let minHeap = new MinHeap(5);
minHeap.add(3);
minHeap.add(1);
minHeap.add(2);
console.log(minHeap.peek()); // 1
console.log(minHeap.pop()); // 1
console.log(minHeap.pop()); // 2
console.log(minHeap.pop()); // 3
minHeap.add(5);
minHeap.add(4);
console.log(minHeap.peek()); // 4