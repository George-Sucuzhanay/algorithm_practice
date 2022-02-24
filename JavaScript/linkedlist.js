
class LinkedList{
    constructor(head=null){
        this.head = head;
    }
}

// once initialized data is passed in but next Node
// is unknown
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// creates our Nodes
// initialized with data 1
let firstNode = new Node(1);
let secondNode = new Node(2);
let thirdNode = new Node(3);

// creates our linked list
let linkedList = new LinkedList(firstNode);

firstNode.next = secondNode;
secondNode.next = thirdNode;

console.log(linkedList);

// node linkedlist.js