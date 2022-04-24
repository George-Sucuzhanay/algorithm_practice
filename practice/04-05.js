// create a linked list and then loop through it
// as you loop, show each piece of data in each node


class LinkedList {
    constructor(head=null){
        this.head = head;
    }
}
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let firstNode = new Node(1);
let secondNode = new Node(2);
let thirdNode = new Node(3);

// creates our linked list
let linkedList = new LinkedList(firstNode);

firstNode.next = secondNode;
secondNode.next = thirdNode;

console.log(linkedList);