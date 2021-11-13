/**
 * MaxHeap Implementation
 * 
 * Time Complexity
 * Insertion - O(log n)
 * Deletion - O(log n)
 * To get min value - O(1)
 */
class MaxHeap {
  constructor(heapSize) {
    this.maxHeapSize = heapSize;
    this.maxHeap = Array.from({ length: heapSize + 1}, () => 0);
    this.currentSize = 0;
  }

  add(num) {
    this.currentSize += 1;

    if (this.currentSize > this.maxHeapSize) {
      this.currentSize -= 1;
      throw new Error("Heap size exceeds!!");
    }

    this.maxHeap[this.currentSize] = num;
    let index = this.currentSize;
    let parentIndex = Math.floor(index / 2);

    while(index > 1 && this.maxHeap[index] > this.maxHeap[parentIndex]) {
      [this.maxHeap[index], this.maxHeap[parentIndex]] = [this.maxHeap[parentIndex], this.maxHeap[index]];
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  peek() {
    return this.maxHeap[1];
  }

  pop() {
    if (this.currentSize < 1) {
      throw new Error("Heap is empty");
    }
    let itemToBeRemoved = this.maxHeap[1];
    this.maxHeap[1] = this.maxHeap[this.currentSize];
    this.currentSize -= 1;
    let index = 1;

    while (index < this.currentSize && index <= Math.floor(this.currentSize/2)) {
      let left = index * 2, right = index * 2 + 1;
      if (this.maxHeap[index] < this.maxHeap[left] || this.maxHeap[index] < this.maxHeap[right]) {
        if (this.maxHeap[left] > this.maxHeap[right]) {
          [this.maxHeap[index], this.maxHeap[left]] = [this.maxHeap[left], this.maxHeap[index]];
          index = left;
        } else {
          [this.maxHeap[index], this.maxHeap[right]] = [this.maxHeap[right], this.maxHeap[index]];
          index = right;
        }
      } else {
        break;
      }
    }

    return itemToBeRemoved;
  }

  size() {
    return this.currentSize;
  }
}

// test case
let maxHeap = new MaxHeap(5);
maxHeap.add(3);
maxHeap.add(1);
maxHeap.add(2);
console.log(maxHeap.peek()); // 3
console.log(maxHeap.pop()); // 3
console.log(maxHeap.pop()); // 2
console.log(maxHeap.pop()); // 1
maxHeap.add(5);
maxHeap.add(4);
console.log(maxHeap.peek()); // 5