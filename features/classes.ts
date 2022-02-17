class Vehicle {
  // public drive(): void {
  //   console.log(`I'm driving`);
  // }
  public stop(): void {
    console.log(`I'm stoping`);
  }
  protected beep(): void {
    console.log('Beep!');
  }
  constructor(public color: string) {}
}

class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log(`I'm car and I'm driving`);
  }
  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.stop()

const car1 = new Car1(4, 'silver');
// car1.startDrivingProcess()
// car1.stop()
