const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.head = null
  }

  root() {
    if (this.head === null) {
      return null
    }
    else {
      return this.head
    }
  }

  add(data) {
    let newNode = this.head
    if (newNode === null) {
      this.head = new Node(data)
    }
    else {
      searchPosition(newNode)
    }
    function searchPosition (node) {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data)
        }
        else {
          searchPosition(node.left)
        }
      }
      else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data)
        }
        else {
          searchPosition(node.right)
        }
      }
      else {
        return null
      }
    }
  }

  has(data) {
    if (!this.head) {
      return false
    }
    else if (this.head.data === data) {
      return true
    }
    else {
      return searchData(this.head)
    }
    function searchData(node) {
      if (data <= node.data) {
        if (node.left === null) {
          return false
        }
        else if (node.left.data === data) {
          return true
        }
        else {
          return searchData(node.left)
        }
      }
      else if (data >= node.data) {
        if (node.right === null) {
          return false
        }
        else if (node.right.data === data) {
          return true
        }
        else {
          return searchData(node.right)
        }
      }
      else {
        return false
      }
    }
  }

  find(data) {
    if (!this.head) {
      return null
    }
    else if (this.head.data === data) {
      return this.head
    }
    else {
      return searchNode(this.head)
    }
    function searchNode(node) {
      if (data <= node.data) {
        if (node.left === null) {
          return null
        }
        else if (node.left.data === data) {
          return node.left
        }
        else {
          return searchNode(node.left)
        }
      }
      else if (data >= node.data) {
        if (node.right === null) {
          return null
        }
        else if (node.right.data === data) {
          return node.right
        }
        else {
          return searchNode(node.right)
        }
      }
      else {
        return null
      }
    }
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null
        }
        if (node.left == null) {
          return node.right
        }
        if (node.right == null) {
          return node.left
        }
        let tempoNode = node.right
        while (tempoNode.left !=null) {
          tempoNode = tempoNode.left
        }
        node.data = tempoNode.data;
        node.right = removeNode(node.right, tempoNode.data)
        return node
      }
      else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node;
      }
      else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.head = removeNode(this.head, data)
  }

  min() {
    if (this.head=== null) {
      return null
    }
    else {
      return findMin(this.head)
    }
    function findMin(node) {
      if (node.left === null) {
        return node.data
      }
      else {
        return findMin(node.left)
      }
    }
  }

  max() {
    if (this.head=== null) {
      return null
    }
    else {
      return findMax(this.head)
    }
    function findMax(node) {
      if (node.right === null) {
        return node.data
      }
      else {
        return findMax(node.right)
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};