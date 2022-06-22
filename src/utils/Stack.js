class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 3 * value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      // cuando la fila esta vacía
      this.top = newNode;
      this.next = newNode;
    } else {
      // cuando la fila tiene elementos
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size++;
    return this;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (this.length !== 0) {
      this.top = this.top.next;
      this.length--;
    }
    return this;
  }

  traverse() {
    let list = [];
    let currentNode = this.top;
    while (currentNode) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }
    return list;
  }
}

export default Stack;
