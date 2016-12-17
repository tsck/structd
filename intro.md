# Structd

[![travis build](https://img.shields.io/travis/tsck/structd.svg)](https://travis-ci.org/tsck/structd)
[![version](https://img.shields.io/npm/v/structd.svg)](https://www.npmjs.com/package/structd)
[![coverage](https://img.shields.io/codecov/c/github/tsck/structd.svg)](https://codecov.io/gh/tsck/structd)
[![license](https://img.shields.io/github/license/tsck/structd.svg)](https://github.com/tsck/structd/blob/master/LICENSE)


Structd is a JavaScript data structure extension library that provides additional data structure class support. It is designed to be used in bothin [Node.js](https://nodejs.org/en/) and is installable via `npm install struct`, it can also be used directly in the browser.

Structd provides class support for a number of data structures including:
* Stacks
* Queues
* Hash Tables
* Linked Lists
* Binary Search Tress
* Graphs

## Quick Example

```javascript
let structd = require('structd');

let graph = new structd.Graph();

let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < vertices.length; i++) {
    graph.add(vertices[i]);
}

graph.connect('A', 'B');
graph.connect('A', 'C');
graph.connect('A', 'D');
graph.connect('C', 'D');
graph.connect('C', 'G');
graph.connect('D', 'G');
graph.connect('D', 'H');
graph.connect('B', 'E');
graph.connect('B', 'F');
graph.connect('E', 'I');

graph.forEach((vertex) => {
  console.log(vertex);
});
```

## In the Browser
```html
<script type="text/javascript" src="structd.min.js"></script>
<script type="text/javascript">

    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.toString()); // [1,2,3]

</script>
```

## Download

The source is available for download from [GitHub](https://github.com/tsck/structd). Alternatively, you can install using npm:

```bash
$ npm install structd
```