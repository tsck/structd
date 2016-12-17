(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dstruct"] = factory();
	else
		root["dstruct"] = factory();
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
	exports.dstruct = undefined;
	
	var _Stack = __webpack_require__(1);
	
	var _Queue = __webpack_require__(2);
	
	var _LinkedList = __webpack_require__(3);
	
	var _HashTable = __webpack_require__(5);
	
	var _BinarySearchTree = __webpack_require__(8);
	
	var _Graph = __webpack_require__(10);
	
	var dstruct = {
	  Stack: _Stack.Stack,
	  Queue: _Queue.Queue,
	  LinkedList: _LinkedList.LinkedList,
	  HashTable: _HashTable.HashTable,
	  BinarySearchTree: _BinarySearchTree.BinarySearchTree,
	  Graph: _Graph.Graph
	};
	
	exports.dstruct = dstruct;

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
	
	var Stack = exports.Stack = function () {
	  function Stack() {
	    _classCallCheck(this, Stack);
	
	    map.set(this, []);
	  }
	
	  _createClass(Stack, [{
	    key: "toString",
	    value: function toString() {
	      var stack = map.get(this);
	      return stack.toString();
	    }
	  }, {
	    key: "pop",
	    value: function pop() {
	      var stack = map.get(this);
	      return stack.pop();
	    }
	  }, {
	    key: "push",
	    value: function push(element) {
	      var stack = map.get(this);
	      stack.push(element);
	    }
	  }, {
	    key: "size",
	    value: function size() {
	      var stack = map.get(this);
	      return stack.length;
	    }
	  }, {
	    key: "isEmpty",
	    value: function isEmpty() {
	      var stack = map.get(this);
	      return stack.length === 0;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      var stack = map.get(this);
	      stack.splice(0, stack.length);
	    }
	  }]);
	
	  return Stack;
	}();
	
	;

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
	
	var Queue = exports.Queue = function () {
	  function Queue() {
	    _classCallCheck(this, Queue);
	
	    map.set(this, []);
	  }
	
	  _createClass(Queue, [{
	    key: "toString",
	    value: function toString() {
	      var queue = map.get(this);
	      return queue.toString();
	    }
	  }, {
	    key: "dequeue",
	    value: function dequeue() {
	      var queue = map.get(this);
	      return queue.shift();
	    }
	  }, {
	    key: "enqueue",
	    value: function enqueue(element) {
	      var queue = map.get(this);
	      queue.push(element);
	    }
	  }, {
	    key: "size",
	    value: function size() {
	      var queue = map.get(this);
	      return queue.length;
	    }
	  }, {
	    key: "isEmpty",
	    value: function isEmpty() {
	      var queue = map.get(this);
	      return queue.length === 0;
	    }
	  }, {
	    key: "front",
	    value: function front() {
	      var queue = map.get(this);
	      return queue[0];
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      var queue = map.get(this);
	      queue.splice(0, queue.length);
	    }
	  }]);
	
	  return Queue;
	}();
	
	;

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
	
	var LinkedList = exports.LinkedList = function () {
	  function LinkedList() {
	    _classCallCheck(this, LinkedList);
	
	    this.length = 0;
	    this.head = null;
	  }
	
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
	  }, {
	    key: 'remove',
	    value: function remove(element) {
	      var position = this.indexOf(element);
	      this.removeAt(position);
	    }
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
	  }, {
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.length === 0;
	    }
	  }, {
	    key: 'size',
	    value: function size() {
	      return this.length;
	    }
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
	
	;

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
	
	;

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
	
	var HashTable = exports.HashTable = function () {
	  function HashTable() {
	    _classCallCheck(this, HashTable);
	
	    this.table = [];
	  }
	
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
	  }, {
	    key: 'put',
	    value: function put(key, value) {
	      var position = (0, _HashCodes.simpleHashCode)(key);
	
	      if (this.table[position] === undefined) {
	        this.table[position] = new _LinkedList.LinkedList();
	      }
	
	      this.table[position].append(new _ValuePair.ValuePair(key, value));
	    }
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
	
	;

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
	};

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
	
	;

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
	            insertNode(node.left, newNode);
	        }
	    } else {
	        if (node.right === null) {
	            node.right = newNode;
	        } else {
	            insertNewNode(node.right, newNode);
	        }
	    }
	}
	
	var BinarySearchTree = exports.BinarySearchTree = function () {
	    function BinarySearchTree() {
	        _classCallCheck(this, BinarySearchTree);
	
	        this.root = null;
	    }
	
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
	    }, {
	        key: 'search',
	        value: function search(key) {
	            return searchNode.call(this, this.root, key);
	        }
	    }, {
	        key: 'inOrderTraverse',
	        value: function inOrderTraverse(callback) {
	            inOrderTraverseNode.call(this, this.root, callback);
	        }
	    }, {
	        key: 'preOrderTraverse',
	        value: function preOrderTraverse(callback) {
	            preOrderTraverseNode.call(this, this.root, callback);
	        }
	    }, {
	        key: 'postOrderTraverse',
	        value: function postOrderTraverse(callback) {
	            postOrderTraverseNode.call(this, this.root, callback);
	        }
	    }, {
	        key: 'min',
	        value: function min() {
	            return minNode.call(this, this.root);
	        }
	    }, {
	        key: 'max',
	        value: function max() {
	            return maxNode.call(this, this.root);
	        }
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
	
	var Graph = exports.Graph = function () {
	    function Graph() {
	        _classCallCheck(this, Graph);
	
	        _verticesMap.set(this, []);
	        _connectionsMap.set(this, new Map());
	    }
	
	    _createClass(Graph, [{
	        key: 'add',
	        value: function add(v) {
	            _verticesMap.get(this).push(v);
	            _connectionsMap.get(this).set(v, []);
	        }
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
	    }, {
	        key: 'connect',
	        value: function connect(vertex1, vertex2) {
	            _connectionsMap.get(this).get(vertex1).push(vertex2);
	            _connectionsMap.get(this).get(vertex2).push(vertex1);
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect(vertex1, vertex2) {
	            var arr1 = _connectionsMap.get(this).get(vertex1);
	            arr1.splice(arr1.indexOf(vertex2), 1);
	
	            var arr2 = _connectionsMap.get(this).get(vertex2);
	            arr2.splice(arr2.indexOf(vertex1), 1);
	        }
	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            return _verticesMap.get(this).length === 0;
	        }
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
	    }, {
	        key: 'clear',
	        value: function clear() {
	            _verticesMap.set(this, []);
	            _connectionsMap.set(this, new Map());
	        }
	    }, {
	        key: 'size',
	        value: function size() {
	            return _verticesMap.get(this).length;
	        }
	    }, {
	        key: 'contains',
	        value: function contains(vertex) {
	            var index = _verticesMap.get(this).findIndex(function (element) {
	                return element === vertex;
	            });
	
	            return index >= 0 ? true : false;
	        }
	    }, {
	        key: 'getVerticesConnectedTo',
	        value: function getVerticesConnectedTo(vertex) {
	            return _connectionsMap.get(this).get(vertex);
	        }
	    }, {
	        key: 'getAllVertices',
	        value: function getAllVertices() {
	            return _verticesMap.get(this);
	        }
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
	
	;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=dstruct.js.map