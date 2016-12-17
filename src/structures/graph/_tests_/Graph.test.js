import { expect } from 'chai';
import { Graph } from '../Graph';

describe('Graph Class', () => {

    // Test setup
    let graph = new Graph();
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


    describe('add(v), connect(v,w), and toString()', () => {
        it('should add vertices, add edges, and print them out correctly', () => {
            let expectedResult = 'A -> B C D\nB -> A E F\nC -> A D G\nD -> A C G H\n';
            expectedResult += 'E -> B I\nF -> B\nG -> C D\nH -> D\nI -> E\n';
            expect(graph.toString()).to.equal(expectedResult);

        });
    });

    describe('disconnect(vertex1, vertex2)', () => {
        it('should disconnect the two given vertices', () => {
            let newGraph = new Graph();
            let vertices = ['A', 'B', 'C'];
            for (let i = 0; i < vertices.length; i++) {
                newGraph.add(vertices[i]);
            }
            newGraph.connect('A', 'B');
            newGraph.connect('A', 'C');
            newGraph.disconnect('A', 'B');
            expect(newGraph.getVerticesConnectedTo('A')).to.eql(['C']);
        });
    });

    describe('remove(vertex)', () => {
        let newGraph = new Graph();
        let vertices = ['A', 'B', 'C'];
        for (let i = 0; i < vertices.length; i++) {
            newGraph.add(vertices[i]);
        }
        newGraph.connect('A', 'B');
        newGraph.connect('A', 'C');
        newGraph.connect('B', 'C');
        newGraph.remove('B');

        it('should remove vertex from graph', () => {
            expect(newGraph.getAllVertices()).to.eql(['A', 'C']);
        });

        it('should remove vertex as a connection to connected vertices', () => {
            expect(newGraph.getVerticesConnectedTo('A')).to.eql(['C']);
        });
    });

    describe('forEach(callback)', () => {
        it('should hit all vertices in graph, calling callback for each', () => {
            let visitedVertices = [];

            graph.forEach((v) => {
                visitedVertices.push(v);
            });

            expect(visitedVertices).to.eql(vertices);
        });
    });

    describe('isEmpty()', () => {
        it('should return true if graph is not empty', () => {
            expect(graph.isEmpty()).to.be.false;
        });

        it('should return false if graph is empty', () => {
            let emptyGraph = new Graph();
            expect(emptyGraph.isEmpty()).to.be.true;
        });
    });

    describe('getDistancesFrom(vertex)', () => {
        it('should return an object containing distances from all other vertices', () => {
            expect(graph.getDistancesFrom(vertices[0])).to.eql({ A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 });
        });
    });

    describe('clear()', () => {
        it('should remove all vertices from graph', () => {
            let graphToEmpty = new Graph();
            let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
            for (let i = 0; i < vertices.length; i++) {
                graphToEmpty.add(vertices[i]);
            }
            graphToEmpty.clear();
            expect(graphToEmpty.isEmpty()).to.be.true;
        });
    });

    describe('size()', () => {
        it('should return number of vertices in graph', () => {
            expect(graph.size()).to.be.equal(9);
        });
    });

    describe('contains(vertex)', () => {
        it('should return true if vertex is in graph', () => {
            expect(graph.contains(vertices[0])).to.be.true;
        });

        it('should return false if vertex is in graph', () => {
            expect(graph.contains('Z')).to.be.false;
        });
    });

    describe('getVerticesConnectedTo()', () => {
        it('should return array containing vertices connected to given vertex', () => {
            let connections = graph.getVerticesConnectedTo(vertices[0]);
            let expectedConnections = ['B','C','D'];
            expect(connections).to.eql(expectedConnections);
        });
    });

    describe('getAllVertices()', () => {
        it('should return array containing all vertices', () => {
            expect(graph.getAllVertices()).to.eql(vertices);
        });
    });
});