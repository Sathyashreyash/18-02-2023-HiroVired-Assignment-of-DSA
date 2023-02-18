class LinkedList {
    constructor(data) {
        this.head = { value: data, next: null }
        this.tail = null;
        this.tail = this.head;
        this.length = 1;
    }

    append(data) {
        let newNode = { value: data, next: null }
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
    }
    reverse() {
        let firstNode = this.head
        this.tail = this.head // last write it
        let secondNode = firstNode.next

        while (secondNode) {
            let temp = secondNode.next
            secondNode.next = firstNode

            firstNode = secondNode
            secondNode = temp
        }
        this.head.next = null
        this.head = firstNode
    }
    print() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        // return arr.join(" - ");
        console.log(arr)
    }
}
const mylist = new LinkedList(1)
mylist.append(2)
mylist.append(3)
mylist.append(4)
mylist.reverse()
mylist.print();
console.log(mylist)

