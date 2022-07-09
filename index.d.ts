export interface Rng {
  maxInt: number;
  get value(): number;
  float(): number;
  int(): number;
}
declare function createRng(seed: number = 0, offset: number = 0): Rng;

export = createRng;
