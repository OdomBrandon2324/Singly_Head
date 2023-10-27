// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example: 
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

const reverseList = function(head) {

    // Create variables that hold reference points in the linked list
    let prev = null;
    let curr = head;
    let nxt = null;
    
    // Iterate through the list
    while(curr !== null){
    // While iterating we must reassign our variables
      
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }
    console.log('this is the value  of prev: ', prev);
    return prev;
      
  };
  
  console.log(reverseList([1,2,3,4,5]));
  
  
  
  
  // Of course! Here's a bit more guidance:
  
  // Loop Condition: As mentioned earlier, the condition while (!curr) should be changed to reflect the correct condition that indicates there are still nodes to process.
  
  // Initial Values: Before entering the loop, think about the initial values of prev, curr, and nxt. What should they be at the start of the reversal process?
  
  // Reversal Steps: Inside the loop, the core steps involve reassigning references to reverse the linked list. Focus on how you should update prev, curr, and nxt at each iteration.
  
  // Termination: Consider the condition that indicates when the loop should stop. What should be the condition to exit the loop after the entire linked list is reversed?
  
  // By addressing these points, you'll be able to create a functioning algorithm that successfully reverses a singly linked list. Remember to carefully update the references and conditions to achieve the desired outcome.
  
  
  
  
  
  
  
  // const reverseList = function(head) {
  //   let prev = null;
  //   let curr = head;
  
  //   while (curr !== null) {
  //     let nxt = curr.next; // Save the next node reference
  
  //     if (prev === null) {
  //       curr.next = null; // Update the 'next' of the first node
  //     } else {
  //       curr.next = prev; // Reverse the current node's pointer to the previous node
  //     }
  
  //     prev = curr;
  //     curr = nxt;
  //   }
  
  //   return prev;
  // };
  
  
  
  
  
  
  