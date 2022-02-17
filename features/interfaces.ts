interface IReportable {
  summary(): string
}

const oldSivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(){
    return 'Summary'
  }
}

const cola = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: IReportable): void => {
  // console.log(`Name ${vehicle.name}`);
  // console.log(`Year ${vehicle.year}`);
  // console.log(`Broken ${vehicle.broken}`);
  console.log(item.summary());
}

printSummary(oldSivic);
printSummary(cola)