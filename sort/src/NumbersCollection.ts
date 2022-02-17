import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, ridhtIndex: number): boolean {
    return this.data[leftIndex] > this.data[ridhtIndex];
  }

  swap(leftIndex: number, ridhtIndex: number) {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[ridhtIndex];
    this.data[ridhtIndex] = leftHand;
  }
}
