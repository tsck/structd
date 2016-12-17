import { BSTNode } from './BSTNode.js';

// --------------------------------------------------------------------
// Private Methods
// --------------------------------------------------------------------

function minNode(node) {
    if (node && node.left !== null) {
        return minNode(node.left);
    } else {
        return node.key;
    }
}

function maxNode(node) {
    if (node && node.right !== null) {
        return maxNode(node.right);
    } else {
        return node.key;
    }
}

function searchNode(node, key) {
    if (node === null) {
        return false;
    }

    if (node.key === key) {
        return true;
    }

    if (key < node.key) {
        return searchNode(node.left, key);
    } else {
        return searchNode(node.right, key);
    }
}

// Method remove the node with matching key from the tree and returns it
function removeNode(node, key) {
    // make sure node exists
    if (node === null) {
        return null;
    }

    // If the current node's key is not the correct key, remove it and return it
    if (key === node.key) {

        // Case 1: The node is a leaf node
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }

        // Case 2: The node only has a right child
        if (node.left === null) {
            node = node.right;
            return node;
        }

        // Case 3: The node only has a left child
        if (node.right === null) {
            node = node.left;
            return node;
        }

        // Case 4: The node as 2 children
        let tmp = minNode(node.right);
        node.key = tmp.key;
        node.right = removeNode(node.right, tmp.key);
        return node;
    }

    // If the current node's key is not the correct key, find the right node by
    // traversing down either the left branch or right branch recursively
    if (key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
    } else if (key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
    }
}

function inOrderTraverseNode(node, callback) {
    if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
    }
}

function preOrderTraverseNode(node, callback) {
    if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
}

function postOrderTraverseNode(node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
}

function insertNewNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
          insertNewNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insertNewNode(node.right, newNode);
        }
    }
}

/** Class representing a binary search tree */
export class BinarySearchTree {
  /**
   * Creates a binary search tree.
   */
  constructor() {
    this.root = null;
  }

  /**
   * Inserts key into tree.
   * @param {*} key
   */
  insert(key) {
      let node = new BSTNode(key);
      if (this.root === null) {
          this.root = node;
      } else {
          insertNewNode.call(this, this.root, node);
      }
  }

  /**
   * Searches for given key.
   * @param {*} key - Key to find.
   * @returns {boolean} True if key is found, false if not.
   */
  search(key) {
      return searchNode.call(this, this.root, key);
  }

  /**
   * Traverse through tree in order, executing callback each time with key as argument.
   * @param {function} callback - Callback to be executed.
   */
  inOrderTraverse(callback) {
      inOrderTraverseNode.call(this, this.root, callback);
  }

  /**
   * Traverse through tree in pre-order, executing callback each time with key as argument.
   * @param {function} callback - Callback to be executed.
   */
  preOrderTraverse(callback) {
      preOrderTraverseNode.call(this, this.root, callback);
  }

  /**
   * Traverse through tree in post-order, executing callback each time with key as argument.
   * @param {function} callback - Callback to be executed.
   */
  postOrderTraverse(callback) {
      postOrderTraverseNode.call(this, this.root, callback);
  }

  /**
   * Returns minimum key in tree.
   * @returns {*} Minimum key.
   */
  min() {
      return minNode.call(this, this.root);
  }

  /**
   * Returns maximum key in tree.
   * @returns {*} Maximum key.
   */
  max() {
      return maxNode.call(this, this.root);
  }

  /**
   * Removes given key from tree.
   * @param {*} key - Key to be removed.
   * @returns {*|null} Key that was removed or null if it was not found.
   */
  remove(key) {
      return removeNode.call(this, this.root, key);
  }
}

