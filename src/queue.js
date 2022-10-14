const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.Queue = new ListNode
    this.last = null
  }

  getUnderlyingList() {
    return this.Queue
  }

  enqueue(element) {
    let newElement = new ListNode(element)
    if (!this.Queue.value) {
      this.Queue = newElement
    }
    else {
      enqueueList(this.Queue)
    }
    function enqueueList(list) {
      if (!list.next) {
        list.next = newElement
      }
      else {
        enqueueList(list.next)
      }
    }
    }

  dequeue() {
    if (this.Queue.value) {
      let top = this.Queue.value
      this.Queue = this.Queue.next
      return top
    }
    else {
      return null
    }
  }
}

module.exports = {
  Queue
};
