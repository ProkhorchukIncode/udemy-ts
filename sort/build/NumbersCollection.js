"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, ridhtIndex) {
        return this.data[leftIndex] > this.data[ridhtIndex];
    }
    swap(leftIndex, ridhtIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[ridhtIndex];
        this.data[ridhtIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
