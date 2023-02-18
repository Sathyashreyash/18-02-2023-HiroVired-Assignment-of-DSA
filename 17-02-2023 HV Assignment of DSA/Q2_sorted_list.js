class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function mergeSortedLists(list1, list2) {
    // Check if either list is empty
    if (!list1) {
      return list2;
    }
    if (!list2) {
      return list1;
    }
  
    // Set the head of the merged list
    let mergedHead;
    if (list1.value < list2.value) {
      mergedHead = list1;
      list1 = list1.next;
    } else {
      mergedHead = list2;
      list2 = list2.next;
    }
  
    // Iterate through the lists and merge them
    let current = mergedHead;
    while (list1 && list2) {
      if (list1.value < list2.value) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // Append any remaining nodes in the remaining list
    if (list1) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
    return mergedHead;
  }
  
  // create linked lists
  const list1 = new Node(1, new Node(2, new Node(3)));
  const list2 = new Node(4, new Node(5, new Node(6)));
  
  // merge linked lists and print the merged list
  const mergedList = mergeSortedLists(list1, list2);
  
  let current = mergedList;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
  console.log(mergedList);
  