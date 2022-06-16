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
  reverse() {
    let curNode = this.head;
    let prev = null;

    while (curNode) {
      let next = curNode.next;
      curNode.next = prev;
      prev = curNode;
      curNode = next;
    }
    return prev;
  }
}

let link = new LinkedList(2);
link.append(4);
link.append(5);
link.append(46);
link.print();
console.log(link.reverse());

// reverse() {
//     let temp = this.head;
//     let before = null;
//     let after = temp.next;
//     this.head = this.tail;
//     this.tail = temp;
//     while (temp) {
//       after = temp.next;
//       temp.next = before;
//       before = temp;
//       temp = after;
//     }
//   }
