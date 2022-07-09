export interface Rng {
  maxInt: number;
  get value(): number;
  float(): number;
  int(): number;
}
export declare function createRng(seed: number = 0, offset: number = 0): Rng;
