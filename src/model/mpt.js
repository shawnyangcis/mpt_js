import Node from './node.js';

class MerklePatriciaTree {
    constructor() {
        this.root = new Node();
    }

    insert(key, value) {
        if (value === null || value === undefined) {
            return;
        }
        const newNode = this.findNode(key);
        newNode.value = value;
    }

    findNode(key) {
        let currentNode = this.root;
        for (let index = 0; index < key.length; index++) {
            const hexChar = key[index];
            const child = currentNode.children[hexChar];
            if (child === null || child === undefined) {
                currentNode.children[hexChar] = new Node();
            }
            currentNode = currentNode.children[hexChar];
        }
        return currentNode;
    }

    findValue(key) {
        return this.findNode(key).value;
    }
}

export default MerklePatriciaTree;