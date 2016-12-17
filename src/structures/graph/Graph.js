import { Queue } from '../queue/Queue';

let _verticesMap = new Map();
let _connectionsMap = new Map();

/** Class representing an undirected graph. */
export class Graph {
  /**
  * Creates a graph.
  */
  constructor() {
    _verticesMap.set(this, []);
    _connectionsMap.set(this, new Map());
  }

  /**
   * Add given vertex to graph.
   * @param {*} v - Vertex to add to graph.
   */
  add(v) {
    _verticesMap.get(this).push(v);
    _connectionsMap.get(this).set(v, []);
  }

  /**
   * Remove given vertex from graph.
   * @param {*} vertex - Vertex to be removed from graph.
   */
  remove(vertex) {
    let vertArr = _verticesMap.get(this);
    vertArr.splice(vertArr.indexOf(vertex), 1);

    let connections = _connectionsMap.get(this).get(vertex);
    for (let i = 0; i < connections.length; i++) {
        this.disconnect(vertex, connections[i]);
    }
  }

  /**
   * Connects two vertices with an edge.
   * @param {*} vertex1 - First vertex to be connected to second vertex.
   * @param {*} vertex2 - Second vertex to be connected to first vertex.
   */
  connect(vertex1, vertex2) {
    _connectionsMap.get(this).get(vertex1).push(vertex2);
    _connectionsMap.get(this).get(vertex2).push(vertex1);
  }

  /**
   * Disconnect two vertices.
   * @param {*} vertex1 - First vertex to be disconnected from second vertex.
   * @param {*} vertex2 - Second vertex to be disconnected from first vertex.
   */
  disconnect(vertex1, vertex2) {
    let arr1 = _connectionsMap.get(this).get(vertex1);
    arr1.splice(arr1.indexOf(vertex2), 1);

    let arr2 = _connectionsMap.get(this).get(vertex2);
    arr2.splice(arr2.indexOf(vertex1), 1);
  }

  /**
   * Checks if graph is empty.
   * @returns {boolean} True if it's empty, false if it's not.
   */
  isEmpty() {
      return _verticesMap.get(this).length === 0;
  }

  /**
   * Gets string representation of graph.
   * @returns {string} String representing graph.
   */
  toString() {
      let output = '';

      for (let i = 0; i < _verticesMap.get(this).length; i++) {
          output += `${_verticesMap.get(this)[i]} ->`;
          let connections = _connectionsMap.get(this).get(_verticesMap.get(this)[i]);
          for (let y = 0; y < connections.length; y++) {
              output += ` ${connections[y]}`;
          }
          output += '\n';
      }

      return output;
  }

  /**
   * Removes all vertices from graph.
   */
  clear() {
      _verticesMap.set(this, []);
      _connectionsMap.set(this, new Map());
  }

  /**
   * Returns the number of vertices in graph.
   * @returns {number} Number of vertices in graph.
   */
  size() {
    return _verticesMap.get(this).length;
  }

  /**
   * Checks whether given vertex is in graph.
   * @param {*} vertex - Vertex to check.
   * @returns {boolean} True if it is, false if it's not.
   */
  contains(vertex) {
    let index = _verticesMap.get(this).findIndex((element) => {
      return  element === vertex;
    });

    return index >= 0 ? true : false;
  }

  /**
   * Gets array of all connections to given vertex.
   * @param {*} vertex - Vertex to get connections of.
   * @returns {array} Of connected vertices to given vertex.
   */
  getVerticesConnectedTo(vertex) {
    return _connectionsMap.get(this).get(vertex);
  }

  /**
   * Gets an array of all vertices in graph.
   * @returns {array} Array of all vertices in graph.
   */
  getAllVertices() {
      return _verticesMap.get(this);
  }

  /**
   * Performs callback on every vertices in graph, passing vertices' value in as an argument.
   * @param {function} callback - Callback to be executed on each vertex.
   */
  forEach(callback) {
      let
          color = [],
          queue = new Queue();

      // Enqueue the point of origin
      queue.enqueue(_verticesMap.get(this)[0]);

      // Initialize colors
      for (let i = 0; i < _verticesMap.get(this).length; i++) {
          color[_verticesMap.get(this)[i]] = 'white';
      }

      while (!queue.isEmpty()) {
          let u         = queue.dequeue(),
              neighbors = _connectionsMap.get(this).get(u);

          // mark vertex u as visited
          color[u] = 'grey';

          // for each neighbor of vertex u, if unvisited, visit, add to queue and mark as visited
          for (let i = 0; i < neighbors.length; i++) {
              let w = neighbors[i];
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
  getDistancesFrom(vertex) {
      let color = [],
          queue = new Queue(),
          distances = {};

      queue.enqueue(vertex);

      // Initialize colors
      for (let i = 0; i < _verticesMap.get(this).length; i++) {
          color[_verticesMap.get(this)[i]] = 'white';
      }

      for (let i = 0; i < _verticesMap.get(this).length; i++) {
          distances[_verticesMap.get(this)[i]] = 0;
      }

      while (!queue.isEmpty()) {
          let u         = queue.dequeue(),
              neighbors = _connectionsMap.get(this).get(u);

          color[u] = 'grey';
          for (let i = 0; i < neighbors.length; i++) {
              let w = neighbors[i];
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
}