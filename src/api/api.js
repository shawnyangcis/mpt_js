import MerklePatriciaTree from '../model/mpt.js';

function generateMTP(addresses) {
    const root = new MerklePatriciaTree();

    for (const addr of addresses) {
        // addr: {key: value}
        root.insert(addr[0], addr[1]);
    }

    return root;
}

function insertAddr(key, value, root) {
    root.insert(key, value);
}

function getValue(key, root) {
    return root.findValue(key);
}

export { generateMTP, insertAddr, getValue };