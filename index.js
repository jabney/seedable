"use strict";
const crypto = require("crypto");

/**
 * @param {string|number} [seed] the random seed for the generator
 * @param {number} [offset] offset into the result set for the generator
 */
const createRng = (seed = 0, offset = 0) => {
  const numBytes = 6; // 48 bits
  const maxInt = 2 ** 48;

  let count = offset;

  /**
   * @param {number|string} seed
   */
  const createHash = (seed) => {
    const hash = crypto.createHash("sha256");
    hash.update(seed.toString());
    return hash;
  };

  /**
   * @param {crypto.Hash} hash
   */
  const getInt = (hash) => {
    const bytes = hash.digest("hex").slice(-2 * numBytes);
    return parseInt(bytes, 16);
  };

  const randomFloat = () => {
    count = (count % Number.MAX_SAFE_INTEGER) + 1;
    const hash = createHash(seed);
    hash.update(count.toString());
    return getInt(hash) / maxInt;
  };

  /**
   * @param {number} min minimum result value, inclusive
   * @param {number} max maximum result value, exclusive
   */
  const randomInt = (min = 0, max = maxInt) => {
    const f = randomFloat();
    return Math.floor(min + f * (max - min));
  };

  return Object.freeze({
    /**
     * The size of the integer used to produce normalized, floating point values
     */
    maxInt,
    /**
     * Produce a random int in the range [min, max)
     */
    int: randomInt,
    /**
     * Produce a random float in the range [0, 1)
     */
    float: randomFloat,
    /**
     * Produce a random float in the range [0, 1)
     */
    get value() {
      return randomFloat();
    },
  });
};

module.exports = createRng;
