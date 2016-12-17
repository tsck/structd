(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["structd"] = factory();
	else
		root["structd"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Graph = exports.BinarySearchTree = exports.HashTable = exports.LinkedList = exports.Queue = exports.Stack = undefined;
	
	var _Stack = __webpack_require__(1);
	
	var _Queue = __webpack_require__(2);
	
	var _LinkedList = __webpack_require__(3);
	
	var _HashTable = __webpack_require__(5);
	
	var _BinarySearchTree = __webpack_require__(8);
	
	var _Graph = __webpack_require__(10);
	
	exports.Stack = _Stack.Stack;
	exports.Queue = _Queue.Queue;
	exports.LinkedList = _LinkedList.LinkedList;
	exports.HashTable = _HashTable.HashTable;
	exports.BinarySearchTree = _BinarySearchTree.BinarySearchTree;
	exports.Graph = _Graph.Graph;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var map = new WeakMap();
	
	/** Class representing a last-in-first-out (LIFO) stack of elements. */
	
	var Stack = exports.Stack = function () {
	  /**
	   * Creates a stack.
	   */
	  function Stack() {
	    _classCallCheck(this, Stack);
	
	    map.set(this, []);
	  }
	
	  /**
	   * Get a string representation of the stack.
	   * @returns {string} The string representation of stack.
	   */
	
	
	  _createClass(Stack, [{
	    key: "toString",
	    value: function toString() {
	      var stack = map.get(this);
	      return stack.toString();
	    }
	
	    /**
	     * Gets and removes the last element in stack.
	     * @returns {*} The last element in stack.
	     */
	
	  }, {
	    key: "pop",
	    value: function pop() {
	      var stack = map.get(this);
	      return stack.pop();
	    }
	
	    /**
	     * Pushes an element onto stack.
	     * @param {*} element - Element to be added to stack.
	     */
	
	  }, {
	    key: "push",
	    value: function push(element) {
	      var stack = map.get(this);
	      stack.push(element);
	    }
	
	    /**
	     * Gets the size of stack.
	     * @returns {number} The size of stack.
	     */
	
	  }, {
	    key: "size",
	    value: function size() {
	      var stack = map.get(this);
	      return stack.length;
	    }
	
	    /**
	     * Checks whether or not the stack is empty.
	     * @returns {boolean} True if the stack's empty, false if it's not.
	     */
	
	  }, {
	    key: "isEmpty",
	    value: function isEmpty() {
	      var stack = map.get(this);
	      return stack.length === 0;
	    }
	
	    /**
	     * Removes all elements from stack.
	     */
	
	  }, {
	    key: "clear",
	    value: function clear() {
	      var stack = map.get(this);
	      stack.splice(0, stack.length);
	    }
	  }]);

	  return Stack;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var map = new WeakMap();
	
	/** Class representing a first-in-first-out (FIFO) queue of elements. */
	
	var Queue = exports.Queue = function () {
	  /**
	   * Creates a queue.
	   */
	  function Queue() {
	    _classCallCheck(this, Queue);
	
	    map.set(this, []);
	  }
	
	  /**
	   * Get a string representation of queue.
	   * @returns {string} The string representation of queue.
	   */
	
	
	  _createClass(Queue, [{
	    key: "toString",
	    value: function toString() {
	      var queue = map.get(this);
	      return queue.toString();
	    }
	
	    /**
	     * Removes the first element from the queue.
	     * @returns {*} Element removed from queue.
	     */
	
	  }, {
	    key: "dequeue",
	    value: function dequeue() {
	      var queue = map.get(this);
	      return queue.shift();
	    }
	
	    /**
	     * Places an element onto queue.
	     * @param {*} element - Element to be added to queue.
	     */
	
	  }, {
	    key: "enqueue",
	    value: function enqueue(element) {
	      var queue = map.get(this);
	      queue.push(element);
	    }
	
	    /**
	     * Gets the size of queue.
	     * @returns {number} The size of queue.
	     */
	
	  }, {
	    key: "size",
	    value: function size() {
	      var queue = map.get(this);
	      return queue.length;
	    }
	
	    /**
	     * Checks whether queue is empty.
	     * @returns {boolean} True if empty, false if not.
	     */
	
	  }, {
	    key: "isEmpty",
	    value: function isEmpty() {
	      var queue = map.get(this);
	      return queue.length === 0;
	    }
	
	    /**
	     * Gets first element of queue without removing it.
	     * @returns {*} First element of queue.
	     */
	
	  }, {
	    key: "front",
	    value: function front() {
	      var queue = map.get(this);
	      return queue[0];
	    }
	
	    /**
	     * Removes all elements from queue.
	     */
	
	  }, {
	    key: "clear",
	    value: function clear() {
	      var queue = map.get(this);
	      queue.splice(0, queue.length);
	    }
	  }]);

	  return Queue;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LinkedList = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _LinkedListNode = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/** Class representing a singly linked list of elements. */
	var LinkedList = exports.LinkedList = function () {
	  /**
	   * Creates a linked list.
	   */
	  function LinkedList() {
	    _classCallCheck(this, LinkedList);
	
	    this.length = 0;
	    this.head = null;
	  }
	
	  /**
	   * Appends an element to the end of list.
	   * @param {*} element - Element to be appended to list.
	   */
	
	
	  _createClass(LinkedList, [{
	    key: 'append',
	    value: function append(element) {
	      var node = new _LinkedListNode.LinkedListNode(element),
	          current = void 0;
	
	      // Check if this is 1st item in list
	      if (this.head === null) {
	        this.head = node;
	      } else {
	        current = this.head;
	
	        // Loop to last node in list
	        while (current.next) {
	          current = current.next;
	        }
	
	        current.next = node;
	      }
	
	      this.length++;
	    }
	
	    /**
	     * Inserts an element into the list at a given position.
	     * @param {number} position - Position to insert new element.
	     * @param {*} element - Element to be inserted into list.
	     */
	
	  }, {
	    key: 'insert',
	    value: function insert(position, element) {
	      var node = new _LinkedListNode.LinkedListNode(element),
	          prevPosition = position - 1,
	          prevNode = this.head,
	          nextNode = void 0;
	
	      // Get previous element
	      for (var i = 0; i < prevPosition; i++) {
	        prevNode = prevNode.next;
	      }
	
	      nextNode = prevNode.next;
	      prevNode.next = node;
	      node.next = nextNode;
	    }
	
	    /**
	     * Removes element from list at given position
	     * @param {number} position - Position where element to be removed is.
	     */
	
	  }, {
	    key: 'removeAt',
	    value: function removeAt(position) {
	      if (position > -1 && position < this.length && this.head != null) {
	        var prevPosition = position - 1,
	            current = this.head;
	
	        if (position === 0) {
	          this.head = current.next;
	        } else {
	          // Get previous element
	          for (var i = 0; i < prevPosition; i++) {
	            current = current.next;
	          }
	
	          // Assign previous elements next to the element after the element being
	          // replaced
	          current.next = current.next.next;
	        }
	      }
	    }
	
	    /**
	     * Removes given element from list.
	     * @param {*} element - Element to be removed.
	     */
	
	  }, {
	    key: 'remove',
	    value: function remove(element) {
	      var position = this.indexOf(element);
	      this.removeAt(position);
	    }
	
	    /**
	     * Get the index of a given element.
	     * @param {*} element - Element who's index is needed.
	     * @returns {number} Index of given element.
	     */
	
	  }, {
	    key: 'indexOf',
	    value: function indexOf(element) {
	      var index = 0,
	          current = void 0;
	
	      if (this.head) {
	        current = this.head;
	        while (current) {
	          if (current.element === element) return index;
	          index++;
	          current = current.next;
	        }
	      }
	
	      // Will only be reached if element not found in list
	      return -1;
	    }
	
	    /**
	     * Checks whether or not the list is empty.
	     * @returns {boolean} True if the list's empty, false if it's not.
	     */
	
	  }, {
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.length === 0;
	    }
	
	    /**
	     * Gets the size of list.
	     * @returns {number} The size of list.
	     */
	
	  }, {
	    key: 'size',
	    value: function size() {
	      return this.length;
	    }
	
	    /**
	     * Get a string representation of the list.
	     * @returns {string} The string representation of list.
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var current = this.head,
	          string = '';
	
	      while (current) {
	        string += current.element + ', ';
	        current = current.next;
	      }
	
	      // Remove trailing space and comma
	      string = string.substring(0, string.length - 2);
	
	      return string;
	    }
	  }]);

	  return LinkedList;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LinkedListNode = exports.LinkedListNode = function LinkedListNode(element) {
	  _classCallCheck(this, LinkedListNode);
	
	  this.element = element;
	  this.next = null;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HashTable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _HashCodes = __webpack_require__(6);
	
	var _ValuePair = __webpack_require__(7);
	
	var _LinkedList = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/** Class representing a hash table which maps keys to values. */
	var HashTable = exports.HashTable = function () {
	  /**
	   * Creates a hash table.
	   */
	  function HashTable() {
	    _classCallCheck(this, HashTable);
	
	    this.table = [];
	  }
	
	  /**
	   * Gets value at given key.
	   * @param {*} key - Key of the element to get.
	   * @returns {*|undefined} Returns element at given key, or undefined if no item is found.
	   */
	
	
	  _createClass(HashTable, [{
	    key: 'get',
	    value: function get(key) {
	      var position = (0, _HashCodes.simpleHashCode)(key);
	
	      if (this.table[position] !== undefined) {
	        var current = this.table[position].head;
	
	        // loop from 1st element through to n minus 1th element
	        while (current.next) {
	          if (current.element.key === key) {
	            return current.element.value;
	          } else {
	            current = current.next;
	          }
	        }
	
	        // check last element
	        if (current.element.key === key) {
	          return current.element.value;
	        }
	      }
	      return undefined;
	    }
	
	    /**
	     * Put value in table at given key.
	     * @param {*} key - Key where to put given value.
	     * @param {*} value - Value to put at given key.
	     */
	
	  }, {
	    key: 'put',
	    value: function put(key, value) {
	      var position = (0, _HashCodes.simpleHashCode)(key);
	
	      if (this.table[position] === undefined) {
	        this.table[position] = new _LinkedList.LinkedList();
	      }
	
	      this.table[position].append(new _ValuePair.ValuePair(key, value));
	    }
	
	    /**
	     * Remove the value at the given key.
	     * @param {*} key - Key of value to remove.
	     * @returns {boolean} True if remove is successful, false if it is not.
	     */
	
	  }, {
	    key: 'remove',
	    value: function remove(key) {
	      var position = (0, _HashCodes.simpleHashCode)(key);
	
	      if (this.table[position] !== undefined) {
	        var current = this.table[position].head;
	
	        // loop from 1st element through to n minus 1th element
	        while (current.next) {
	          if (current.element.key === key) {
	            this.table[position].remove(current.element);
	            if (this.table[position].isEmpty()) {
	              this.table[position] = undefined;
	            }
	            return true;
	          } else {
	            current = current.next;
	          }
	        }
	
	        // check last element
	        if (current.element.key === key) {
	          this.table[position].remove(current.element);
	          if (this.table[position].isEmpty()) {
	            this.table[position] = undefined;
	          }
	          return true;
	        }
	      }
	      return false;
	    }
	  }]);

	  return HashTable;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.simpleHashCode = simpleHashCode;
	function simpleHashCode(key) {
	  var hash = 0;
	  for (var i = 0; i < key.length; i++) {
	    hash += key.charCodeAt(i);
	  }
	  return hash % 37;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ValuePair = exports.ValuePair = function () {
	  function ValuePair(key, value) {
	    _classCallCheck(this, ValuePair);
	
	    this.key = key;
	    this.value = value;
	  }
	
	  _createClass(ValuePair, [{
	    key: "toString",
	    value: function toString() {
	      return "[" + this.key + " - " + this.value + "]";
	    }
	  }]);

	  return ValuePair;
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BinarySearchTree = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BSTNode = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	        var tmp = minNode(node.right);
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
	
	var BinarySearchTree = exports.BinarySearchTree = function () {
	    /**
	     * Creates a binary search tree.
	     */
	    function BinarySearchTree() {
	        _classCallCheck(this, BinarySearchTree);
	
	        this.root = null;
	    }
	
	    /**
	     * Inserts key into tree.
	     * @param {*} key
	     */
	
	
	    _createClass(BinarySearchTree, [{
	        key: 'insert',
	        value: function insert(key) {
	            var node = new _BSTNode.BSTNode(key);
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
	
	    }, {
	        key: 'search',
	        value: function search(key) {
	            return searchNode.call(this, this.root, key);
	        }
	
	        /**
	         * Traverse through tree in order, executing callback each time with key as argument.
	         * @param {function} callback - Callback to be executed.
	         */
	
	    }, {
	        key: 'inOrderTraverse',
	        value: function inOrderTraverse(callback) {
	            inOrderTraverseNode.call(this, this.root, callback);
	        }
	
	        /**
	         * Traverse through tree in pre-order, executing callback each time with key as argument.
	         * @param {function} callback - Callback to be executed.
	         */
	
	    }, {
	        key: 'preOrderTraverse',
	        value: function preOrderTraverse(callback) {
	            preOrderTraverseNode.call(this, this.root, callback);
	        }
	
	        /**
	         * Traverse through tree in post-order, executing callback each time with key as argument.
	         * @param {function} callback - Callback to be executed.
	         */
	
	    }, {
	        key: 'postOrderTraverse',
	        value: function postOrderTraverse(callback) {
	            postOrderTraverseNode.call(this, this.root, callback);
	        }
	
	        /**
	         * Returns minimum key in tree.
	         * @returns {*} Minimum key.
	         */
	
	    }, {
	        key: 'min',
	        value: function min() {
	            return minNode.call(this, this.root);
	        }
	
	        /**
	         * Returns maximum key in tree.
	         * @returns {*} Maximum key.
	         */
	
	    }, {
	        key: 'max',
	        value: function max() {
	            return maxNode.call(this, this.root);
	        }
	
	        /**
	         * Removes given key from tree.
	         * @param {*} key - Key to be removed.
	         * @returns {*|null} Key that was removed or null if it was not found.
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            return removeNode.call(this, this.root, key);
	        }
	    }]);

	    return BinarySearchTree;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BSTNode = exports.BSTNode = function BSTNode(key) {
	    _classCallCheck(this, BSTNode);
	
	    this.key = key;
	    this.left = null;
	    this.right = null;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Graph = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Queue = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _verticesMap = new Map();
	var _connectionsMap = new Map();
	
	/** Class representing an undirected graph. */
	
	var Graph = exports.Graph = function () {
	    /**
	    * Creates a graph.
	    */
	    function Graph() {
	        _classCallCheck(this, Graph);
	
	        _verticesMap.set(this, []);
	        _connectionsMap.set(this, new Map());
	    }
	
	    /**
	     * Add given vertex to graph.
	     * @param {*} v - Vertex to add to graph.
	     */
	
	
	    _createClass(Graph, [{
	        key: 'add',
	        value: function add(v) {
	            _verticesMap.get(this).push(v);
	            _connectionsMap.get(this).set(v, []);
	        }
	
	        /**
	         * Remove given vertex from graph.
	         * @param {*} vertex - Vertex to be removed from graph.
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(vertex) {
	            var vertArr = _verticesMap.get(this);
	            vertArr.splice(vertArr.indexOf(vertex), 1);
	
	            var connections = _connectionsMap.get(this).get(vertex);
	            for (var i = 0; i < connections.length; i++) {
	                this.disconnect(vertex, connections[i]);
	            }
	        }
	
	        /**
	         * Connects two vertices with an edge.
	         * @param {*} vertex1 - First vertex to be connected to second vertex.
	         * @param {*} vertex2 - Second vertex to be connected to first vertex.
	         */
	
	    }, {
	        key: 'connect',
	        value: function connect(vertex1, vertex2) {
	            _connectionsMap.get(this).get(vertex1).push(vertex2);
	            _connectionsMap.get(this).get(vertex2).push(vertex1);
	        }
	
	        /**
	         * Disconnect two vertices.
	         * @param {*} vertex1 - First vertex to be disconnected from second vertex.
	         * @param {*} vertex2 - Second vertex to be disconnected from first vertex.
	         */
	
	    }, {
	        key: 'disconnect',
	        value: function disconnect(vertex1, vertex2) {
	            var arr1 = _connectionsMap.get(this).get(vertex1);
	            arr1.splice(arr1.indexOf(vertex2), 1);
	
	            var arr2 = _connectionsMap.get(this).get(vertex2);
	            arr2.splice(arr2.indexOf(vertex1), 1);
	        }
	
	        /**
	         * Checks if graph is empty.
	         * @returns {boolean} True if it's empty, false if it's not.
	         */
	
	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            return _verticesMap.get(this).length === 0;
	        }
	
	        /**
	         * Gets string representation of graph.
	         * @returns {string} String representing graph.
	         */
	
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var output = '';
	
	            for (var i = 0; i < _verticesMap.get(this).length; i++) {
	                output += _verticesMap.get(this)[i] + ' ->';
	                var connections = _connectionsMap.get(this).get(_verticesMap.get(this)[i]);
	                for (var y = 0; y < connections.length; y++) {
	                    output += ' ' + connections[y];
	                }
	                output += '\n';
	            }
	
	            return output;
	        }
	
	        /**
	         * Removes all vertices from graph.
	         */
	
	    }, {
	        key: 'clear',
	        value: function clear() {
	            _verticesMap.set(this, []);
	            _connectionsMap.set(this, new Map());
	        }
	
	        /**
	         * Returns the number of vertices in graph.
	         * @returns {number} Number of vertices in graph.
	         */
	
	    }, {
	        key: 'size',
	        value: function size() {
	            return _verticesMap.get(this).length;
	        }
	
	        /**
	         * Checks whether given vertex is in graph.
	         * @param {*} vertex - Vertex to check.
	         * @returns {boolean} True if it is, false if it's not.
	         */
	
	    }, {
	        key: 'contains',
	        value: function contains(vertex) {
	            var index = _verticesMap.get(this).findIndex(function (element) {
	                return element === vertex;
	            });
	
	            return index >= 0 ? true : false;
	        }
	
	        /**
	         * Gets array of all connections to given vertex.
	         * @param {*} vertex - Vertex to get connections of.
	         * @returns {array} Of connected vertices to given vertex.
	         */
	
	    }, {
	        key: 'getVerticesConnectedTo',
	        value: function getVerticesConnectedTo(vertex) {
	            return _connectionsMap.get(this).get(vertex);
	        }
	
	        /**
	         * Gets an array of all vertices in graph.
	         * @returns {array} Array of all vertices in graph.
	         */
	
	    }, {
	        key: 'getAllVertices',
	        value: function getAllVertices() {
	            return _verticesMap.get(this);
	        }
	
	        /**
	         * Performs callback on every vertices in graph, passing vertices' value in as an argument.
	         * @param {function} callback - Callback to be executed on each vertex.
	         */
	
	    }, {
	        key: 'forEach',
	        value: function forEach(callback) {
	            var color = [],
	                queue = new _Queue.Queue();
	
	            // Enqueue the point of origin
	            queue.enqueue(_verticesMap.get(this)[0]);
	
	            // Initialize colors
	            for (var i = 0; i < _verticesMap.get(this).length; i++) {
	                color[_verticesMap.get(this)[i]] = 'white';
	            }
	
	            while (!queue.isEmpty()) {
	                var u = queue.dequeue(),
	                    neighbors = _connectionsMap.get(this).get(u);
	
	                // mark vertex u as visited
	                color[u] = 'grey';
	
	                // for each neighbor of vertex u, if unvisited, visit, add to queue and mark as visited
	                for (var _i = 0; _i < neighbors.length; _i++) {
	                    var w = neighbors[_i];
	                    if (color[w] === 'white') {
	                        color[w] = 'grey';
	                        queue.enqueue(w);
	                    }
	                }
	
	                // mark vertex u as discovered
	                color[u] = 'black';
	
	                // execute callback on vertex u
	                if (callback) {
	                    callback(u);
	                }
	            }
	        }
	
	        /**
	         * Returns an object containing keys for all vertices and values representing the distances they are from the given vertex.
	         * @param {*} vertex - Vertex to get distances from.
	         * @returns {object} Object containing distances.
	         */
	
	    }, {
	        key: 'getDistancesFrom',
	        value: function getDistancesFrom(vertex) {
	            var color = [],
	                queue = new _Queue.Queue(),
	                distances = {};
	
	            queue.enqueue(vertex);
	
	            // Initialize colors
	            for (var i = 0; i < _verticesMap.get(this).length; i++) {
	                color[_verticesMap.get(this)[i]] = 'white';
	            }
	
	            for (var _i2 = 0; _i2 < _verticesMap.get(this).length; _i2++) {
	                distances[_verticesMap.get(this)[_i2]] = 0;
	            }
	
	            while (!queue.isEmpty()) {
	                var u = queue.dequeue(),
	                    neighbors = _connectionsMap.get(this).get(u);
	
	                color[u] = 'grey';
	                for (var _i3 = 0; _i3 < neighbors.length; _i3++) {
	                    var w = neighbors[_i3];
	                    if (color[w] === 'white') {
	                        color[w] = 'grey';
	                        distances[w] = distances[u] + 1;
	                        queue.enqueue(w);
	                    }
	                }
	
	                color[u] = 'black';
	            }
	            return distances;
	        }
	    }]);

	    return Graph;
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=structd.js.map