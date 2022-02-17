@classDecorator
class DecoratedCar {
  @testDecorator
  color: string = 'white';

  @testDecorator
  get formattedColor(): string {
    return `This car color is ${this.color}`;
  }

  @logError('Oooops!')
  drive(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('Vrrrrr');
    } else {
      console.log('I am driving');
    }
  }
}

function classDecorator(constructor: typeof DecoratedCar) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(key);
}

function logError(errorMassage: string) {
  return function (target: any, key: string, desk: PropertyDescriptor): void {
    const method = desk.value;

    desk.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMassage);
      }
    };
  };
}

// testDecorator(DecoratedCar.prototype, 'drive');
