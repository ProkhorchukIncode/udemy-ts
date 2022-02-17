import 'reflect-metadata';

@printMetadata
class Car {
  color: string = 'black';

  @markFunction('big secret')
  drive(): void {
    console.log('I am driving');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Car, key: string) {
    Reflect.defineMetadata('info', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Car) {
  for (let key in target.prototype) {
    const info = Reflect.getMetadata('info', target.prototype, key);
    console.log(info);
  }
}

//

const box = {
  color: 'black',
};

Reflect.defineMetadata('note', 'hello', box);
Reflect.defineMetadata('width', 30, box);

// const note = Reflect.getMetadata('note', box);
// const width = Reflect.getMetadata('width', box);

// console.log(note, width);

Reflect.defineMetadata('note', 'hello', box, 'color');

const note = Reflect.getMetadata('note', box, 'color');

// console.log(note);
