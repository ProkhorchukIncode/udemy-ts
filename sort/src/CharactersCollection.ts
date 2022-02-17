import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, ridhtIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[ridhtIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, ridhtIndex: number): void {
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[ridhtIndex];
    characters[ridhtIndex] = leftHand;

    this.data = characters.join('');
  }
}
