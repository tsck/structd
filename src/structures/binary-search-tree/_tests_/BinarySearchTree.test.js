import { expect } from 'Chai';
import { BinarySearchTree } from '../BinarySearchTree.js';

describe('BinarySearchTree class', () => {
    describe('insert(key) and inOrderTraverse(callback)', () => {
        it('should insert new key in the tree', () => {
            let bst = new BinarySearchTree();
            let nodes = [];
            bst.insert(2);
            bst.insert(1);
            bst.insert(9);
            bst.insert(3);
            bst.inOrderTraverse((node) => {
                nodes.push(node);
            });
            expect(nodes).to.eql([1,2,3,9]);
        });
    });

    describe('search(key)', () => {
        it('should return true if key is in tree', () => {
            let bst = new BinarySearchTree();
            bst.insert(2);
            bst.insert(1);
            bst.insert(3);
            expect(bst.search(2)).to.be.true;
        });

        it('should return false if key is not in tree', () => {
            let bst = new BinarySearchTree();
            bst.insert(2);
            bst.insert(1);
            bst.insert(3);
            expect(bst.search(9)).to.be.false;
        });
    });

    describe('preOrderTraverse(callback)', () => {
        it('should visit all nodes of tree using pre-order traverse', () => {
            let bst = new BinarySearchTree();
            let nodes = [];
            bst.insert(2);
            bst.insert(1);
            bst.insert(9);
            bst.insert(3);
            bst.preOrderTraverse((node) => {
                nodes.push(node);
            });
            expect(nodes).to.eql([2,1,9,3]);
        });
    });

    describe('postOrderTraverse(callback)', () => {
        it('should visit all nodes of tree using post-order traverse', () => {
            let bst = new BinarySearchTree();
            let nodes = [];
            bst.insert(2);
            bst.insert(1);
            bst.insert(9);
            bst.insert(3);
            bst.postOrderTraverse((node) => {
                nodes.push(node);
            });
            expect(nodes).to.eql([1,3,9,2]);
        });
    });

    describe('min()', () => {
        it('should return minimum value/key in tree', ()=> {
            let bst = new BinarySearchTree();
            bst.insert(2);
            bst.insert(1);
            bst.insert(9);
            bst.insert(3);
            expect(bst.min()).to.equal(1);
        });
    });

    describe('max()', () => {
        it('should return maximum value/key in tree', () => {
            let bst = new BinarySearchTree();
            bst.insert(2);
            bst.insert(1);
            bst.insert(9);
            bst.insert(3);
            expect(bst.max()).to.equal(9);
        });
    });

    describe('remove(key)', () => {
        it('should remove the key from the tree', () => {
            let bst = new BinarySearchTree();
            bst.insert(2);
            bst.insert(1);
            bst.insert(9);
            bst.insert(3);
            bst.remove(9);
            expect(bst.search(9)).to.be.false;
        });
    });
});