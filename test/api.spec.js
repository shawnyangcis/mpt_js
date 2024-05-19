import { generateMTP, insertAddr, getValue } from '../src/api/api.js';

const addresses = new Map([['a1b2c3d4e5f6', 3.1415926]]);

const mptRoot = generateMTP(addresses);

let value = getValue('a1b2c3d4e5f6', mptRoot);
console.log(value);

insertAddr("a1b2c3d4", 3.15, mptRoot);
value = getValue("a1b2c3d4", mptRoot);
console.log(value);
