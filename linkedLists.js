const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new Node(item, null);
    }
  }

  insertBefore(value, insertion) {
    let currNode = this.head;
    let tempNode = this.head;
    while (currNode.value !== insertion) {
      tempNode = currNode;
      currNode = currNode.next;
    }
    tempNode.next = new Node(value, currNode);
  }

  insertAfter(value, insertion) {
    let currNode = this.find(insertion);
    let afterNode = currNode.next;
    currNode.next = new Node(value, afterNode);
  }

  insertAt(value, index) {
    let currIndex = 0;
    let currNode = this.head;
    while (currIndex !== index - 1) {
      currNode = currNode.next;
      currIndex++;
    }
    currNode.next = new Node(value, currNode.next.next);
  }

  insertCycle(newItem, nextItem) {
    console.log("entering cycle entry");
    let currNode = this.head;
    let previousNode = this.head;
    let prevPrevNode = this.head;

    while (currNode !== null && currNode.value !== nextItem) {
      prevPrevNode = previousNode;
      previousNode = currNode;
      currNode = currNode.next;
    }

    let newNode = new Node(newItem, prevPrevNode);
    previousNode.next = newNode;
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(llist) {
  let currNode = llist.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(llist) {
  let currNode = llist.head;
  let counter = 0;
  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }
  console.log("This list has " + counter + " items");
}

function isEmpty(llist) {
  let currNode = llist.head;
  if (currNode === null) {
    console.log("This list is empty");
  } else {
    console.log("This list is not empty");
  }
}

function findPrevious(item, llist) {
  let currentNode = llist.head;

  while (item !== currentNode.next.value) {
    currentNode = currentNode.next;
  }

  return console.log(currentNode);
}

function findLast(llist) {
  let currentNode = llist.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  return console.log(currentNode);
}

function reverseList(llist) {
  let currentNode = llist.head; //start at the beginning
  let node = null; //save the previous thing to point at

  while (currentNode !== null) {
    //[1, 2, 3, 4]

    let tempNext = currentNode.next; //2 //3

    currentNode.next = node; //1 -> null //3
    node = currentNode; //value from null to 1

    currentNode = tempNext; //value from 1 to 2
  }

  this.head = node;
  console.log(node);
}

function thirdFromEnd(llist) {
  let currentNode = llist.head;
  while (currentNode.next.next.next !== null) {
    currentNode = currentNode.next;
  }
  console.log("third", currentNode.value);
  return currentNode;
}

function middleOfList(llist) {
  if (llist.head === null) {
    console.log("List is empty");
    return;
  }

  let currNode = llist.head;
  let stepper = 1;
  while (currNode.next !== null) {
    currNode = currNode.next;
    stepper++;
  }
  console.log(stepper);
  let middle = Math.ceil(stepper / 2);
  console.log(middle);
  stepper = 1;
  currNode = llist.head;
  while (stepper < middle) {
    stepper++;
    currNode = currNode.next;
  }
  console.log(currNode.value);
  return currNode;
}

//will return true if the list is a cycle. Will return false if not a cycle.
function cycleList(llist) {
  let newObject = {};
  let currHead = llist.head;
  while (currHead.next !== null) {
    if (newObject[currHead.value]) {
      return console.log("true");
    }
    newObject[currHead.value] = currHead.value;
    currHead = currHead.next;
  }
  return console.log("false");
}

function main() {
  // let SLL = new LinkedList();
  // SLL.insertLast("Apollo");
  // SLL.insertLast("Boomer");
  // SLL.insertLast("Helo");
  // SLL.insertLast("Husker");
  // SLL.insertLast("Starbuck");
  // SLL.insertLast("Tauhida");
  // SLL.remove("Husker");
  // SLL.insertBefore("Athena", "Boomer");
  // SLL.insertAfter("Hotdog", "Helo");
  // SLL.insertAt("Kat", 2);
  // SLL.remove("Tauhida");
  // display(SLL);
  //   size(SLL);
  // isEmpty(SLL);
  // let SLLAlt = new LinkedList();
  // isEmpty(SLLAlt);
  // findPrevious("Starbuck", SLL);
  // findLast(SLL);
  // WhatDoesThisProgramDo(SLL);
  // reverseList(SLL);
  // thirdFromEnd(SLL);
  // middleOfList(SLL);
  let CycleList = new LinkedList();
  CycleList.insertFirst(1);
  CycleList.insertLast(2);
  CycleList.insertLast(3);
  CycleList.insertLast(4);
  CycleList.insertLast(5);
  CycleList.insertLast(6);
  CycleList.insertCycle(7);
  cycleList(CycleList);
  //   console.log(JSON.stringify(SLL));
}
main();

module.exports = LinkedList;

// function WhatDoesThisProgramDo(lst) {
//   let current = lst.head;
//   while (current !== null) {
//       let newNode = current;
//       while (newNode.next !== null) {
//           if (newNode.next.value === current.value) {
//               newNode.next = newNode.next.next;
//           }
//           else {
//               newNode = newNode.next;
//           }
//       }
//       current = current.next;
//   }
// }

// This function checks for duplicate items and removes them.
