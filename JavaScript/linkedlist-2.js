//linked list practice


//list container
class LinkedList {
    constructor(head = null){
      this.head = head;
    }
  };
  
  //sand village
  
  //containers
  class Node {
    constructor(name, data){
      this.name = name;
      this.data = data;
      //link to the next node
      this.next = null;
    }
  };
  //initialized each node with data
  const firstParticipant =  new Node("Michael Francois", 1);
  const secondParticipant = new Node("Raul Veras", 2);
  const thirdParticipant = new Node("Amar", 3);
  const fourthParticipant = new Node("George", 4);
  
  //connect them
  firstParticipant.next = secondParticipant;
  secondParticipant.next = thirdParticipant;
  thirdParticipant.next = fourthParticipant;
  
  //create container for list
  
  const zoomParticipantListContainer = new LinkedList(firstParticipant);
  
  // //create each node and add data
  // const firstContainer = new ContainerNode(1);
  // const secondContainer = new ContainerNode(2);
  // const thirdContainer = new ContainerNode(3);
  // //add link to next node in each node
  // firstContainer.next = secondContainer;
  // secondContainer.next = thirdContainer;
  // //now that we have created all the nodes for our list, put them in an overall list container
  // const linkedList = new TrainLinkedList(firstContainer);
  
  // //if I want to see the first container in the train, how would I console log it
  
  
  // function traverseList(linkedListParam){
  //   //if I get a list that has a head of null, return out of function
  //   if(linkedListParam.head == null){
  //     return;
  //   } else {
  //     //get the staring node of the list
  //     var currentNode = linkedListParam.head;
  //     //once I get the starting node, loop through it
  //     while(currentNode.next != null){
  //       console.log(currentNode.data);
  //       currentNode = currentNode.next;
  //     }
  //     console.log(currentNode.data);
  //   }
  // }
  
  // traverseList(linkedList);