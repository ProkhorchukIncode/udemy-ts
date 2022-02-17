"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numberCollection = new NumbersCollection_1.NumbersCollection([4, -3, 11, 2]);
numberCollection.sort();
console.log(numberCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('KNoZZknk');
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
linkedList.sort();
linkedList.print();