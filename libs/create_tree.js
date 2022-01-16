import { PrefixTree } from './prefix_tree/index.js';

export function createTree(dataList) {
    return new PrefixTree(dataList).tree;
}
