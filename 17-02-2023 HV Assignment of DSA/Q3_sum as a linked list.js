class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function addTwoNumbers(list1, list2) {
    let num = 0;
    let sum = 0;
    let result = new Node(0);
    let current = result;
  
    while (list1 || list2 || num) {
      sum = (list1 ? list1.value : 0) + (list2 ? list2.value : 0) + num;
      num = Math.floor(sum / 10);
      current.next = new Node(sum % 10);
      current = current.next;
      list1 = list1 ? list1.next : null;
      list2 = list2 ? list2.next : null;
    }
  
    return result.next;
  }
  
  // create linked lists
  const list1 = new Node(7, new Node(1, new Node(6)));
  const list2 = new Node(5, new Node(9, new Node(2)));
  
  // add linked lists and print the result
  const sumList = addTwoNumbers(list1, list2);
  
  let current = sumList;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
  console.log(sumList);
console.log(addTwoNumbers);
