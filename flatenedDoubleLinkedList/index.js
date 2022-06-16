function flatenedDoubleLinkedList(head) {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.child) {
      let att = currentNode.next;
      let childNode = currentNode.child;

      currentNode.next = childNode;
      childNode.prev = currentNode;

      while (childNode.next) {
        childNode = childNode.next;
      }
      let tail = childNode;
      tail.next = att;
      if (att) {
        att.prev = tail;
      }

      currentNode.child = null;
    } else {
      currentNode = currentNode.next;
    }
  }
}
