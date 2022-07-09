A simple, no-frills, seedable random number generator from sha256 hashes.

Written in plain JavaScript. Depends on Node.js Crypto.

## Installation

```sh
npm install seedable
```

## Usage

```js
const createRng = require("seedable");

const rng = createRng(); // same as createRng(0)

rng.value; // -> 0.7383370615243194

rng.float(); // -> 0.9614931357219447 (same as rng.value)

rng.int(); // -> 100808138967781

rng.int(0, 10); // -> 4

rng.int() / rng.maxInt; // -> 0.103077615824823 (same as rng.value)

Array.from({ length: 5 }, rng.float);
/* [
  0.09483751870746815,
  0.7032565997288494,
  0.7963769571204509,
  0.22362232298566553,
  0.15776174101813822
] */
```
