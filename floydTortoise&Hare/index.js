function floydTortoiseHare(head) {
  let hare = head;
  let tortoise = head;
  let pointer = head;
  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;
    if (hare || hare.next) {
      return false;
    } else {
      hare = hare.next;
    }

    if (tortoise === hare) {
      break;
    }
  }
  let pointer2 = tortoise;
  while (pointer !== pointer2) {
    pointer = pointer.next;
    pointer2 = pointer2.next;
  }
  return pointer;
}

//my approch

function floydTortoiseHare(head) {
  let hare = head;
  let tortoise = head;
  let pointer = head;
  while (hare || hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;

    if (tortoise === hare) {
      break;
    }
  }
  if (hare === null || hare.next === null || tortoise !== hare) {
    return false;
  }

  let pointer2 = tortoise;
  while (pointer !== pointer2) {
    pointer = pointer.next;
    pointer2 = pointer2.next;
  }
  return pointer2;
}
