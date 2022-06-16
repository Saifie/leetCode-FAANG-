class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }
  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  append(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    }
    this.tail.next = node;
    this.tail = node;
    this.length + 1;
  }
  reverse(m, n) {
    let position = 1,
      curNode = this.head;
    let start = this.head;
    while (position < m) {
      start = curNode;
      curNode = curNode;
      position++;
    }
    let tail = curNode;
    let newNode = null;
    while (position >= m && position <= n) {
      let next = curNode.next;
      curNode.next = newNode;
      newNode = curNode;
      curNode = next;
      position++;
    }
    start.next = newNode;
    tail.next = curNode;
    if (m > 1) {
      return this.head;
    } else {
      return newNode;
    }
  }
}
//  1->2->3->4->5->6->7->8->9

let link = new LinkedList(2);
link.append(4);
link.append(5);
link.append(46);
link.print();
console.log(link.reverse());
