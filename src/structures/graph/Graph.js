import { Queue } from '../queue/Queue';

let _verticesMap = new Map();
let _connectionsMap = new Map();

export class Graph {
    constructor() {
        _verticesMap.set(this, []);
        _connectionsMap.set(this, new Map());
    }

    add(v) {
        _verticesMap.get(this).push(v);
        _connectionsMap.get(this).set(v, []);
    }

    remove(vertex) {
        let vertArr = _verticesMap.get(this);
        vertArr.splice(vertArr.indexOf(vertex), 1);

        let connections = _connectionsMap.get(this).get(vertex);
        for (let i = 0; i < connections.length; i++) {
            this.disconnect(vertex, connections[i]);
        }
    }

    connect(vertex1, vertex2) {
        _connectionsMap.get(this).get(vertex1).push(vertex2);
        _connectionsMap.get(this).get(vertex2).push(vertex1);
    }

    disconnect(vertex1, vertex2) {
        let arr1 = _connectionsMap.get(this).get(vertex1);
        arr1.splice(arr1.indexOf(vertex2), 1);

        let arr2 = _connectionsMap.get(this).get(vertex2);
        arr2.splice(arr2.indexOf(vertex1), 1);
    }

    isEmpty() {
        return _verticesMap.get(this).length === 0;
    }

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

    clear() {
        _verticesMap.set(this, []);
        _connectionsMap.set(this, new Map());
    }

    size() {
        return _verticesMap.get(this).length;
    }

    contains(vertex) {
        let index = _verticesMap.get(this).findIndex((element) => {
            return  element === vertex;
        });

        return index >= 0 ? true : false;
    }

    getVerticesConnectedTo(vertex) {
        return _connectionsMap.get(this).get(vertex);
    }

    getAllVertices() {
        return _verticesMap.get(this);
    }

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