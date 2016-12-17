import { Stack } from './structures/stack/Stack';
import { Queue } from './structures/queue/Queue';
import { LinkedList } from './structures/linked-list/LinkedList';
import { HashTable } from './structures/hash-table/HashTable';
import { BinarySearchTree } from './structures/binary-search-tree/BinarySearchTree';
import { Graph } from './structures/graph/Graph';

var dstruct = {
  Stack             : Stack,
  Queue             : Queue,
  LinkedList        : LinkedList,
  HashTable         : HashTable,
  BinarySearchTree  : BinarySearchTree,
  Graph             : Graph
};

export { dstruct };
