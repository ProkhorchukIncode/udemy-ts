import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([4, -3, 11, 2]);

numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('KNoZZknk');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
linkedList.sort();
linkedList.print();
