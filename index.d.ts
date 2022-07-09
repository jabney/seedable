export interface Rng {
  maxInt: number;
  get value(): number;
  float(): number;
  int(): number;
}
declare function createRng(seed: number | string = 0, offset: number = 0): Rng;

export = createRng;
